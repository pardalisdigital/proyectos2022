const anElement = new AutoNumeric('#valor', {
   currencySymbol: ' $',
   decimalCharacter: ',',
   digitGroupSeparator: '.',
   decimalPlaces: 0,
});



function obtenerdatos() {
   let valor = anElement.getNumericString();
   let year = document.getElementById('year').value;
   let periodo = document.getElementById('periodo').value;
   let llenarTabla = document.querySelector('#lista_tabla tbody');

   /* Variables */
   let rentabilidad = 0.0440;
   let rentabilidad_final;
   let ncuotas;
   let mes = year * 12;


   while (llenarTabla.firstChild) {
      llenarTabla.removeChild(llenarTabla.firstChild);
   }


   /* Calculo del interes */
   function fnc_rentabilidad() {
      if (periodo == "Mensual") {
         rentabilidad_final = (((rentabilidad + 1) ** (1 / 12)) - 1);
      } else if (periodo == "Bimensual") {
         rentabilidad_final = (((rentabilidad + 1) ** (1 / 6)) - 1);
      } else if (periodo == "Trimestral") {
         rentabilidad_final = (((rentabilidad + 1) ** (1 / 4)) - 1);
      } else if (periodo == "Semestral") {
         rentabilidad_final = (((rentabilidad + 1) ** (1 / 2)) - 1);
      } else if (periodo == "Anual") {
         rentabilidad_final = rentabilidad;
      }
   }
   fnc_rentabilidad();

   console.log(rentabilidad_final);


   function fnc_numerocuotas() {
      if (periodo == "Mensual") {
         ncuotas = year * 12;
      } else if (periodo == "Bimensual") {
         ncuotas = year * 6;
      } else if (periodo == "Trimestral") {
         ncuotas = year * 4;
      } else if (periodo == "Semestral") {
         ncuotas = year * 2;
      } else if (periodo == "Anual") {
         ncuotas = year;
      }
   }
   fnc_numerocuotas();

   console.log(ncuotas);

   /* calculo de va */

   let va = valor / (1 + rentabilidad_final) ** ncuotas;

   console.log(va);

   /* Calculo de la formulación */
   let calculo = ((va * rentabilidad_final) / (1 - (1 + rentabilidad_final) ** (-ncuotas)));

   let calculoFinal = calculo.toFixed(0);

   console.log(calculo);

   document.registro.valorTotal.value = '$' + new Intl.NumberFormat().format(valor);
   document.registro.valorAporte.value = '$' + new Intl.NumberFormat().format(calculoFinal);
   document.registro.tiempo.value = year;
   document.registro.Periodo.value = periodo;
   document.registro.rentabilidad.value = (rentabilidad * 100).toFixed(2).replace(/\./g, ",");


   let fechas = [];
   let fechaActual = Date.now();
   let mes_actual = moment(fechaActual);
   mes_actual.add(1, 'month');



   let tableSaldo = calculo;
   let tableInteres = 0;


   console.log(tableInteres);

   for (let i = 1; i <= mes; i++) {


      tableSaldo = (tableSaldo + calculo + tableInteres);
      tableInteres = parseFloat(tableSaldo * rentabilidad_final);
      tableTotal = (calculo + tableInteres);

      /* formato fecha */

      fechas[i] = mes_actual.format('DD-MM-YYYY');
      mes_actual.add(1, 'month');

      /*       if (periodo == "Mensual") {
               mes_actual.add(1, 'month');
            } else if (periodo == "Bimensual") {
               mes_actual.add(2, 'month');
            } else if (periodo == "Trimestral") {
               mes_actual.add(3, 'month');
            } else if (periodo == "Semestral") {
               mes_actual.add(6, 'month');
            } else if (periodo == "Anual") {
               mes_actual.add(12, 'month');
            } */

      const row = document.createElement('tr');
      row.innerHTML = `
            <td>${fechas[i]}</td>
            <td ALIGN="right">${'$' + new Intl.NumberFormat().format(tableSaldo.toFixed(0))}</td>
            <td ALIGN="right">${'$' + new Intl.NumberFormat().format(calculoFinal)}</td>
            <td ALIGN="right">${'$' + new Intl.NumberFormat().format(tableInteres.toFixed(0))}</td>
            <td ALIGN="right">${'$' + new Intl.NumberFormat().format(tableTotal.toFixed(0))}</td>

        `;
      llenarTabla.appendChild(row)

   }



}
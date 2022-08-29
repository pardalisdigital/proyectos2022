const ingresos1 = new AutoNumeric("#inputIngresos-1", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});
const ingresos2 = new AutoNumeric("#inputIngresos-2", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});
const ingresos3 = new AutoNumeric("#inputIngresos-3", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});
const ingresos4 = new AutoNumeric("#inputIngresos-4", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});
const egresos1 = new AutoNumeric("#inputEgresos-1", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});
const egresos2 = new AutoNumeric("#inputEgresos-2", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});
const egresos3 = new AutoNumeric("#inputEgresos-3", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});
const egresos4 = new AutoNumeric("#inputEgresos-4", {
   currencySymbol: " $",
   decimalCharacter: ",",
   digitGroupSeparator: ".",
   decimalPlaces: 0,
});

function obtenerdatos() {
   $("#msg-1").removeAttr("class");
   $("#msg-2").removeAttr("class");
   $("#msg-3").removeAttr("class");

   let inputIngresos1 = ingresos1.getNumericString();
   let inputIngresos2 = ingresos2.getNumericString();
   let inputIngresos3 = ingresos3.getNumericString();
   let inputIngresos4 = ingresos4.getNumericString();
   let inputEgresos1 = egresos1.getNumericString();
   let inputEgresos2 = egresos2.getNumericString();
   let inputEgresos3 = egresos3.getNumericString();
   let inputEgresos4 = egresos4.getNumericString();

   let ut = inputIngresos1 - inputEgresos1;
   let uo = ut + parseInt(inputIngresos2) - inputEgresos2;
   let oi = parseInt(inputIngresos3) + parseInt(inputIngresos4);
   let og = parseInt(inputEgresos3) + parseInt(inputEgresos4);
   let un = uo + oi - og;
   let porcentaje = un / inputIngresos1;

   /* Cluster porcentajes */
   let porcentaje1 = (inputIngresos1 / inputIngresos1) * 100;
   let porcentaje2 = (inputEgresos1 / inputIngresos1) * 100;
   let porcentaje3 = (ut / inputIngresos1) * 100;
   let porcentaje4 = (inputIngresos2 / inputIngresos1) * 100;
   let porcentaje5 = (inputEgresos2 / inputIngresos1) * 100;
   let porcentaje6 = (uo / inputIngresos1) * 100;
   let porcentaje7 = (oi / inputIngresos1) * 100;
   let porcentaje8 = (og / inputIngresos1) * 100;
   let porcentaje9 = (un / inputIngresos1) * 100;

   document.getElementById("ingresos").value = "$" + new Intl.NumberFormat().format(inputIngresos1);
   document.getElementById("ingresosPorcentaje").value = porcentaje1.toFixed(0) + "" + "%";
   document.getElementById("costos").value = "$" + new Intl.NumberFormat().format(inputEgresos1);
   document.getElementById("costosPorcentaje").value = porcentaje2.toFixed(0) + "" + "%";
   document.getElementById("utilidadBruta").value = "$" + new Intl.NumberFormat().format(ut);
   document.getElementById("utilidadBrutaPorcentaje").value = porcentaje3.toFixed(0) + "" + "%";
   document.getElementById("ingresosOperativos").value =
      "$" + new Intl.NumberFormat().format(inputIngresos2);
   document.getElementById("ingresosOperativosPorcentaje").value =
      porcentaje4.toFixed(0) + "" + "%";
   document.getElementById("gastosOperativos").value =
      "$" + new Intl.NumberFormat().format(inputEgresos2);
   document.getElementById("gastosOperativosPorcentaje").value = porcentaje5.toFixed(0) + "" + "%";
   document.getElementById("utilidadOperacional").value = "$" + new Intl.NumberFormat().format(uo);
   document.getElementById("utilidadOperacionalPorcentaje").value =
      porcentaje6.toFixed(0) + "" + "%";
   document.getElementById("otrosIngresos").value = "$" + new Intl.NumberFormat().format(oi);
   document.getElementById("otrosIngresosPorcentaje").value = porcentaje7.toFixed(0) + "" + "%";
   document.getElementById("otrosGastos").value = "$" + new Intl.NumberFormat().format(og);
   document.getElementById("otrosGastosPorcentaje").value = porcentaje8.toFixed(0) + "" + "%";
   document.getElementById("utilidadNeta").value = "$" + new Intl.NumberFormat().format(un);
   document.getElementById("utilidadNetaPorcentaje").value = porcentaje9.toFixed(0) + "" + "%";

   /* Mostrar mensaje*/
   function fnc_mensaje() {
      if (porcentaje <= 0) {
         $("#msg-1").addClass("Notavisible");
         $("#msg-2").addClass("Notaoculta");
         $("#msg-3").addClass("Notaoculta");
      } else if (porcentaje < 0.15) {
         $("#msg-1").addClass("Notaoculta");
         $("#msg-2").addClass("Notavisible");
         $("#msg-3").addClass("Notaoculta");
      } else if (porcentaje >= 0.15) {
         $("#msg-1").addClass("Notaoculta");
         $("#msg-2").addClass("Notaoculta");
         $("#msg-3").addClass("Notavisible");
      }
   }
   fnc_mensaje();
}

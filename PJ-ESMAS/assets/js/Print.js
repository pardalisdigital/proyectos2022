$(document).ready(function () {

   $("#btn_print").on("click", function () {

      let tablelist = $("#lista_tabla");
      let btn_print = $("#btn_print_table");
      let btn_before = $("#btn_before");
      btn_print.fadeOut(200);
      btn_before.fadeOut(200);
      tablelist.printThis({
         debug: false, // show the iframe for debugging
         importCSS: true, // import parent page css
         importStyle: true, // import style tags
         pageTitle: "Simulación", // add title to print page
      });
      btn_print.delay(1000).fadeIn(1000);
      btn_before.delay(1000).fadeIn(1000);
   });

   $("#btn_see").on("click", function () {

      let tablelist = $("#lista_tabla");
      let main = $("#main");
      let body = $("#body");
      body.removeAttr("style");
      $(".modal-backdrop").attr('style', 'display: none');
      main.toggle();
      tablelist.toggle();
      window.scrollTo(0, 0);

   });

});
function llenardatos() {
    $.ajax({
        /*link*/
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        datatype: "JSON",
        beforesend: function (xhr) {
        },
        success: function (respuesta) {
            /*creamos la variable para listarlo*/
            var listaUsuario = $("#respuesta");
            /*por cada dato que reccibira en la funcion*/
            $.each(respuesta.data, function (index, elemento) {
                /*lista de la tabla que se obtendrao*/
                listaUsuario.append('<div>' + elemento.id + "-" + elemento.title + "-"+ elemento.body+ "<div>");
            });
        },
        /*validacion*/
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("error al  realiizr la lectura de los datos" + jqXHR);
        },
        complete: function (jqXHR, textStatus) {
            alert("funcion completada");
        },
    });

}

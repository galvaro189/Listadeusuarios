    $(function () {
        $("#boton").on("click", function (e) {
            var jqxhr = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 50}
            });

            jqxhr
                .done(function (data) {
                    $("#boton").hide();
                    var listaUsuarios = data["results"];
                    var texto = "";
                    for (usuario of listaUsuarios) {
                        var nombre = usuario["name"]["first"];
                        var apellido = usuario["name"]["last"];
                        var email = usuario["email"];
                        var localidad = usuario["location"]["city"]
                        var estado = usuario["location"]["state"]
                        var cp = usuario["location"]["postcode"]
                        var calle = usuario["location"]["street"]
                        var imagen = usuario["picture"]["large"];
                        texto = "<div class='fila'>";
                        texto += "<figure>";
                        texto += "<img src='" + imagen + "'>";
                        texto += "</figure>";
                        texto += "<div class='texto'>";
                        texto += "<p>" + nombre + " " + apellido + "</p>";
                        texto += "<p>" + email + "</p>";
                        texto += "<p>" + calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                        texto += "</div>";
                        texto += "</div>";
                        $("#contenido").append(texto);
                    }
                    $(".fila").on("click", function (e) {
                        $(this).addClass("borrada");
                        $(this).css({
                            "display": "none"
                        });
                        var jqxhr2 = $.ajax({
                            "url": 'https://randomuser.me/api/',
                            "dataType": 'json',
                            "data": {
                                "results": 1
                            }
                        });
                        jqxhr2.done(function (datos) {
                            var listaUsuarios2 = datos["results"];
                            for (usuario2 of listaUsuarios2) {
                                var nombre = usuario2["name"]["first"];
                                var apellido = usuario2["name"]["last"];
                                var email = usuario2["email"];
                                var localidad = usuario2["location"]["city"]
                                var estado = usuario2["location"]["state"]
                                var cp = usuario2["location"]["postcode"]
                                var calle = usuario2["location"]["street"]
                                var imagen = usuario2["picture"]["large"];
                                var seed = usuario2["login"]["md5"]
                                text = "<div class='fila' id='" + seed + "'>";
                                text += "<figure>";
                                text += "<img src='" + imagen + "'>";
                                text += "</figure>";
                                text += "<div class='texto'>";
                                text += "<p>" + nombre + " " + apellido + "</p>";
                                text += "<p>" + email + "</p>";
                                text += "<p>" + calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                                text += "</div>";
                                text += "</div>";
                                $(".borrada").html(text);
                                $(".borrada").css({
                                    "display":"block"
                                });
                            }
                        })
                            .fail(function (jxhr, textStatus) {
                                console.log(textStatus);
                            })
                    })

                })
        })
    })

//FUNCION PARA VALIDAR QUE TODOS LOS CAMPOS ESTEN INGRESADOS, SINO DEVUELVE ERROR INDICANDO LOS CAMPOS FALTANTES

function fn_validarFormulario() {
    rut = $("#txt_rut").val();
    nombre = $("#txt_nombre").val();
    apepater = $("#txt_apepater").val();
    apemater = $("#txt_apemater").val();
    email = $("#txt_mail").val();
    tipocuenta = $("#cmb_cuenta").val();
    validador1 = true;
    validador2 = true;
    validador3 = true;
    validador4 = true;
    validador5 = true;
    validador6 = true;
    $("#mensajes").empty();
    $("#mensajes-exito").empty();

    if(rut == ""){
        validador1 = false;
        $("#mensajes").append("<li> Falta Ingresar Rut </li>")
    }

    if(nombre == ""){
        validador2 = false;
        $("#mensajes").append("<li> Falta Ingresar Nombre </li>")
    }

    if(apepater == ""){
        validador3 = false;
        $("#mensajes").append("<li> Falta Ingresar Apellido Paterno </li>")
    }

    if(apemater == ""){
        validador4 = false;
        $("#mensajes").append("<li> Falta Ingresar Apellido Materno </li>")
    }

    if(email == ""){
        validador5 = false;
        $("#mensajes").append("<li> Falta Ingresar Email </li>")
    }
    
    if(tipocuenta == "-- Seleccione --"){
        validador6 = false;
        $("#mensajes").append("<li> Falta Seleccionar Tipo de cuenta </li>")
    }

    if(validador1, validador2, validador3, validador4, validador5, validador6){
        $("#mensajes-exito").append("<li> Registro Exitoso </li>")
    }
}

//LLAMADO A LA FUNCION DE VALIDAR MEDIANTE EL BOTON REGISTRAR

$( "#btn_registrar" ).click(function() {
    fn_validarFormulario();
    fn_validaRut();
})

//FUNCION PARA LIMPIAR EL FORMULARO

$("#btn_limpiar").click(function(event) {
$("#form-1")[0].reset();
});


//FUNCION PARA VALIDAR EL RUT

function fn_validaRut(rut){
    $.getJSON('https://api.libreapi.cl/rut/validate' , function(data){
        var validacion = data;

        $("rut").val(validacion.valid);
    });
}




//FUNCION PARA RESCATAR LOS INDICADORES ECONOMICOS

function fn_consultarIndicadoresEco() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var respuesta = data;

        $("#txt_dolar").val(respuesta.dolar.valor);
        $("#txt_euro").val(respuesta.euro.valor);
        $("#txt_uf").val(respuesta.uf.valor); 
    }); 
}

//FUNCION PARA RECATAR LA TEMPERATURA ACTUAL

function fn_consultarClima(){
    $.getJSON('https://api.gael.cloud/general/public/clima/SCQN', function(data) {
        var clima = data;
        $("#txt_clima").val(clima.Temp) 
    }); 
}

//ACCION DEL BOTON INGRESAR, PARA LLAMAR A LAS FUNCIONES DE CONSULTAR CLIMA E INDICADORES ECONOMICOS

$("#btn_consultar").click(function() {
    fn_consultarIndicadoresEco();
    fn_consultarClima(); 
})
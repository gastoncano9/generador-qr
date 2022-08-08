'use strict';

const formulario = document.getElementById("formulario");
let urlForm = document.getElementById("url");
let barraLateral = document.getElementById("barra-lateral");
let contenedorQr = document.querySelector(".contenedor-qr");
let imagen = document.getElementById("imagen");
let enlace = document.getElementById("descarga");


const obtenerDatos = (url) =>
{

    let retorno = 0;

    if(url.length > 0 && url.trim())
    {
        fetch(`https://codzz-qr-cods.p.rapidapi.com/getQrcode?type=url&value=${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "codzz-qr-cods.p.rapidapi.com",
                "x-rapidapi-key": "f00d49ceb7mshf01c1507b7cca46p102f61jsnc0c40fb4fad4"
            }
        })
        .then(response => response.json())
        .then(response =>
        {
            imagen.setAttribute("src", response.url);
            enlace.setAttribute("href", response.url);
        })
        .catch(err =>
        {
            err = "Algo salio mal";
            alert(err);
        });

        retorno = 1;
    }
    else
    {
        alert("Debe ingresar un formato valido");
    }

    return retorno;
}

formulario.addEventListener("submit", (e) =>
{
    e.preventDefault();
    let url = urlForm.value;
    
    if(obtenerDatos(url) != 0)
    {
        barraLateral.classList.add("estirar");
        contenedorQr.style.display = "flex";
    }
});

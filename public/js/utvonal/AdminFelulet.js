import AdminCimController from "../controller/adminController/AdminCimController.js";
import AdminProfilController from "../controller/adminController/AdminProfilController.js";
import AdminHaszonController from "../controller/adminController/AdminHaszonController.js";
import AdminRendelesController from "../controller/adminController/AdminRendelesController.js";
import AdminTermekController from "../controller/adminController/AdminTermekController.js";
import AdminRegisztracioController from "../controller/adminController/AdminRegisztracioController.js";


$(function () {
    $("article").html(`
    <button id="cimGomb">Címek</button>
    <button id="felhasznaloGomb">Felhasználok</button>
    <button id="haszonGomb">Haszon</button>
    <button id="rendelesGomb">Rendelés</button>
    <button id="termekGomb">Termék</button>
    <button id="regisztracioGomb">Dolgozó regisztrálása</button>
    <div id="adatTarolo"></div>
    `);

    $("#cimGomb").on("click", () => 
    {
        new AdminCimController();
    });

    $("#felhasznaloGomb").on("click", () => 
    {
        new AdminProfilController();
    });

    $("#haszonGomb").on("click", () => 
    {
        new AdminHaszonController();
    });

    $("#rendelesGomb").on("click", () => 
    {
        new AdminRendelesController();
    });

    $("#termekGomb").on("click", () => 
    {
        new AdminTermekController();
    });

    $("#regisztracioGomb").on("click", ()=>
    {
        new AdminRegisztracioController();
    });
});
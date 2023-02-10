import AdminCimController from "../controller/adminController/AdminCimController.js";
import AdminProfilController from "../controller/adminController/AdminProfilController.js";
import AdminHaszonController from "../controller/adminController/AdminHaszonController.js";
import AdminRendelesController from "../controller/adminController/AdminRendelesController.js";
import AdminRendTetelC from "../controller/adminController/AdminRendelesTetelController.js";
import AdminTermekController from "../controller/adminController/AdminTermekController.js";


$(function () {
    $("article").html(`
    <button id="cimGomb">Címek</button>
    <button id="felhasznaloGomb">Felhasználok</button>
    <button id="haszonGomb">Haszon</button>
    <button id="rendelesGomb">Rendelés</button>
    <button id="rendelesTetelGomb">Rendelés tétel</button>
    <button id="termekGomb">Termék</button>
    <div id="adatTarolo"></div>
    `);
    $("#cimGomb").on("click", () => {
        new AdminCimController();
    });
    $("#felhasznaloGomb").on("click", () => {
        new AdminProfilController();
    });
    $("#haszonGomb").on("click", () => {
        new AdminHaszonController();
    })
    $("#rendelesGomb").on("click", () => {
        new AdminRendelesController();
    });
    $("#rendelesTetelGomb").on("click", () => {
        new AdminRendTetelC();
    });
    $("#termekGomb").on("click", () => {
        new AdminTermekController();
    });




})
import AdminController from "../controller/adminController/AdminController.js";

$(function(){
    new AdminController();
    $("article").html(`
    <button id="cimGomb">Címek</button>
    <button id="felhasznaloGomb">Felhasználok</button>
    <button id="haszonGomb">Haszon</button>
    <button id="rendelesGomb">Rendelés</button>
    <button id="rendelesTetelGomb">Rendelés tétel</button>
    <button id="termekGomb">Termék</button>
    <div id="adatTarolo"></div>
    `);
})
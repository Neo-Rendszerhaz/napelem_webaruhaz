import AdminCimController from "../controller/adminController/AdminCimController.js";
import AdminProfilController from "../controller/adminController/AdminProfilController.js";
import AdminRendTetelC from "../controller/adminController/AdminRendelesTetelController.js";

$(function(){
    $("article").html(`
    <button id="cimGomb">Címek</button>
    <button id="felhasznaloGomb">Felhasználok</button>
    <button id="haszonGomb">Haszon</button>
    <button id="rendelesGomb">Rendelés</button>
    <button id="rendelesTetelGomb">Rendelés tétel</button>
    <button id="termekGomb">Termék</button>
    <div id="adatTarolo"></div>
    `);
    $(document).on("click", "#felhasznaloGomb", ()=>
    {
        new AdminProfilController();
    });

    $(document).on("click", "#rendelesTetelGomb", ()=>
    {
        new AdminRendTetelC();
    });

    $(document).on("click", "#cimGomb", ()=>
    {
       new AdminCimController();
    });
})
import AdminFelhasznalokView from "../../view/adminView/AdminFelhasznalokView.js";
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendTetelekV from "../../view/adminView/AdminRendelesTetelekView.js";
import AdminCimekView from "../../view/adminView/AdminCimekView.js";

class AdminController
{
    constructor()
    {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        this.rendelesTetelek="/rendeles_tetelek_termekkel";
        this.felhasznalok="/felhasznalok";
        this.cimek="/cimek"
        
        $("#felhasznaloGomb").on("click", ()=>
        {
            console.log("valami");
            adatFeldolgozModel.adatBe(this.felhasznalok, this.profilAdatok);
        });

        $("#rendelesTetelGomb").on("click", ()=>
        {
            adatFeldolgozModel.adatBe(this.rendelesTetelek, this.rendelesTetelAdatok);
        });

        $("#cimGomb").on("click", ()=>
        {
            adatFeldolgozModel.adatBe(this.cimek, this.cimAdatok);
        });
        
    }

    profilAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminFelhasznalokView(tomb, szuloElem)
    }

    rendelesTetelAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminRendTetelekV(tomb, szuloElem)
    }

    cimAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminCimekView(tomb, szuloElem)
    }
}

export default AdminController;
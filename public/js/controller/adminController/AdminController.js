import AdminFelhasznalok from "../../view/adminView/AdminFelhasznalok.js";
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendTetelekV from "../../view/adminView/AdminRendelesTetelekView.js";
import AdminCimek from "../../view/adminView/AdminCimek.js";

class AdminController
{
    constructor()
    {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        this.rendelesTetelek="/rendeles_tetelek";
        this.felhasznalok="/felhasznalok";
        this.cimek="/cimek"

        $(document).on("click", "#felhasznaloGomb", ()=>
        {
            adatFeldolgozModel.adatBe(this.felhasznalok, this.profilAdatok);
        });

        $(document).on("click", "#rendelesTetelGomb", ()=>
        {
            adatFeldolgozModel.adatBe(this.rendelesTetelek, this.rendelesTetelAdatok);
        });

        $(document).on("click", "#cimGomb", ()=>
        {
            adatFeldolgozModel.adatBe(this.cimek, this.cimAdatok);
        });
        
    }

    profilAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminFelhasznalok(tomb, szuloElem)
    }

    rendelesTetelAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminRendTetelekV(tomb, szuloElem)
    }

    cimAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminCimek(tomb, szuloElem)
    }
}

export default AdminController;
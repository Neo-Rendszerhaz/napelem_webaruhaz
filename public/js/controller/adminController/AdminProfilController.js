import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminFelhasznalokView from "../../view/adminView/AdminFelhasznalokView.js";
import AdminCimekView from "../../view/adminView/AdminCimekView.js";


class AdminProfilController{
    constructor()
    {
        this.felhasznalok="/felhasznalok";
        const token = $(`meta[name="csrf-token"]`).attr("content");
        
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
        adatFeldolgozModel.adatBe(this.felhasznalok, this.profilAdatok);
        

        $(window).on("megjelenit", (event)=>
        {
            this.felhasznaloCimek="/f_cimek/"+event.detail
            // console.log("Controllerben megjelen", event.detail);
            adatFeldolgozModel.adatBe(this.felhasznaloCimek, this.cimAdatok);
        });
        
    }
    
    cimAdatok(tomb)
    {
        const szuloElem=$(".tartalom");
        // new AdminFelhasznaloCimekView(tomb, szuloElem)
        new AdminCimekView(tomb, szuloElem)
    }

    profilAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminFelhasznalokView(tomb, szuloElem)
    }
}
export default AdminProfilController
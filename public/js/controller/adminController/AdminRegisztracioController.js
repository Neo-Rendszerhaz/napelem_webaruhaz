import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import RegisztraciokView from "../../view/regisztracioView/RegisztraciokView.js";

class AdminRegisztracioController
{
    constructor()
    {
        console.log("Regisztráció Controller");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        this.Regisztracio="/felhasznalok";
        adatFeldolgozModel.adatBe(this.Regisztracio, this.ujRegisztracio);

        $(window).on("regisztralas", (event)=>
        {
            console.log(event.detail);
            adatFeldolgozModel.adatUj("/uj_dolgozo", event.detail);
        });
    }

    ujRegisztracio(tomb)
    {
        const szuloElem=$("#adatTarolo");
        new RegisztraciokView(tomb, szuloElem);
    }


}
export default AdminRegisztracioController;
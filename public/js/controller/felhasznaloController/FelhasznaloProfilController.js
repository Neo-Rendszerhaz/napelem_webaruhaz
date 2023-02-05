import ProfilokView from "../../view/felhasznaloView/ProfilokView.js";
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";

class FelhasznaloProfilController
{
    constructor()
    {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);


        this.felhasznaloAdatok="/adatok"
        console.log(this.felhasznaloAdatok);
        adatFeldolgozModel.egyAdat(this.felhasznaloAdatok, this.profilAdatok);
    }

    profilAdatok(adat)
    {
        const szuloElem = $("article");
        new ProfilokView(adat, szuloElem)
    }

}

export default FelhasznaloProfilController;
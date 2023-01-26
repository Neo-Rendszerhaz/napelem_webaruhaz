import ProfilokView from "../../view/felhasznaloView/ProfilView.js";
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";

class FelhasznaloProfilController
{
    constructor()
    {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        this.mindenFelhasznalo="/felhasznalok";
        this.felhasznaloAdatok="/adatok"
        console.log(this.felhasznaloAdatok);
        adatFeldolgozModel.egyAdat(this.felhasznaloAdatok, this.profilAdatok);
        // adatFeldolgozModel.egyAdat(this.egyCim, this.profilAdatok);

    }

    profilAdatok(adat)
    {
        // const szuloElem = $("#profilAdatok");
        const szuloElem = $("article");
        new ProfilokView(adat, szuloElem)
    }

}

export default FelhasznaloProfilController;
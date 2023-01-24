import ProfilokView from "../../view/felhasznaloView/ProfilokView.js"; /* ../view/felhasznaloView/ProfilokView.js */
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";

class FelhasznaloProfilController
{
    constructor()
    {
        console.log("FelhasznaloProfilController");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        // this.vegpont="http://127.0.0.1:8000/felhasznalok";
        this.vegpont="/felhasznalok";
        this.egyAdat="/akt_fel";
        console.log();

        // adatBeolvasModell.adatBe(this.vegpont, this.profilAdatok);
        console.log(adatFeldolgozModel.egyAdat(this.egyAdat, this.profilAdatok));

    }

    profilAdatok(adat)
    {
        console.log(adat);
        const szuloElem = $("article");
        new ProfilokView(adat, szuloElem)
    }


}

export default FelhasznaloProfilController;
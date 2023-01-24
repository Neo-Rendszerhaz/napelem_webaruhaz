import ProfilokView from "../view/felhasznaloView/ProfilokView.js";
import AdatBeolvasModell from "../model/AdatbeolvasModel.js";

class FelhasznaloProfilController
{
    constructor()
    {
        console.log("FelhasznaloProfilController");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatBeolvasModell = new AdatBeolvasModell(token);

        this.vegpont="http://127.0.0.1:8000/felhasznalok";

        adatBeolvasModell.adatBe(this.vegpont, this.profilAdatok);
    }

    profilAdatok(tomb)
    {
        const szuloElem = $("article");
        new ProfilokView(tomb, szuloElem)
    }
}

export default FelhasznaloProfilController;
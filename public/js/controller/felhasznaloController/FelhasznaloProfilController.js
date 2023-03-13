import ProfilokView from "../../view/felhasznaloView/ProfilokView.js";
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import ProfilRendelesekView from "../../view/felhasznaloView/ProfilRendelesekView.js";

class FelhasznaloProfilController
{
    constructor()
    {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);


        this.felhasznaloAdatok="/adatok"
        console.log(this.felhasznaloAdatok);
        adatFeldolgozModel.egyAdat(this.felhasznaloAdatok, this.profilAdatok);

        this.felhasznaloRendelesek="/f_rendelesek";
        adatFeldolgozModel.adatBe(this.felhasznaloRendelesek, this.profilRendelesek);
    }

    profilAdatok(adat)
    {
        const szuloElem = $("#profilTarolo");
        new ProfilokView(adat, szuloElem)
    }

    profilRendelesek(tomb)
    {
        const szuloElem = $("#profilTarolo");
        new ProfilRendelesekView(tomb, szuloElem)
    }

}

export default FelhasznaloProfilController;
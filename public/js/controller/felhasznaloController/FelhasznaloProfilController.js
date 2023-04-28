import ProfilokView from "../../view/felhasznaloView/ProfilokView.js";
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import ProfilRendelesekView from "../../view/felhasznaloView/ProfilRendelesekView.js";

class FelhasznaloProfilController {
    constructor() {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);


        this.felhasznaloAdatok = "/adatok"
        adatFeldolgozModel.egyAdat(this.felhasznaloAdatok, this.profilAdatok);

        this.felhasznaloRendelesek = "/f_rendelesek";
        adatFeldolgozModel.adatBe(this.felhasznaloRendelesek, this.profilRendelesek);

        $(window).on("profilAdatok", (event) => {
            adatFeldolgozModel.adatModosit("/felhasznalok", event.detail.profilAdatok, event.detail.profilAdatok.felhasznalo_id);
            adatFeldolgozModel.adatModosit("/cimek", event.detail.szamlazasiCim, event.detail.szamlazasiCim.cim_id);
            adatFeldolgozModel.adatModosit("/cimek", event.detail.szallitasiCim, event.detail.szallitasiCim.cim_id);
        });
    }

    profilAdatok(adat) {
        const szuloElem = $("#felhasznaloAdatok");
        new ProfilokView(adat, szuloElem)
    }

    profilRendelesek(tomb) {
        const szuloElem = $("#profilTarolo");
        new ProfilRendelesekView(tomb, szuloElem)
    }

}

export default FelhasznaloProfilController;
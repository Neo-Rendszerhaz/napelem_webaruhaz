import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KosarakView from "../../view/publikusView/KosarakView.js";

class KosarController 
{
    constructor() 
    {
        this.aktFelhasznalo = 0;
        console.log(this.aktFelhasznalo);
        this.kosar = [];
        this.termekMent = [];

        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        let jsonObjektum = JSON.parse(localStorage.getItem("kosar"));
        for (let i = 0; i < jsonObjektum.length; i++) 
        {
            this.kosar.push(jsonObjektum[i]);
        }

        this.kosarAdatok(this.kosar);

        adatFeldolgozModel.adatBe("/akt_felhasznalo", (id) => 
        {
            this.aktualisFelhasznalo(id)
        });

        $(window).on("rendelesVeglegesites", (event) => 
        {
            adatFeldolgozModel.adatModosit("/cim_modositas", { cim: event.detail },this.aktFelhasznalo);

            adatFeldolgozModel.adatUj("/rendeles_tetelek", {"termekek":event.detail, "cim":event.detail, "vegosszeg":event.detail});
        });
    }

    kosarAdatok(tomb)
    {
        const szuloelem = $("article");
        new KosarakView(tomb, szuloelem);
    }

    aktualisFelhasznalo(felhasznalo) 
    {
        this.aktFelhasznalo=felhasznalo.felhasznalo_id
        console.log(this.aktFelhasznalo);
    }
}
export default KosarController;

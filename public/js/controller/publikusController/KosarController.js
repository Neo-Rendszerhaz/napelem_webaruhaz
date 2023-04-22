import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KosarakView from "../../view/publikusView/KosarakView.js";

class KosarController 
{
    constructor() 
    {
        this.aktFelhasznalo;
        this.kosar = [];
        this.termekMent = [];
        this.modositottKosar=[]

        $(window).on("toroltTermek", (event)=>
        {
            for (let i = 0; i < jsonObjektum.length; i++) 
            {
                if(jsonObjektum[i].id===event.detail.id)
                {
                    var eltavolit = jsonObjektum[i];
                    jsonObjektum.splice(eltavolit, 1);
                    localStorage.setItem("kosar", JSON.stringify(jsonObjektum));
                }
            }
            this.kosarAdatok(jsonObjektum);
        });

        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        let jsonObjektum = JSON.parse(localStorage.getItem("kosar"));
        console.log(jsonObjektum);
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

        $(window).on("termekUjOldal", (event) => 
        {
            this.ujOldal(event.detail);
            window.location.href = "/termek";
        });
    }

    kosarAdatok(tomb)
    {
        const szuloelem = $("article");
        new KosarakView(tomb, szuloelem);
    }

    ujOldal(tomb) 
    {
        let jsonString = JSON.stringify(tomb);
        window.localStorage.setItem("termek", jsonString);
    }

    aktualisFelhasznalo(felhasznalo) 
    {
        this.aktFelhasznalo=felhasznalo.felhasznalo_id;
    }
}
export default KosarController;

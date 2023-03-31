import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KosarakView from "../../view/publikusView/KosarakView.js";

class KosarController 
{
    constructor() 
    {        
        this.kosar=[];
        this.termekMent=[];
        
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        let jsonObjektum = JSON.parse(localStorage.getItem("kosar"));
        for (let i = 0; i < jsonObjektum.length; i++) 
        {
            this.kosar.push(jsonObjektum[i]);    
        }

        this.kosarAdatok(this.kosar)

        $(window).on("rendelesVeglegesites", (event)=>
        {

            console.log(event.detail);
            // adatFeldolgozModel.adatUj("/cimek", {"cim":event.detail});
            // adatFeldolgozModel.adatUj("/termekek", {"termekek":event.detail});
            adatFeldolgozModel.adatUj("/rendeles_tetelek", {"termekek":event.detail, "cim":event.detail, "vegosszeg":event.detail});
        });
    }

    kosarAdatok(tomb)
    {
        const szuloelem = $("article");
        new KosarakView(tomb, szuloelem);
    }
}
export default KosarController;
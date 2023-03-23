import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KosarakView from "../../view/publikusView/KosarakView.js";


class KosarController 
{
    #rendelesAdatok={};
    constructor() 
    {        
        this.kosar=[];
        this.#rendelesAdatok={megnevezes:"", cikkszam:"", gyartoi_cikkszam:"", marka:"", garancia:"", leiras:""};
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        let jsonObjektum = JSON.parse(localStorage.getItem("kosar"));
        for (let i = 0; i < jsonObjektum.length; i++) 
        {
            this.kosar.push(jsonObjektum[i]);    
        }

        this.kosarAdatok(this.kosar)
        $(window).on("rendelesVeglegesites", ()=>
        {
            console.log(this.kosar);
            adatFeldolgozModel.adatUj("/termekek", this.kosar);

        });
        this.rendelesMent();
        console.log(this.#rendelesAdatok);
    }

    kosarAdatok(tomb)
    {
        const szuloelem = $("article");
        new KosarakView(tomb, szuloelem);
    }

    rendelesMent()
    {
        this.#rendelesAdatok.megnevezes=$("#megnevezes").val();
        this.#rendelesAdatok.cikkszam=$("#cikkszam").val();
        this.#rendelesAdatok.gyartoi_cikkszam=$("#gyartoi_cikkszam").val();
        this.#rendelesAdatok.marka=$("#marka").val();
        this.#rendelesAdatok.garancia=$("#garancia").val();
        this.#rendelesAdatok.leiras=$("#leiras").val();
    }
}
export default KosarController;
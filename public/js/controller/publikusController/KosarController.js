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
            // console.log(event.detail[0].megnevezes);

            console.log(event.detail);
            adatFeldolgozModel.adatUj("/cimek", {"cim":event.detail});
            adatFeldolgozModel.adatUj("/termekek", {"termekek":event.detail});
            // for (let i = 0; i < event.detail.length; i++) 
            // {
            //     console.log("valami");    
            // }


            // this.termekMent.push(event.detail)
            // console.log(this.termekMent);

            // for (let i = 0; i < this.termekMent.length; i++) 
            // {
            //     console.log(this.termekMent[i[megnevezes]]);
            //     // adatFeldolgozModel.adatUj("/termekek", this.termekMent[i]);
            // }
            // event.detail.forEach(elem => 
            // {
            // });
        });
    }

    kosarAdatok(tomb)
    {
        const szuloelem = $("article");
        new KosarakView(tomb, szuloelem);
    }
}
export default KosarController;
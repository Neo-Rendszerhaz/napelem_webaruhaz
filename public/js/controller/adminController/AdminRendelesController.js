import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendelesekView from "../../view/adminView/AdminRendelesekView.js";

class AdminRendelesController{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        this.rendelesTetelek="/rendelesek_cimmel_felhasznaloval";
        const AFM = new AdatFeldolgozModel(token);
        AFM.adatBe(this.rendelesTetelek,this.tetelMutat)
        $(window).on("RendAllapotMod",(event)=>{
            console.log(event.detail)
            AFM.adatModosit("/rendelesek",event.detail,event.detail.rendeles_szam)
        })
    }
    tetelMutat(tomb){
        const szuloElem = "#adatTarolo"
        new AdminRendelesekView(tomb,szuloElem);
    }
}

export default AdminRendelesController
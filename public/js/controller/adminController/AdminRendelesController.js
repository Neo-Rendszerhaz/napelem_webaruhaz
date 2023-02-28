import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendelesekView from "../../view/adminView/AdminRendelesekView.js";

class AdminRendelesController{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        this.rendelesTetelek="/rendelesek_cimmel_felhasznaloval";
        const AFM = new AdatFeldolgozModel(token);
        AFM.adatBe(this.rendelesTetelek,this.tetelMutat)
        $(window).on("rendAllapotMod",(event)=>{
            AFM.adatModosit("/rendelesek",event.detail,event.detail.rendeles_szam)
        })
        $(window).on("rendelesTorles",(event)=>{
            let figyelmeztetes = confirm("Biztosan szeretné törölni?");
            if(figyelmeztetes === true){
                AFM.adatTorol(`/rendelesekTetellel/${event.detail.rendeles_szam}`,event.detail)
                AFM.adatTorol(`/rendelesek/${event.detail.rendeles_szam}`,event.detail)
                AFM.adatBe(this.rendelesTetelek,this.tetelMutat)            
            }
        })
    }
    tetelMutat(tomb){
        const szuloElem = "#adatTarolo"
        new AdminRendelesekView(tomb,szuloElem);
    }
}

export default AdminRendelesController
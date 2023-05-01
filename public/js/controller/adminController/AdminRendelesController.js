import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendelesekView from "../../view/adminView/AdminRendelesekView.js";
import AdminRendelesTetelekView from "../../view/adminView/AdminRendelesTetelekView.js";

class AdminRendelesController{
    constructor(){
        this.remdelesSzam;
        const token = $(`meta[name="csrf-token"]`).attr("content");
        this.rendelesTetelek="/rendelesek_cimmel_felhasznaloval";
        const AFM = new AdatFeldolgozModel(token);
        AFM.adatBe(this.rendelesTetelek,this.RendelesMutat)
        $(window).on("rendAllapotMod",(event)=>{
            AFM.adatModosit("/rendelesek",event.detail,event.detail.rendeles_szam)
        })
        $(window).on("rendelesTorles",(event)=>{
            let figyelmeztetes = confirm("Biztosan szeretné törölni a rendelés?");
            if(figyelmeztetes === true){
                AFM.adatTorol(`/rendelesekTetellel/${event.detail.rendeles_szam}`,event.detail)
                AFM.adatTorol(`/rendelesek/${event.detail.rendeles_szam}`,event.detail)
                AFM.adatBe(this.rendelesTetelek,this.RendelesMutat)            
            }
        })
        $(window).on("tetelMegjelenites",(event)=>{
            localStorage.setItem("rendelesSzam", event.detail.rendeles_szam)
            AFM.adatBe("rendeles_tetelek_termekkel",this.RendelesTetelMutat);
        })
    }
    RendelesMutat(tomb){
        const szuloElem = "#adatTarolo"
        new AdminRendelesekView(tomb,szuloElem);
    }
    RendelesTetelMutat(tomb){
        let ujSzuloElem = ".tartalom";
        const keresettElem = []
        tomb.forEach(rendelesT => {
            if(rendelesT.rendeles_szam==localStorage.getItem("rendelesSzam")){
                keresettElem.push(rendelesT);
            }
            
        });
        new AdminRendelesTetelekView(keresettElem,ujSzuloElem);
    }
}

export default AdminRendelesController
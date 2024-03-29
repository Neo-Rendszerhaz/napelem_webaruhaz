import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendTetelekV from "../../view/adminView/AdminRendelesTetelekView.js"

class AdminRendTetelC{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const AFM = new AdatFeldolgozModel(token);
        const vegpont = "/rendeles_tetelek_termekkel";
        $(window).on("RTtorles",(event)=>{
            let figyelmeztetes = confirm("Biztosan szeretné törölni a rendelés tételt?");
            if(figyelmeztetes === true){         
                const torlesPont = `/rendeles_tetelek/${event.detail.rendeles_szam}/${event.detail.termek_id}`
                AFM.adatTorol(torlesPont,event.detail)
                AFM.adatBe(vegpont,this.tetelMutat)
            }
        })
    }
    tetelMutat(tomb){
        const szuloElem = ".tartalom"
        new AdminRendTetelekV(tomb, szuloElem);
    }
}
export default AdminRendTetelC
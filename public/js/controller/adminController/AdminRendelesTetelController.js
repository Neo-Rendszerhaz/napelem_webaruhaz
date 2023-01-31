import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendTetelekV from "../../view/adminView/AdminRendelesTetelekView.js"

class AdminRendTetelC{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const AFM = new AdatFeldolgozModel(token);
        const vegpont = "/rendeles_tetelek"
        AFM.adatBe(vegpont,this.tetelMutat)
    }
    tetelMutat(tomb){
        const szuloElem = "article"
        new AdminRendTetelekV(tomb, szuloElem);
    }
}
export default AdminRendTetelC
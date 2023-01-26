import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendTetelekV from "../../view/adminView/AdminRendelesTetelekView.js"

class AdminRendTetelC{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const ABM = new AdatFeldolgozModel(token);
        const vegpont = "/r_tetelek"
        ABM.adatBe(vegpont,this.tetelMutat)
    }
    tetelMutat(tomb){
        const szuloElem = ""
        new AdminRendTetelekV(tomb, szuloElem);
    }
}
export default AdminRendTetelC
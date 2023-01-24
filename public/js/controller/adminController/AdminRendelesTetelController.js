import AdatBeolvasModell from "../../model/AdatBeolvasModell";
import AdminRendTetelekV from "../../view/adminView/AdminRendelesTetelekView"

class AdminRendTetelC{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const ABM = new AdatBeolvasModell(token);
        const vegpont = "/rendeles_tetelek"
        ABM.adatBe(vegpont,this.tetelMutat)
    }
    tetelMutat(tomb){
        const szuloElem = ""
        new AdminRendTetelekV(tomb, szuloElem);
    }
}
export default AdminRendTetelC
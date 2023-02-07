import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminCimekView from "../../view/adminView/AdminCimekView.js"

class AdminCimController{
    constructor()
    {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
        this.cimek="/cimek"
        adatFeldolgozModel.adatBe(this.cimek, this.cimAdatok);
    }
    cimAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminCimekView(tomb, szuloElem)
    }
}
export default AdminCimController
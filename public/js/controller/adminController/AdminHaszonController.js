import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminHaszonokView from "../../view/adminView/AdminHaszonokView.js"

class AdminHaszonController {
    constructor() {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
        this.haszon = "/haszon"
        adatFeldolgozModel.adatBe(this.haszon, this.haszonAdatok);
    }
    haszonAdatok(tomb) {
        const szuloElem = $("#adatTarolo");
        new AdminHaszonokView(tomb, szuloElem);
    }
}

export default AdminHaszonController
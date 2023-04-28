import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminTermekekView from "../../view/adminView/AdminTermekekView.js";

class AdminTermekController {
    constructor() {
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
        this.termek = "/termekek"
        adatFeldolgozModel.adatBe(this.termek, this.termekAdatok);
    }
    termekAdatok(tomb) {
        const szuloElem = $("#adatTarolo");
        new AdminTermekekView(tomb, szuloElem);
    }
}

export default AdminTermekController;
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminTermekekView from "../../view/adminView/AdminTermekekView.js";

class AdminTermekController {
    //AdminFelulet.js-ben a kattintás megtörténik viszont sem a felületen, sem pedig a konzolon nem jelenik meg semmi, hibaüzenet sem
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
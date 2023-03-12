import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import TermekekView from "../../view/publikusView/TermekekView.js";
// import TermekView from "../../view/publikusView/TermekView.js";

$(function () {
    new TermekController();
})

class TermekController {
    constructor() {
        console.log("termek Kontroller");
        this.termek = [];
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        let jsonObjektum = JSON.parse(localStorage.getItem("termek"));
        this.termek.push(jsonObjektum)

        this.termekAdatok(this.termek)
        console.log(this.termek);
    }

    termekAdatok(tomb) {
        const szuloelem = $("#egyTermek");
        // const szuloelem = $("article");
        new TermekekView(tomb, szuloelem);
    }
}
export default TermekController
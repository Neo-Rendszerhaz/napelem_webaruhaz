import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KezdoLapokView from "../../view/kezdolapView/KezdoLapokView.js";

class IndexController {
    constructor() {
        this.kosar = [];
        console.log("IndexController Hello!");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        // this.vegpont = "/";
        this.vegpont = "../js/termekek.json";
        adatFeldolgozModel.adatBe(this.vegpont, this.kezdolapAdatok);

        //Kosár gombra kattintva a konzolon megjelenik a kosár tomb!
        $(window).on("kosar", (event) => {
            this.kosar.push(event.detail);
            console.log(this.kosar);
            this.termekekDivbe();
        });
    }
    kezdolapAdatok(tomb) {
        const szuloelem = $("article");
        new KezdoLapokView(tomb, szuloelem);
    }
    termekekDivbe() {
        var html = "";
        this.kosar.forEach((termek) => {
            html += "<div>" + termek.megnevezes + ", " + termek.ar + " Ft" + ", " +  "</div>";
        });
        document.getElementById("kosartartalom").innerHTML = html;
    }

}

export default IndexController;

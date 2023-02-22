import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KezdoLapokView from "../../view/kezdolapView/KezdoLapokView.js";

class IndexController {
    constructor() {
        console.log(window.localStorage.getItem("kosar"))
        this.kosar = [];
        console.log("IndexController Hello!");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        // this.vegpont = "/";
        this.vegpont = "../js/termekek.json";
        adatFeldolgozModel.adatBe(this.vegpont, this.kezdolapAdatok);

        //Kosár gombra kattintva a konzolon megjelenik a kosár tomb!
        $(window).on("kosar", (event) => {
            this.termekekKosarba(event.detail);
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
            html += "<div>" + termek.megnevezes + ", " + termek.ar + " Ft" + ", " + termek.db + " db" + "</div>";
        });
        window.localStorage.setItem("kosar", html)
        window.localStorage.removeItem("kosar")
    }

    termekekKosarba(ujTermek) {
        let index = 0;
        while (this.kosar.length > index && this.kosar[index].id != ujTermek.id) {
            index++;
        }
        if (index < this.kosar.length) {
            this.kosar[index].db++;
        }
        else {
            ujTermek.db = 1;
            this.kosar.push(ujTermek);
        }
    }
}

export default IndexController;

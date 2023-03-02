import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KezdoLapokView from "../../view/publikusView/KezdoLapokView.js";


class IndexController {
    constructor() {
        this.kosar = [];
        //console.log("IndexController Hello!");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        // this.vegpont = "/";
        this.vegpont = "../js/termekek.json";
        adatFeldolgozModel.adatBe(this.vegpont, this.kezdolapAdatok);

        //Kosár gombra kattintva a konzolon megjelenik a kosár tomb!
        $(window).on("kosar", (event) => {
            this.termekekKosarba(event.detail);
            this.termekekLocalStoragebe();
        });

    }

    kezdolapAdatok(tomb) {
        const szuloelem = $("article");
        new KezdoLapokView(tomb, szuloelem);
    }

    termekekLocalStoragebe() {
        var html = "";
        this.kosar.forEach((termek) => {
            html += "<div>" + termek.megnevezes + ", " + termek.ar + " Ft" + ", " + termek.db + " db" + "</div>";
        });

        let html_string = JSON.stringify(this.kosar); //az objectet stringgé alakítja át
        window.localStorage.setItem("kosar", html_string);
        //console.log(html_string);

        // let html_object = JSON.parse(localStorage.getItem("kosar")); //a stringet visszaalakítja objectté
        // console.log(html_object);
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

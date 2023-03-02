import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KezdoLapokView from "../../view/publikusView/KezdoLapokView.js";
import TermekView from "../../view/publikusView/TermekView.js";


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
        $(window).on("termekUjOldal", (event) => {
            console.log(event.detail);
            this.ujOldal(event.detail);
        })
    }

    ujOldal(adat) {
        const szuloelem = $("article");
        new TermekView(adat, szuloelem);
    }
    kezdolapAdatok(tomb) {
        const szuloelem = $("article");
        new KezdoLapokView(tomb, szuloelem);
    }

    termekekLocalStoragebe() {
        let szamlalo = 0;
        //helyben lekérem a localstorage adatot és ahhoz adom hozzá az adatokat
        let json_object = JSON.parse(localStorage.getItem("kosar")); //a stringet visszaalakítja objectté
        if (json_object != null) {
            for (let index = 0; index < json_object.length; index++) {
                if (!this.kosar.includes(json_object[index])) {
                    this.kosar.push(json_object[index])
                    szamlalo++;
                }
            }
        }

        let json_string = JSON.stringify(this.kosar); //az objectet stringgé alakítja át
        console.log(this.kosar);
        //adatok.push(json_object);
        // for (let index = 0; index < adatok.length; index++) {
        //     console.log(adatok[index]);
        // }
        window.localStorage.setItem("kosar", json_string);
        //console.log(html_string);
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

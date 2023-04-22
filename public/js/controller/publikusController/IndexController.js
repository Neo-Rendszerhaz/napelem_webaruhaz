import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KezdoLapokView from "../../view/publikusView/KezdoLapokView.js";
import TermekController from "./TermekController.js";
import NavigacioView from "../../view/publikusView/NavigacioView.js";

class IndexController {
    constructor() {
        this.kosar = [];
        if (this.kosar.length == 0 && JSON.parse(localStorage.getItem("kosar")) != null) {
            this.kosar = this.kosar.concat(JSON.parse(localStorage.getItem("kosar")))
        }

        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
        this.vegpont = "../js/termekek.json";
        adatFeldolgozModel.adatBe(this.vegpont, this.kezdolapAdatok);
        adatFeldolgozModel.adatBe("akt_felhasznalo",this.navigacio)
        $(window).on("kosar", (event) => {
            this.termekekKosarba(event.detail);
            this.termekekLocalStorageba();
        });


        $(window).on("termekUjOldal", (event) => 
        {
            this.ujOldal(event.detail);
            window.location.href = "/termek";
        })
    }

    ujOldal(tomb) {
        let jsonString = JSON.stringify(tomb);
        window.localStorage.setItem("termek", jsonString);
    }
    navigacio(aktualisFelhasznalo){
        new NavigacioView(aktualisFelhasznalo)
    }
    kezdolapAdatok(tomb) {
        let tombTermekek = tomb.termekek;
        const szuloelem = $("article");
        new KezdoLapokView(tombTermekek, szuloelem);
    }

    termekekLocalStorageba() {
        console.log(this.kosar);
        let jsonString = JSON.stringify(this.kosar);
        window.localStorage.setItem("kosar", jsonString);
    }

    termekekKosarba(ujTermek) {
        let index = 0;
        let mennyiseg = $(`#number${ujTermek.id}`)
        console.log(mennyiseg)
        while (this.kosar.length > index && this.kosar[index].id != ujTermek.id) {
            index++;
        }
        if (index < this.kosar.length) {
            this.kosar[index].db += parseInt(mennyiseg.val())

        }
        else {
            ujTermek.db = parseInt(mennyiseg.val());
            this.kosar.push(ujTermek);
        }
    }
}

export default IndexController;

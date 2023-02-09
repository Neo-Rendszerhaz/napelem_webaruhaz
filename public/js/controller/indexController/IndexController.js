import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KezdoLapokView from "../../view/kezdolapView/KezdoLapokView.js";

class IndexController
{
    constructor()
    {
        console.log("IndexController Hello!");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        const tomb=[];
        // this.vegpont = "/";
        this.vegpont = "../js/termekek.json"
        adatFeldolgozModel.adatBe(this.vegpont, this.kezdolapAdatok);
        // const json = adatFeldolgozModel.jsonadatokBe(tomb, "termekek")
        // console.log(json);
        // this.kezdolapAdatok();
    }
    kezdolapAdatok(tomb){
        const szuloelem = $("article")
        new KezdoLapokView(tomb, szuloelem);
    }
}

export default IndexController;
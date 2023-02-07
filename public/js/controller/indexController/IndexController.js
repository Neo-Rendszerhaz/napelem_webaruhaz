import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KezdoLapokView from "../../view/kezdolapView/KezdoLapokView.js";

class IndexController
{
    constructor()
    {
        console.log("IndexController Hello!");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel;
        this.vegpont = "/";
        adatFeldolgozModel.adatBe(this.vegpont, this.kezdolapAdatok);
    }
    kezdolapAdatok(tomb){
        const szuloelem = $("article")
        new KezdoLapokView(tomb, szuloelem);
    }
}

export default IndexController;
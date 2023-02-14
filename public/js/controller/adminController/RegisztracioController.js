import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";

$(function()
{
    new RegisztracioController();
});

class RegisztracioController
{
    constructor()
    {
        console.log("Regisztráció Controller");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        this.rgeisztracio="/felhasznalok";
        adatFeldolgozModel.adatUj(this.rgeisztracio, )
    }

    ujRegisztracio(adat)
    {
        const szuloElem=$("#beRegTarolo");
        new RegisztraciokView(adat, szuloElem);
    }
}
export default RegisztracioController;
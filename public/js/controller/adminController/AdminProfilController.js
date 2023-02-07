import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminFelhasznalok from "../../view/adminView/AdminFelhasznalok.js";

class AdminProfilController{
    constructor(){
        this.felhasznalok="/felhasznalok";
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
        adatFeldolgozModel.adatBe(this.felhasznalok, this.profilAdatok);
    }
    profilAdatok(tomb)
    {
        const szuloElem = $("#adatTarolo");
        new AdminFelhasznalok(tomb, szuloElem)
    }
}
export default AdminProfilController
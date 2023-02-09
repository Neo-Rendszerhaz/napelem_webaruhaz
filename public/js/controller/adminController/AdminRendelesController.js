import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";

class AdminRendelesController{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        this.rendelesTetelek="/rendeles";
        const AFM = new AdatFeldolgozModel(token);
        AFM.adatBe(this.rendelesTetelek)
    }
    tetelMutat(){

    }
}

export default AdminRendelesController
import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";

class AdminRendelesController{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);
        this.rendelesTetelek="/rendeles";
    }
}

export default AdminRendelesController
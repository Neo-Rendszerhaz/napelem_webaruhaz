import KosarakView from "../../view/publikusView/KosarakView.js";
import IndexController from "./IndexController.js";

$(function () {
    new KosarController();
});

class KosarController {
    constructor() {
        this.megvtermekek = {};
        //console.log("KosarController Hali!");

        let html_object = JSON.parse(localStorage.getItem("kosar"));
        //console.log(html_object);
        if (html_object != null) {
            for (let i = 0; i < html_object.length; i++) {
                console.log(html_object[i]);
            }
        }

    }

}
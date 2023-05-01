import TermekView from "../../view/publikusView/TermekView.js";

class TermekController {
    constructor() {
        this.termek = [];
        this.kosar = [];
        if (this.kosar.length == 0 && JSON.parse(localStorage.getItem("kosar")) != null) {
            this.kosar = this.kosar.concat(JSON.parse(localStorage.getItem("kosar")))
        }

        let jsonObjektum = JSON.parse(localStorage.getItem("termek"));
        this.termek.push(jsonObjektum)

        this.termekAdatok(this.termek)
        $(window).on("kosar", (event) => {
            this.termekekKosarba(event.detail);
            this.termekekLocalStorageba();
        });
    }

    termekekLocalStorageba() {
        let jsonString = JSON.stringify(this.kosar);
        window.localStorage.setItem("kosar", jsonString);
    }

    termekekKosarba(ujTermek) {
        let index = 0;
        let mennyiseg = $(`#number${ujTermek.id}`)
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

    termekAdatok(tomb) {
        const szuloelem = $("article");
        new TermekView(tomb, szuloelem);
    }
}
export default TermekController
import KezdolapView from "./KezdolapView.js";

class KezdoLapokView {
    constructor(tomb, szuloElem) {
        //console.log(tomb.termekek);
        this.divElem = szuloElem.children("div:last-child");
        tomb.termekek.forEach(termek => {
            const adatom = new KezdolapView(termek, szuloElem);
        });

    }
}

export default KezdoLapokView;
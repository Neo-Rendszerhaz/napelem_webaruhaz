import KezdolapView from "./KezdolapView.js";

class KezdoLapokView {
    constructor(tomb, szuloElem) {
        //console.log(tomb.termekek);
        this.divElem = szuloElem.children("div:last-child");
        tomb.termekek.forEach(adat => {
            const adatom = new KezdolapView(adat, szuloElem);
        });

    }
}

export default KezdoLapokView;
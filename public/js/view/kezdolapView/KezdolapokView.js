import KezdolapView from "./KezdolapView.js";

class KezdoLapokView {
    constructor(tomb, szuloElem) {
        //console.log(tomb.termekek);
        szuloElem.html(
            `<div>
                <h1></h1>
                <p><a></p>
                <img>
                <h3></h3>
            </div>`)
        this.divElem = szuloElem.children("div:last-child");
        tomb.termekek.forEach(adat => {
            const adatom = new KezdolapView(adat, this.divElem);
        });

    }
}

export default KezdoLapokView;
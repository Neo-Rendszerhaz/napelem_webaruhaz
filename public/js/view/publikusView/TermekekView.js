import TermekView from "./TermekView.js";

class TermekekView {
    constructor(tomb, szuloElem) {
        console.log(szuloElem);
        szuloElem.html(`<div id="egyTermek"></div>`)
        tomb.forEach(adat => {
            console.log(adat);
            new TermekView(adat, szuloElem)
        });
    }
}
export default TermekekView;
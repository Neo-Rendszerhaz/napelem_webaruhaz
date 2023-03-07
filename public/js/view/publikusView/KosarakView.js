import KosarView from "./KosarView.js";

class KosarakView {
    constructor(tomb, szuloelem) {
        console.log("KosarakView Hali!");
        szuloelem.html(`
        <div id="rendtermekek">
        </div>`)
        this.divElem = szuloelem.children("div:last-child");
        tomb.forEach(adat => {
            const kosaram = new KosarView(adat, this.divElem);
        });
    }
}

export default KosarakView;
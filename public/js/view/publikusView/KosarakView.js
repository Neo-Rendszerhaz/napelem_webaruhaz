import KosarView from "./KosarView.js";

class KosarakView 
{
    constructor(tomb, szuloElem) 
    {
        szuloElem.html(`
        <div id="rendtermekek">
        </div>`)
        this.divElem = szuloElem.children("div:last-child");
        tomb.forEach(adat => 
        {
            new KosarView(adat, this.divElem);
        });
    }
}
export default KosarakView;
import KosarView from "./KosarView.js";

class KosarakView 
{
    constructor(tomb, szuloElem) 
    {
        $(`aside`).html(`
        <button id="rendelesLeadasGomb">Rendelés leadás</button>
        <div class="overlay">
            <div class="popup">
                <h2>Rendelés leadás</h2>
                <p id="bezar" class="close">&times;</p>
                <div class="tartalom"></div>
            </div>
        </div>`)

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
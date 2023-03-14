import TermekView from "./TermekView.js";

class TermekekView
{
    constructor(tomb, szuloElem)
    {
        szuloElem.html(`<div id="egyTermek"></div>`)
        tomb.forEach(adat => 
        {
            new TermekView(adat, szuloElem)    
        });
    }
}
export default TermekekView;
import ProfilRendelesView from "./ProfilRendelesView.js";

class ProfilRendelesekView
{
    constructor(tomb, szuloelem)
    {
        szuloelem.append(`<div id="rendelesek">
        <h3>Rendelések:</h3>
        </div>`);

        this.rendelesDiv=szuloelem.children("div:last-child");

        tomb.forEach(elem => 
        {
            new ProfilRendelesView(elem, this.rendelesDiv);    
        });
    }
}
export default ProfilRendelesekView
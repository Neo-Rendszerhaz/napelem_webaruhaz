import ProfilRendelesView from "./ProfilRendelesView.js";

class ProfilRendelesekView
{
    constructor(tomb, szuloelem)
    {
        szuloelem.append(`<h2 id="rendelesCim">Rendelések:</h2>
        <div id="rendelesek">
        </div>`);

        this.rendelesDiv=szuloelem.children("div:last-child");

        tomb.forEach(elem => 
        {
            new ProfilRendelesView(elem, this.rendelesDiv);    
        });
    }
}
export default ProfilRendelesekView
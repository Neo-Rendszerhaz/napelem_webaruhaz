import TermekekView from "../../view/publikusView/TermekekViev.js";

class TermekController
{
    constructor()
    {
        this.termek=[];

        let jsonObjektum = JSON.parse(localStorage.getItem("termek"));
        this.termek.push(jsonObjektum)

        this.termekAdatok(this.termek)
    }

    termekAdatok(tomb)
    {
        const szuloelem = $("article");
        new TermekekView(tomb, szuloelem);
    }
}
export default TermekController
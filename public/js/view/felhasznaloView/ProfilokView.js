import ProfilView from "./ProfilView.js";

class ProfilokView
{
    constructor(adat, szuloElem)
    {
        szuloElem.html(`<div id="profil"><h3>Profil adatok:</h3></div>
        <div id="cim"></div>`);
        
        this.cimDiv=szuloElem.children("div:last-child");
        this.profilDiv=szuloElem.children("div:first-child");

        adat.forEach(elem => 
        {

            new ProfilView(elem, this.cimDiv, this.profilDiv);
        });

        
    }
}
    export default ProfilokView;
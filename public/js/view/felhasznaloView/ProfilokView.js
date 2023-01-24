import ProfilView from "./ProfilView.js";

class ProfilokView
{
    constructor(adat, szuloElem)
    {
        console.log("ProfilokView");
        szuloElem.html(`<div id="ProfilokView"></div>`);

        this.divElem=szuloElem.children("div:last-child")
        
        szuloElem.append(`<div class="ProfilViewElemek">
            <h2>${adat.email}</h2>
            <p>Időpont: ${adat.vezeteknev}</p>
            <p>Helyszín: ${adat.keresztnev}</p>
            <p>Férőhely: ${adat.telefonszam}</p>
        </div>`)

        
        
    }

    
}
export default ProfilokView;
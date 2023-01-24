import ProfilView from "./ProfilView.js";

class ProfilokView
{
    constructor(tomb, szuloElem)
    {
        console.log("ProfilokView");
        szuloElem.html(`<div id="ProfilokView"></div>`);

        this.divElem=szuloElem.children("div:last-child")
        
        tomb.forEach(adat => 
        {
            const adatom = new ProfilView(adat, this.divElem);    
        });
    }
}
export default ProfilokView;
import AdminFelhasznaloCimView from "./AdminFelhasznaloCimView.js";

class AdminFelhasznaloCimekView
{
    constructor(tomb, szuloElem)
    {
        console.log(tomb);
        console.log(szuloElem);
        szuloElem.html(`<div id="cimekTarolo"></div>`)

        this.cimekDiv=szuloElem.children("div:last-child")

        tomb.forEach(elem => 
        {
            new AdminFelhasznaloCimView(elem, this.cimekDiv);    
        });
    }
}
export default AdminFelhasznaloCimekView;
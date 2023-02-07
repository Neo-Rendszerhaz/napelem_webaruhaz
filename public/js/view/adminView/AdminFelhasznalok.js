import AdminFelhasznalo from "./AdminFelhasznalo.js";

class AdminFelhasznalok
{
    constructor(adat, szuloElem)
    {
        $(szuloElem).html(`<table class="table table-striped">
        <tr>
        <th>Teljes név</th>
        <th>Email</th>
        <th>Telefonszám</th>
        <th>Címek</th>
        <th>Cégnév</th>
        <th>Adószám</th>
        <th>Jelleg</th>
        <th>Jogosultság</th>
        </tr></table>`);
        // <th>Szerkesztés</th>

        this.tablaelem=szuloElem.children("table:last-child")
        this.tbodyElem=this.tablaelem.children("tbody")

        adat.forEach(elem => 
        {
            new AdminFelhasznalo(elem, this.tbodyElem);    
        });
    }
}

export default AdminFelhasznalok
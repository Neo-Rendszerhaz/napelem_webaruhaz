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
        <th>Számlázási cím</th>
        <th>1. Szállítási cím</th>
        <th>2. Szállítási cím</th>
        <th>3. Szállítási cím</th>
        <th>Opció</th>
        </tr></table>`);

        this.tablaelem=szuloElem.children("table:last-child")
        this.tbodyElem=this.tablaelem.children("tbody")

        adat.forEach(elem => 
        {
            new AdminFelhasznalo(elem, this.tbodyElem);    
        });
    }
}

export default AdminFelhasznalok
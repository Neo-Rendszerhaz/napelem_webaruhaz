import AdminCim from "./AdminCim.js";

class AdminCimek
{
    constructor(tomb, szuloElem)
    {
        $(szuloElem).html(`<table class="table table-striped">
        <tr>
        <th>irányítószám</th>
        <th>Város</th>
        <th>Közterület neve</th>
        <th>Közterület jellege</th>
        <th>Házszám / Helyrajziszám</th>
        <th>Épület</th>
        <th>Emelet</th>
        <th>Ajtó</th>
        <th>Kapucsengő</th>
        </tr></table>`);

        this.tablaelem=szuloElem.children("table:last-child")
        this.tbodyElem=this.tablaelem.children("tbody")

        tomb.forEach(elem => 
        {
            new AdminCim(elem, this.tbodyElem);    
        });
    }
}
export default AdminCimek;
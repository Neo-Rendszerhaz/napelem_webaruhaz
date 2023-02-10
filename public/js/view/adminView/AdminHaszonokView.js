import AdminHaszonView from "./AdminHaszonView.js";

class AdminHaszonok {
    constructor(tomb, szuloElem) {
        $(szuloElem).html(`<table class="table table-striped">
        <tr>
        <th>Dátum</th>
        <th>Haszon(%)</th>
        <th>Áfa(%)</th>
        </tr></table>`);

        this.tablaelem = szuloElem.children("table:last-child")
        this.tbodyElem = this.tablaelem.children("tbody")

        tomb.forEach(elem => {
            new AdminHaszonView(elem, this.tbodyElem);
        });
    }
}
export default AdminHaszonok;
import AdminTermekView from "./AdminTermekView.js";

class AdminTermekek {
    constructor(tomb, szuloElem) {
        $(szuloElem).html(`<table class="table table-striped">
        <tr>
        <th>Megnevezés</th>
        <th>Cikkszám</th>
        <th>Gyártói cikkszám</th>
        <th>Márka</th>
        <th>Garancia(hónap)</th>
        <th>Leírás</th>
        </tr></table>`);

        this.tablaelem = szuloElem.children("table:last-child")
        this.tbodyElem = this.tablaelem.children("tbody")

        tomb.forEach(elem => {
            new AdminTermekView(elem, this.tbodyElem);
        });
    }
}
export default AdminTermekek;
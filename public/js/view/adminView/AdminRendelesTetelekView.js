import AdminRendTetelV from "./AdminRendelesTetelView.js";

class AdminRendTetelekV{
    constructor(tomb,szuloElem){
        $(szuloElem).html(`<table class="table table-striped"><tr><th>Rendelés szám</th>
        <th>Termék id</th>
        <th>Mennyiség</th>
        <th>Nettó ár</th>
        <th>Bruttó ár</th>
        <th>Termék megjelenítés</th>
        </tr></table>`)
        const ujSzulo = "tbody";
        tomb.forEach(termek => {
            new AdminRendTetelV(termek,ujSzulo);
        });
    }
}
export default AdminRendTetelekV
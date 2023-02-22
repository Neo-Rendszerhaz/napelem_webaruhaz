import AdminRendTetelV from "./AdminRendelesTetelView.js";

class AdminRendTetelekV{
    constructor(tomb,szuloElem){
        $(szuloElem).html(`<table class="table table-striped"><tr><th>Rendelés szám</th>
        <th>Termék neve</th>
        <th>Mennyiség</th>
        <th>Tétel ár</th>
        <th>Összes tétel ár</th>
        <th>Termék megjelenítés</th>
        <th>Rendelés tétel törlés</th>
        </tr></table>`)

        const ujSzulo = "#adatTarolo>table>tbody";
        tomb.forEach(termek => {
            new AdminRendTetelV(termek,ujSzulo);
        });
    }
}
export default AdminRendTetelekV
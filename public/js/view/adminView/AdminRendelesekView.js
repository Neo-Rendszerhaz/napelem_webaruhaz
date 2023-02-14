import AdminRendelesView from "./AdminRendelesView.js";

class AdminRendelesekView{
    constructor(tomb,szuloElem){
        $(szuloElem).html(`<table class="table table-striped"><tr>
        <th>Rendelés szám</th>
        <th>Dátum</th>
        <th>Felhasználó</th>
        <th>Szállítási cím</th>
        <th>Végösszeg</th>
        <th>Kedvezmény</th>
        <th>Kedvezményes ár</th>
        <th>Állapot</th>
        <th>Cím megjelenítés</th>
        <th>Állapot módosítás</th>
        <th>Rendelés törlés</th>
        </tr></table>`)
        const ujSzulo = "tbody";
        tomb.forEach(rendeles => {
            new AdminRendelesView(rendeles,ujSzulo);
        });
    }
}
export default AdminRendelesekView
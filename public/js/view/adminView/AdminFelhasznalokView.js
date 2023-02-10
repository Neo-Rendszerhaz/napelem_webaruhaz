import AdminFelhasznaloView from "./AdminFelhasznaloView.js";

class AdminFelhasznalokView
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
        </tr></table>
        <div id="cimekTarolo"></div>
        `);

        const tbodyElem="#adatTarolo>table>tbody"

        adat.forEach(elem => 
        {
            new AdminFelhasznaloView(elem, tbodyElem);
        });
    }
}

export default AdminFelhasznalokView
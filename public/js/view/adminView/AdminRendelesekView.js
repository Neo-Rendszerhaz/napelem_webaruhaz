import AdminRendelesView from "./AdminRendelesView.js";

class AdminRendelesekView{
    constructor(tomb,szuloElem){
        $(szuloElem).html(`<input type="text" id="myInput" placeholder="Rendelés szám keresése" title="Írja be a rendelés számot"><table class="table table-striped"><tr>
        <th>Rendelés szám</th>
        <th>Dátum</th>
        <th>Felhasználó</th>
        <th>Szállítási cím</th>
        <th>Teljes ár</th>
        <th>Kedvezmény</th>
        <th>Végösszeg</th>
        <th>Állapot</th>
        <th>Cím megjelenítés</th>
        <th>Állapot módosítás</th>
        <th>Rendelés törlés</th>
        </tr></table>`)
        const ujSzulo = "tbody";
        tomb.forEach(rendeles => {
            new AdminRendelesView(rendeles,ujSzulo);
        });
        this.myInputElem =$("#myInput")
        this.myInputElem.keyup(this.myFunction)
    }
    

    myFunction(){
        var input, filter, td, i, txtValue;
        let tr = []
        input = $("#myInput");
        filter = input.val();
        tr = $("tr");
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            txtValue = td.textContent || td.innerText;
            console.log(txtValue)
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
export default AdminRendelesekView
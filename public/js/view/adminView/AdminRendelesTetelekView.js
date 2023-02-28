import AdminRendTetelV from "./AdminRendelesTetelView.js";

class AdminRendTetelekV{
    constructor(tomb,szuloElem){
        $(szuloElem).html(`<input type="text" id="myInput" placeholder="Rendelés szám keresése" title="Írja be a rendelés számot">
        <div class="overlay">
        <div id ="popup"><span class="bezar">&times;</span>
        <div class=tartalom></div> 
      </div>
      </div>
        <table class="table table-striped"><tr><th>Rendelés szám</th>
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
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
export default AdminRendTetelekV
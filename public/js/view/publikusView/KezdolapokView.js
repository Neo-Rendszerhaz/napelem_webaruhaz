import KezdolapView from "./KezdolapView.js";

class KezdoLapokView 
{
    constructor(tomb, szuloElem) 
    {
        $("#kereso").html(`<label>Kereső</label><br><input type="text" id="szuro" placeholder="termék keresése" title="Írja be a termék nevét">`)
        tomb.termekek.forEach(termek => 
        {   
            new KezdolapView(termek, szuloElem);
            this.kereso=$("#szuro").keyup(this.kereses)
        });
    }
    kereses(){
        var input, filter, cim, i, txtValue, TDiv, KDiv;
        input = $("#szuro");
        filter = input.val().toUpperCase();
        TDiv = $(".termek");
        KDiv = $(".kattintasiFelulet")
        for (i = 0; i < KDiv.length; i++) {
            cim = KDiv[i].getElementsByTagName("h6")[0];
            txtValue = cim.textContent || cim.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                TDiv[i].style.display = "";
            } else {
                TDiv[i].style.display = "none";
            }
        }
    }
}

export default KezdoLapokView;
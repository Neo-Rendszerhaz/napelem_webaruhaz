import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import AdminRendTetelekV from "../../view/adminView/AdminRendelesTetelekView.js"

class AdminRendTetelC{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const AFM = new AdatFeldolgozModel(token);
        const vegpont = "/rendeles_tetelek_termekkel";
        AFM.adatBe(vegpont,this.tetelMutat)
        $(window).on("RTtorles",(event)=>{
            let figyelmeztetes = confirm("Biztosan szeretné törölni a rendelés tételt?");
            if(figyelmeztetes === true){         
                const torlesPont = `/rendeles_tetelek/${event.detail.rendeles_szam}/${event.detail.termek_id}`
                AFM.adatTorol(torlesPont,event.detail)
                AFM.adatBe(vegpont,this.tetelMutat)
            }
        })
    }
    tetelMutat(tomb){
        // const szuloElem = "article"
        const szuloElem = "#adatTarolo"
        new AdminRendTetelekV(tomb, szuloElem);
    }
    myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}
export default AdminRendTetelC
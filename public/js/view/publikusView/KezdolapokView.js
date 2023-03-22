import KezdolapView from "./KezdolapView.js";

class KezdoLapokView 
{
    constructor(jsonTomb, szuloElem) 
    {
        $("#kereso").html(`
        <label>Kereső</label>
        <input type="text" id="keresoMezo" placeholder="termék keresése" title="Írja be a termék nevét">`);
        
        $(`#szuro`).html(`
        <label for="szures">Szűrés</label>
        <button id="novekvoABC">ABC növekvő</button>
        <button id="csokkenoABC">ABC csökkenő</button>
        `)
        // <select name="szures" id="szures">
        //     <option value="abcNovekvo">ABC szerinti növekvő sorrend</option>
        //     <option value="abcCsokkeno">ABC szerinti csökkenő sorrend</option>
        // </select>

        const tomb=[];
        const megenevezesTomb=[];
        const arTomb=[];

        for (let i = 0; i < jsonTomb.termekek.length; i++) 
        {
            tomb.push(jsonTomb.termekek[i]);
        }

        this.tombMegjelenit(tomb, szuloElem);


        for (let i = 0; i < tomb.length; i++) 
        {
            megenevezesTomb.push(tomb[i].megnevezes);  
            arTomb.push(tomb[i].ar);  
        }
        console.log(arTomb);

        const novekvoABC=megenevezesTomb.sort();
        const novekvoAr=arTomb.sort(function(a, b){return a-b});
        // const csokkenoAr=novekvoAr.reverse();
        

        // const csokkeno=novekvo.reverse();
        // console.log(novekvo);
        // console.log(csokkeno);

        console.log(novekvoAr);
        // console.log(csokkenoAr);

        $(`#novekvoABC`).on("click", ()=>
        {
            console.log("növekvő");
            
            this.tombMegjelenit(novekvoABC, szuloElem);
            // console.log(tomb.termekek);
            // tomb.termekek.sort();
        });

        $(`#csokkenoABC`).on("click", ()=>
        {
            console.log("csökkenő");
        });
    }

    tombMegjelenit(tomb, szuloElem)
    {
        tomb.forEach(termek => 
        {   
            new KezdolapView(termek, szuloElem);
            this.kereso=$("#keresoMezo").keyup(this.kereses)
        });
    }

    kereses(){
        var input, filter, cim, i, txtValue, TDiv, KDiv;
        input = $("#keresoMezo");
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

    novekvoRendezesABC(tomb, ertek)
    {
        let i = tomb.length;
        if(i>=1)
        {
            let csere=-1;
            for (let j = 0; j < i-1; j++) 
            {
                if(ertek[j]>ertek[j+1])
                {
                    ertek[j]=ertek[j+1];
                    csere=j;
                }    
            }
            csere=i;
        }
    }
}

export default KezdoLapokView;
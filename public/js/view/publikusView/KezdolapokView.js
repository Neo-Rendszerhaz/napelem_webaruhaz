import KezdolapView from "./KezdolapView.js";

class KezdoLapokView 
{
    constructor(jsonTomb, szuloElem) 
    {   
        this.checkedTomb
        $("#kereso").html(`
        <label>Kereső</label>
        <input type="text" id="keresoMezo" placeholder="termék keresése" title="Írja be a termék nevét">`);
        
        $(`#szuro`).html(`
        <label for="szures">Szűrés</label>
        <button id="novekvoABC">ABC növekvő</button>
        <button id="csokkenoABC">ABC csökkenő</button>
        `)
        let tempArr = []
        this.tombtomb = jsonTomb.termekek
        this.tombtomb.forEach(termek => {
            tempArr.push(termek.marka)
        }); 
        tempArr = [...new Set(tempArr)]
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
        this.kereso=$("#keresoMezo").keyup(this.kereses)
        $(`#csokkenoABC`).on("click", ()=>
        {
            console.log("csökkenő");
        });
        this.markaInputMegj(tempArr);
    }

    markaInputMegj(markaTomb){
        $("#szuro").append("<div id='markaSzuro'></div>")
        markaTomb.forEach(marka => {
            $("#markaSzuro").append(` 
            <input type="checkbox" id="${marka.replace(/\s/g, '')}" name="${marka}" value="${marka}">
            <label for="${marka.replace(/\s/g, '')}">${marka}</label><br>`)
            $(`#${marka.replace(/\s/g, '')}`).on("click",()=>{
                this.markaSzuroVizsgalas()
            })
        });
    }
    markaSzuroVizsgalas(){  
        this.checkedTomb = []
        const inputMarkaTomb = $("#markaSzuro>input");
        for (let index = 0; index < inputMarkaTomb.length; index++) {
            if(inputMarkaTomb[index].checked){
                this.checkedTomb.push(inputMarkaTomb[index].value.replace(/\s/g, ''))
            }
        }
        this.szurtTermekJelenit()
    }

    szurtTermekJelenit(){
        if(this.checkedTomb.length>0){
            let megjelenitendoElem = [];
        this.tombtomb.forEach(termek => {
            for (let index = 0; index < this.checkedTomb.length; index++) {
                if(termek.marka.replace(/\s/g, '') === this.checkedTomb[index]){
                    megjelenitendoElem.push($(`#${termek.id}`).parent());                   
                }
            }
            $(`#${termek.id}`).parent().hide()
        });
        megjelenitendoElem.forEach(elem => {
            console.log(elem)
            elem.show();
        });
        }
        else{
            this.tombtomb.forEach(termek => {
                $(`#${termek.id}`).parent().show()
            });
        }
        

    }
    tombMegjelenit(tomb, szuloElem)
    {
        tomb.forEach(termek => 
        {   
            new KezdolapView(termek, szuloElem);
            
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
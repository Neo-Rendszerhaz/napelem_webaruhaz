class ProfilokView
{
    constructor(adat, szuloElem)
    {
        let profilAdatTxt=`<div id="profil">`;
        let cimTxt=`<div id="cim">`;

        szuloElem.append(`<div id="profil"></div>`)

        // for (let i = 0; i < adat.length; i++)
        // {
        //     // console.log(adat[i]);
        //     // for (let j = 0; j < adat[i].length; j++) 
        //     // {
        //         //     console.log(adat[j]);    
        //         // }
                
        //     console.log(adat[0].szamlazasi_cim);
        //     if(adat[i].tipus=="szamlazas")
        //     {
        //         profilAdatTxt+=`
        //         <p>Teljes név: ${adat[i].vezeteknev +" "+adat[i].keresztnev}</p>
        //         <p>Email cím: ${adat[i].email}</p>
        //         <p>Telefonszám: +36${adat[i].telefonszam}</p>
        //         </div>`;

        //         console.log(adat[i]);
        //         cimTxt+=`
        //         <p>Cím: ${adat[i].iranyitoszam+" "+adat[i].varos+" "+adat[i].kozterulet_neve+" "+adat[i].kozterulet_jellege+" "+adat[i].hely_hazszam+" "+adat[i].epulet+" "+adat[i].emelet+" "+adat[i].ajto+" "+adat[i].kapucsengo}</p>
        //         </div>`;
        //     }
        //     // else
        //     // {
        //     //     cimTxt+="</div>"
        //     // }
            

        //     // // console.log(adat[i].szamlazasi_cim);
        //     // if(adat[i].szamlazasi_cim!=null)
        //     // {
        //     //     cimTxt+=`
        //     // <p>Cím: ${adat[i].iranyitoszam+" "+adat[i].varos+" "+adat[i].kozterulet_neve+" "+adat[i].kozterulet_jellege+" "+adat[i].hely_hazszam+" "+adat[i].epulet+" "+adat[i].emelet+" "+adat[i].ajto+" "+adat[i].kapucsengo}</p>
        //     // </div>`;
        //     // }
        //     // else if(adat[i].szallitasi_cim_1!=null)
        //     // {
        //     //     szallitasicim1Txt+=`
        //     // <p>Cím: ${adat[i].iranyitoszam+" "+adat[i].varos+" "+adat[i].kozterulet_neve+" "+adat[i].kozterulet_jellege+" "+adat[i].hely_hazszam+" "+adat[i].epulet+" "+adat[i].emelet+" "+adat[i].ajto+" "+adat[i].kapucsengo}</p>
        //     // </div>`;
        //     // }
            
        // }
        console.log(profilAdatTxt);
        console.log(cimTxt);
        this.cimDiv=cimTxt;
        this.profilDiv=profilAdatTxt;
            
        szuloElem.append(this.profilDiv);
        szuloElem.append(this.cimDiv);
        // szuloElem.append(szallitasicim1Txt);
    }
}
    export default ProfilokView;
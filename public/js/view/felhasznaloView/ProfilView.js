class ProfilokView
{
    constructor(adat, szuloElem)
    {
        let profilAdatTxt=`<div id="profil">`;
        let cimTxt=`<div id="cim">`;
        for (let i = 0; i < adat.length; i++)
        {
            profilAdatTxt+=`
            <p>Teljes név: ${adat[i].vezeteknev +" "+adat[i].keresztnev}</p>
            <p>Email cím: ${adat[i].email}</p>
            <p>Telefonszám: +36${adat[i].telefonszam}</p>
            </div>`;
            
            cimTxt+=`
            <p>Cím: ${adat[i].iranyitoszam+" "+adat[i].varos+" "+adat[i].kozterulet_neve+" "+adat[i].kozterulet_jellege+" "+adat[i].hely_hazszam+" "+adat[i].epulet+" "+adat[i].emelet+" "+adat[i].ajto+" "+adat[i].kapucsengo}</p>
            </div>`;
        }
        this.cimDiv=cimTxt;
        this.profilDiv=profilAdatTxt;

        
        szuloElem.append(this.profilDiv);
        szuloElem.append(this.cimDiv);

        // <p>Irányítószám: ${adat[i].iranyitoszam}</p>
        //     <p>Város: ${adat[i].varos}</p>
        //     <p>Közterület neve: ${adat[i].kozterulet_neve}</p>
        //     <p>Közterület jellege: ${adat[i].kozterulet_jellege}</p>
        //     <p>Ház szám: ${adat[i].hely_hazszam}</p>
        //     <p>Épület: ${adat[i].epulet}</p>
        //     <p>Emelet: ${adat[i].emelet}</p>
        //     <p>Ajtó: ${adat[i].ajto}</p>
        //     <p>Kapucsengő: ${adat[i].kapucsengo}</p>
    }
}
export default ProfilokView;
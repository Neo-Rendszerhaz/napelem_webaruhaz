class ProfilView
{
    #elem
    constructor(elem, cimDiv, profilDiv)
    {
        this.#elem=elem
        
        for (const key in elem) 
        {
            if(elem[key]==null) 
            {
                elem[key]="";
            }
        }
        if(elem.epulet!="")
        {
            elem.epulet+=" épület";
        }
        if(elem.emelet!="")
        {
            elem.emelet+=" emelet";
        }
        if(elem.ajto!="")
        {
            elem.ajto+=". ajtó"
        }
        
        const cimzes=`<p>${elem.iranyitoszam+" "+elem.varos+" "+elem.kozterulet_neve+" "+elem.kozterulet_jellege+" "+elem.hely_hazszam+". "+elem.epulet+" "+elem.emelet+" "+elem.ajto} </p>`;

        const maganszemelyAdat = `<div id="adatok"><h3>Profil adatok:</h3>
        <p>Teljes név: ${elem.vezeteknev +" "+elem.keresztnev}</p>
        <p>Email cím: ${elem.email}</p>
        <p>Telefonszám: +36${elem.telefonszam}</p></div>`;

        const cegAdat=`
        <div id="adatok"><h3>Profil adatok:</h3>
        <p>Teljes név: ${elem.vezeteknev +" "+elem.keresztnev}</p>
        <p>Email cím: ${elem.email}</p>
        <p>Telefonszám: +36${elem.telefonszam}</p>
        <p>Cégnév: ${elem.cegnev}</p>
        <p>Adószám: ${elem.adoszam}</p>
        </div>`;

        if(elem.szamlazasi_cim=="")
        {
            console.log(maganszemelyAdat);
            if(elem.jelleg==="M")
            {
                $(profilDiv).append(maganszemelyAdat);
            }
            else if(elem.jelleg==="C")
            {
                $(profilDiv).append(cegAdat);
            }
            $("#profil").append(this.szerkesztesGomb("profilAdatokGomb"));
        }

        if(elem.tipus=="szamlazas")
        {
            $(cimDiv).html(`<div id=szamlazas>
            <div><h3>Számlázási cím:</h3>${cimzes}</div>`);
            $("#szamlazas").append(this.szerkesztesGomb("szamlazasiCimGomb"));
            if(elem.jelleg==="M")
            {
                $(profilDiv).html(maganszemelyAdat);
            }
            else if(elem.jelleg==="C")
            {
                $(profilDiv).html(cegAdat);
            }
            $("#profil").append(this.szerkesztesGomb("profilAdatokGomb"));
        }
        
        if(elem.tipus=="szallitas1" && elem.szallitasi_cim_1!=null)
        {
            $(cimDiv).append(`<div id=szallitas>
            <div><h3>Szállítási cím:</h3>${cimzes}</div>`);
            $("#szallitas").append(this.szerkesztesGomb("szalliatsiCimGomb"));
        }
        else
        {
            $(cimDiv).append("");
        }
    }

    szerkesztesGomb(gombId)
    {
        const gomb=`<div class="gomb"><button id="${gombId}" class="szerkesztes">Szerkesztés</button></div>`;
        return gomb
    }
}
export default ProfilView;
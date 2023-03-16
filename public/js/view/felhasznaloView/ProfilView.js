class ProfilView
{
    #elem
    constructor(elem, cimDiv, profilDiv)
    {
        this.#elem=elem

        const cimzes=`<p>${elem.iranyitoszam+" "+elem.varos+" "+elem.kozterulet_neve+" "+elem.kozterulet_jellege+" "+elem.hely_hazszam+" "+elem.epulet+" "+elem.emelet+" "+elem.ajto+" "+elem.kapucsengo}</p>`;

        
        const maganszemelyAdat = `<p>Teljes név: ${elem.vezeteknev +" "+elem.keresztnev}</p>
        <p>Email cím: ${elem.email}</p>
        <p>Telefonszám: +36${elem.telefonszam}</p>`;

        const cegAdat=`
        <p>Cégnév: ${elem.cegnev}</p>
        <p>Adószám: ${elem.adoszam}</p>
        `;

        const szerkesztesGomb=`<div class="gomb"><button id="cimSzerkesztes" class="szerkesztes">Szerkesztés</button></div>`;

        if(elem.szamlazasi_cim==null)
        {
            console.log(maganszemelyAdat);
            if(elem.jelleg==="M")
            {
                $(profilDiv).append(maganszemelyAdat, szerkesztesGomb);
            }
            else if(elem.jelleg==="C")
            {
                $(profilDiv).append(maganszemelyAdat, cegAdat, szerkesztesGomb);   
            }
        }

        if(elem.tipus=="szamlazas")
        {
            $(cimDiv).append(`<div id=szamlazas>
            <h3>Számlázási cím:</h3>${cimzes, szerkesztesGomb}`);
            if(elem.jelleg==="M")
            {
                $(profilDiv).append(maganszemelyAdat, szerkesztesGomb);
            }
            else if(elem.jelleg==="C")
            {
                $(profilDiv).append(maganszemelyAdat, cegAdat, szerkesztesGomb);   
            }
        }
        
        if(elem.tipus=="szallitas1" && elem.szallitasi_cim_1!=null)
        {
            $(cimDiv).append(`<div id=szallitas1>
            <h3>1. Szállítási cím:</h3>${cimzes}</div>`);
        }
        else
        {
            $(cimDiv).append("");
        }

        if(elem.tipus=="szallitas2" && elem.szallitasi_cim_2!=null)
        {
            $(cimDiv).append(`<div id=szallitas2>
            <h3>2. Szállítási cím:</h3>${cimzes}</div>`);
        }
        else
        {
            $(cimDiv).append("");
        }

        if(elem.tipus=="szallitas3" && elem.szallitasi_cim_3!=null)
        {
            $(cimDiv).append(`<div id=szallitas3>
            <h3>3. Szállítási cím:</h3>${cimzes}</div>`);
        }
        else
        {
            $(cimDiv).append("");
        }
    }
}
export default ProfilView;
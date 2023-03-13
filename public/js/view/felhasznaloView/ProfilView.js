class ProfilView
{
    #elem
    constructor(elem, cimDiv, profilDiv)
    {
        this.#elem=elem

        const cimzes=`<p>${elem.iranyitoszam+" "+elem.varos+" "+elem.kozterulet_neve+" "+elem.kozterulet_jellege+" "+elem.hely_hazszam+" "+elem.epulet+" "+elem.emelet+" "+elem.ajto+" "+elem.kapucsengo}</p>`;

        
        const profilAdat = `<p>Teljes név: ${elem.vezeteknev +" "+elem.keresztnev}</p>
        <p>Email cím: ${elem.email}</p>
        <p>Telefonszám: +36${elem.telefonszam}</p>`;

        if(elem.szamlazasi_cim==null)
        {
            $(profilDiv).append(`${profilAdat}
            <button id="cimSzerkesztes" class="szerkesztes">Szerkesztés</button></div>`);
        }

        if(elem.tipus=="szamlazas")
        {
            $(cimDiv).append(`<div id=szamlazas>
            <h3>Számlázási cím:</h3>${cimzes}
            <div class="gomb"><button id="cimSzerkesztes" class="szerkesztes">Szerkesztés</button></div></div>`);
            $(profilDiv).append(`${profilAdat}
            <button id="profilSzerkesztes" class="szerkesztes">Szerkesztés</button></div>`);
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
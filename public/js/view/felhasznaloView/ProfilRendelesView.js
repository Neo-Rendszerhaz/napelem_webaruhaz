class ProfilRendelesView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem
        
        if(elem.length!==0)
        {
            szuloElem.append(`<div class="felhasznaloRendelesi">
            <div><p>Rendelés szám: ${elem.rendeles_szam}</p></div>
            <div><p>Rendelés dátuma: ${elem.datum}</p></div>
            <div><p>Végösszeg: ${elem.vegosszeg} Ft</p></div>
            <div><p class="rendelesAllapot">Rendelés Állapota: 
            ${this.rendelesAllapot(elem.allapot)}</p></div>
            </div>`);
        }
        else
        {
            szuloElem.append(`<div class="felhasznaloRendelesi">
            <p>Nincs rendelése!</p>
            </div>`);
        }
    }

    rendelesAllapot(allapot)
    {
        let kiir="";
        if(allapot=="FL")
        {
            kiir="Függőben lévő";
        }
        else if(allapot=="FA")
        {
            kiir="Feldolgozás alatt";
        }
        else if(allapot=="RL")
        {
            kiir="Rendelés leadva";
        }
        else if(allapot=="KA")
        {
            kiir="Kézbesítés alatt";
        }
        else if(allapot=="T")
        {
            kiir="Teljesítve";
        }

        return kiir;
    }
}
export default ProfilRendelesView;
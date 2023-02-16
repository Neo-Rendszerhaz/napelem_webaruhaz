class ProfilRendelesView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem
        console.log($.isEmptyObject(elem));
        console.log(elem);
        
        if(elem.length!==0)
        {
            szuloElem.append(`<div class="felhasznaloRendelesi">
            <p>Rendelés szám: ${elem.rendeles_szam}</p>
            <p>Rendelés dátuma: ${elem.datum}</p>
            <p>Végösszeg: ${elem.vegosszeg} Ft</p>
            <p class="rendelesAllapot">Rendelés Állapota: 
            ${this.rendelesAllapot(elem.allapot)}</p>
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
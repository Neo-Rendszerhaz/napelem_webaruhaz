class ProfilRendelesView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem

        szuloElem.append(`
        <p>Rendelés szám:${elem.rendeles_szam} Dátum: ${elem.datum} Végösszeg: ${elem.kedvezmenyes_ar} Rendelés Állapota: ${elem.allapot}</p>
        `)
    }
}
export default ProfilRendelesView;
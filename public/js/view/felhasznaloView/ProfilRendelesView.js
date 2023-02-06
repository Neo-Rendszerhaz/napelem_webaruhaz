class ProfilRendelesView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem

        szuloElem.append(`<p>${elem.datum}</p>`)
    }
}
export default ProfilRendelesView;
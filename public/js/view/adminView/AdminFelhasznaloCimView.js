class AdminFelhasznaloCimView
{
    #elem
    constructor(elem, szuloElem) 
    {
        this.#elem=elem;

        szuloElem.append(`${elem.varos}`)
    }
}

export default AdminFelhasznaloCimView;
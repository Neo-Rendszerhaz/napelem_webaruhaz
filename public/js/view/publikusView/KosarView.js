class KosarView 
{
    #elem;
    constructor(elem, szuloelem) 
    {
        this.#elem = elem;
        szuloelem.append(`
            <div class="termek">
                <h3>${elem.megnevezes}</h3>
                <img src="${elem.kep}">
                <p>Ár: ${elem.ar}</p>
                <p>Mennyiség: ${elem.db}db</p>
            </div>
        `)
    }
}
export default KosarView;
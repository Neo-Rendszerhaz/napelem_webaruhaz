class KezdolapView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`
            <div>
                <h1>Név: ${elem.megnevezes}</h1>
                <img src="${elem.kep}">
                <h3>Ár: ${elem.ar}</h3>
            </div>
            `)
    }
}

export default KezdolapView;

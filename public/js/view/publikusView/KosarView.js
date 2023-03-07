class KosarView {
    #elem;
    constructor(elem, szuloelem) {
        console.log("KosarView Hali!");
        this.#elem = elem;
        szuloelem.append(`
            <div class="termek">
                <p>Megnevezés: ${elem.megnevezes}</p>
                <p>Garancia: ${elem.garancia}</p>
                <img src="${elem.kep}">
                <p>Ár: ${elem.ar}</p>
            </div>
        `)
    }
}

export default KosarView;
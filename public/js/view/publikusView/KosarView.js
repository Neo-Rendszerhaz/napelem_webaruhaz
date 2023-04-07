class KosarView {
    #elem;
    constructor(elem, szuloelem) {
        this.#elem = elem;

        szuloelem.append(`
            <div class="termek">
                <img src="${elem.kep}">
                <h4>${elem.megnevezes}</h4>
                <p>Ár: ${elem.ar} Ft/db</p>
                <p>Mennyiség: ${elem.db} db</p>
                <p>Összesen: ${elem.ar * elem.db} Ft </p>
            </div>
        `)
    }
}
export default KosarView;
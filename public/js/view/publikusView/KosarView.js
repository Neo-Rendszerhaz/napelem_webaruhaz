class KosarView {
    #elem;
    constructor(elem, szuloelem) {
        this.#elem = elem;

        szuloelem.append(`
            <div class="termek">
                <h3>${elem.megnevezes}</h3>
                <img src="${elem.kep}">
                <p>Ár: ${elem.ar} Ft/db</p>
                <p>Mennyiség: ${elem.db} db</p>
                <p>Összesen: ${elem.ar * elem.db} Ft </p>
            </div>
        `)
    }
}
export default KosarView;
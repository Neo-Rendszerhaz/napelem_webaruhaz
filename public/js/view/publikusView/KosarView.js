class KosarView {
    #elem;
    constructor(elem, szuloelem) {
        this.#elem = elem;

        szuloelem.append(`
            <div class="termek">
                <div class="termekKep">
                    <img src="${elem.kep}">
                </div>
                <div class="termekLeiras">
                    <div>
                        <h4>${elem.megnevezes}</h4>
                    </div>
                    <div>
                        <p>Ár: ${elem.ar} Ft/db</p>
                    </div>
                    <div>
                        <p>Mennyiség: ${elem.db} db</p>
                    </div>
                    <div>
                        <p>Összesen: ${elem.ar * elem.db} Ft </p>
                    </div>
                </div>
            </div>
        `)
    }
}
export default KosarView;
class KezdolapView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`
            <div class="termek">
                <div id="${elem.id}">
                <h2>Név: ${elem.megnevezes}</h2>
                <img src="${elem.kep}">
                <h3>Ár: ${elem.ar} Ft</h3>
                </div>
                <button id="gomb${elem.id}">Kosárba</button>
            </div>
            `);
        $(`#gomb${elem.id}`)
            .on("click", () => {
                //console.log(elem);
                this.kattintas("kosar");
            });
        this.termekKattUjOldal(`#${elem.id}`);
    }
    kattintas(esemenyNeve) {
        window.dispatchEvent(
            new CustomEvent(esemenyNeve, { detail: this.#elem })
        );
    }
    termekKattUjOldal(elem) {
        $(elem).on('click', () => {
            this.kattintas("termekUjOldal");
        });
    }
}

export default KezdolapView;

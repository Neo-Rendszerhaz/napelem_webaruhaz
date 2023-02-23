class KezdolapView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`
            <div class="termek">
                <h2>Név: ${elem.megnevezes}</h2>
                <img src="${elem.kep}">
                <h3>Ár: ${elem.ar} Ft</h3>
                <button id="gomb${elem.id}">Kosárba</button>
            </div>
            `);
        document
            .getElementById(`gomb${elem.id}`)
            .addEventListener("click", () => {
                //console.log(elem);
                this.kattintas(elem);
            });
    }
    kattintas(elem) {
        window.dispatchEvent(
            new CustomEvent("kosar", { detail: elem })
        );
    }
}

export default KezdolapView;

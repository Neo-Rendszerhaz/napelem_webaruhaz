class TermekView {
    #elem;
    #minus;
    #number;
    #plus;
    #menny = 1;
    constructor(elem, szuloElem) {
        this.#elem = elem
        szuloElem.html(`
        <div id="kep"><img src="${elem.kep}"></div>
        <div id="termek">
            <h2>${elem.megnevezes}</h2>
            <p>Cikkszám: ${elem.cikkszam}</p>
                <p>Gyártói cikkszám: ${elem.gyartoi_cikkszam}</p>
                <p>Márka: ${elem.marka}</p>
                <p>Garancia: ${elem.garancia} hónap</p>
                <p>${elem.leiras}</p>
                <div class="wrapper">
                <h4 class="ar">${elem.ar} Ft</h4>
                <div class="mennyisegTarolo">
                    <div>
                    <button id="minus${elem.id}" class="novCsok">&minus;</button>
                    </div>
                    <div>
                    <input type="number" min=1 class="dbInput" value="1" id="number${elem.id}">
                    </div>
                    <div>
                    <button id="plus${elem.id}" class="novCsok">&plus;</button>
                    </div>
                </div>
            </div>
                    <button id="kosarba" class="kosarGomb">Kosárba</button>
        </div>
        `);
        this.#minus = document.getElementById(`minus${elem.id}`);
        this.#number = document.getElementById(`number${elem.id}`);
        this.#plus = document.getElementById(`plus${elem.id}`);
        $(`#kosarba`).on("click", () => {
            this.kattintas("kosar");
        });
        $(this.#plus).on("click", () => {
            this.#menny++;
            this.#number.value = this.#menny;
        })
        $(this.#minus).on("click", () => {
            if (this.#menny > 1) {
                this.#menny--;
                this.#number.value = this.#menny;
            }
        })
    }

    kattintas(esemenyNeve) {
        window.dispatchEvent(new CustomEvent(esemenyNeve, { detail: this.#elem }));
    }
}

export default TermekView;
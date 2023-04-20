class TermekView {
    #elem;
    #minus;
    #number;
    #plus;
    #menny = 1;
    constructor(adat, szuloElem) {
        adat.forEach(elem => {
            this.elem = elem;
        });
        szuloElem.html(`
        <div id="kep"><img src="${this.elem.kep}"></div>
        <div id="termek">
            <h2>${this.elem.megnevezes}</h2>
            <p>Cikkszám: ${this.elem.cikkszam}</p>
                <p>Gyártói cikkszám: ${this.elem.gyartoi_cikkszam}</p>
                <p>Márka: ${this.elem.marka}</p>
                <p>Garancia: ${this.elem.garancia} hónap</p>
                <p>${this.elem.leiras}</p>
                <div class="wrapper">
                <h4 class="ar">${this.elem.ar} Ft</h4>
                <div class="mennyisegTarolo">
                    <div>
                    <button id="minus${this.elem.id}" class="novCsok">&minus;</button>
                    </div>
                    <div>
                    <input type="number" min=1 class="dbInput" value="1" id="number${this.elem.id}">
                    </div>
                    <div>
                    <button id="plus${this.elem.id}" class="novCsok">&plus;</button>
                    </div>
                </div>
            </div>
                    <button id="kosarba" class="kosarGomb">Kosárba</button>
        </div>
        <div class="overlay">
            <div class="popup">
                <div class="tartalom">
                    <h3>A termék sikeresen bekerült a kosárba.</h3>
                </div>
            </div>
        </div>
        `);
        this.#minus = document.getElementById(`minus${this.elem.id}`);
        this.#number = document.getElementById(`number${this.elem.id}`);
        this.#plus = document.getElementById(`plus${this.elem.id}`);
        $(`#kosarba`).on("click", () => {
            this.kattintas("kosar");
            $(".overlay").show();
            const myTimeout = setTimeout(this.eltuntet, 3000);
        });
        $(`.overlay`).on("click", () => {
            $(".overlay").hide();
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

    eltuntet() {
        $(".overlay").hide();
    }
    kattintas(esemenyNeve) {
        window.dispatchEvent(new CustomEvent(esemenyNeve, { detail: this.elem }));
    }
}

export default TermekView;
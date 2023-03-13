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
            <h2>Ár: ${elem.ar} Ft</h2>
            <div class="wrapper">
                <button id="minus${elem.id}">-</button>
                <span id="number${elem.id}">1</span>
                <button id="plus${elem.id}">+</button>
            </div>
            <button id="kosarba">Kosárba</button>
        </div>
        `)
        this.#minus = document.getElementById(`minus${elem.id}`);
        this.#number = document.getElementById(`number${elem.id}`);
        this.#plus = document.getElementById(`plus${elem.id}`);
        $(this.#plus)
            .on("click", () => {
                this.#menny++;
                this.#number.innerText = this.#menny;
            })
        $(this.#minus)
            .on("click", () => {
                if (this.#menny > 1) {
                    this.#menny--;
                    this.#number.innerText = this.#menny;
                }
            })
    }
}

export default TermekView;
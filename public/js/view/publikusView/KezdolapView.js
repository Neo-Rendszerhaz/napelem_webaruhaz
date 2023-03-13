class KezdolapView {
    #elem;
    #minus;
    #number;
    #plus;
    #menny;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        this.#menny = 1;
        szuloElem.append(`
        <div class="termek">
            <div id="${elem.id}">
                <h2>Név: ${elem.megnevezes}</h2>
                <img src="${elem.kep}">
                <h3>Ár: ${elem.ar} Ft</h3>
            </div>
            <div class="wrapper">
                <button id="minus${elem.id}">-</button>
                <span id="number${elem.id}">1</span>
                <button id="plus${elem.id}">+</button>
            </div>
            <button id=" gomb${elem.id}">Kosárba</button>
        </div>
            `);
        this.#minus = document.getElementById(`minus${elem.id}`);
        this.#number = document.getElementById(`number${elem.id}`);
        this.#plus = document.getElementById(`plus${elem.id}`);
        $(`#gomb${elem.id}`)
            .on("click", () => {
                //console.log(elem);
                this.kattintas("kosar");
            });
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

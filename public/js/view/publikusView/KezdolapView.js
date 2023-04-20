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
            <div id="${elem.id}" class="kattintasiFelulet">
            <img src="${elem.kep}">
            <h6 class="termekNev">${elem.megnevezes}</h6>
            </div>
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
            <div>
                <button id="gomb${elem.id}" class="kosarGomb">Kosárba</button>
            </div>
        </div>
            `);
        this.#minus = document.getElementById(`minus${elem.id}`);
        this.#number = document.getElementById(`number${elem.id}`);
        this.#plus = document.getElementById(`plus${elem.id}`);

        $(`#gomb${elem.id}`).on("click", () => {
            this.kattintas("kosar");
            $(".overlay").show();
            const myTimeout = setTimeout(this.eltuntet, 3000);
        });
        $(this.#plus)
            .on("click", () => {
                let input = this.#number.value;
                input++;
                this.#number.value = input;
            })
        $(this.#minus)
            .on("click", () => {
                let input = this.#number.value;
                if (input <= 1) {
                    input = 1
                } else {
                    input--;
                    this.#number.value = input;
                }
            })

        $(`#${elem.id}`).on('click', () => {
            this.kattintas("termekUjOldal");
        });

    }

    eltuntet() {
        $(".overlay").hide();
    }

    kattintas(esemenyNeve) {
        window.dispatchEvent(new CustomEvent(esemenyNeve, { detail: this.#elem }));
    }
}
export default KezdolapView;

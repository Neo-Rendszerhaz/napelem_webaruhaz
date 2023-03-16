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
                <h6>Név: ${elem.megnevezes}</h3>
            </div>
            <div class="wrapper">
                <h4 class="ar">Ár: ${elem.ar} Ft</h3>
                <div class="mennyisegTarolo">
                    <button id="minus${elem.id}">-</button>
                    <input type="number" min=1 max=100 class="dbInput" value="1" id="number${elem.id}">
                    <button id="plus${elem.id}">+</button>
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
        
        $(`#gomb${elem.id}`).on("click", () =>
        {
            //console.log(elem);
            this.kattintas("kosar");
        });
        $(this.#plus)
            .on("click", () => {
                let input = this.#number.value;
                if (input >= 100) {
                    input = 100;
                }else{
                    input++;
                    this.#number.value = input;
                }
            })
        $(this.#minus)
            .on("click", () => {
                let input = this.#number.value;
                if (input <= 1) {
                    input = 1
                }else{
                    input--;
                    this.#number.value = input;
                }   
            })

        this.termekKattUjOldal(`#${elem.id}`);

    }

    kattintas(esemenyNeve) 
    {
        window.dispatchEvent(new CustomEvent(esemenyNeve, { detail: this.#elem }));
    }

    termekKattUjOldal(elem) 
    {
        $(elem).on('click', () => 
        {
            this.kattintas("termekUjOldal");
        });
    }
    termekDbKosarba(){
        
    }
}
export default KezdolapView;

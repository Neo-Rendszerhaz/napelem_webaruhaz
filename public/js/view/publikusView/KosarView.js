class KosarView {
    #elem;
    constructor(elem, szuloelem) {
        this.#elem = elem;
        console.log(elem);
        szuloelem.append(`
        <div class="termek">
            <div class="termekKep">
                <div class="torles"><p id="torles${elem.id}" class="torol">&times;</p></div>
                <img  class="termekAzon${elem.id}" src="${elem.kep}">
            </div>
            <div class="termekLeiras">
                <div>
                    <h4 class="termekAzon${elem.id}">${elem.megnevezes}</h4>
                </div>
                <div>
                    <p>Ár: ${elem.ar} Ft/db</p>
                </div>
                <div class="mennyisegTarolo">
                    <div>
                        <button id="minusz${elem.id}" class="novCsok">&minus;</button>
                    </div>
                    <div>
                        <input type="number" min=1 class="dbInput" value="${elem.db}" id="szamlalo${elem.id}">
                    </div>
                    <div>
                        <button id="plusz${elem.id}" class="novCsok">&plus;</button>
                    </div>
                </div>
                <div>
                    <p id="osszeg${elem.id}">Összesen: ${elem.ar * elem.db} Ft </p>
                </div>
            </div>
        </div>
        `)
        $(`#torles${elem.id}`).on("click", ()=>
        {
            $(".torlesOverlay").show();
            console.log("Katt");
            $("#torlesPopupFelulet").html(`
            <div class="torlesOverlay">
                <div class="torlesPopup">
                    <p>Biztos szeretné törölni a terméket?</p>
                    <div>
                        <button class="valaszGomb" id="igen">Igen</button>
                        <button class="valaszGomb" id="nem">Nem</button>
                    </div>
                </div>
            </div>`);
            $("#igen").on("click", ()=>
            {
                this.kattintasTrigger("toroltTermek");
                $(".torlesOverlay").hide();
            })
            $("#nem").on("click", ()=>
            {
                $(".torlesOverlay").hide();
            })
        });

        $(`.termekAzon${elem.id}`).on("click", ()=>
        {
            this.kattintasTrigger("termekUjOldal");
        });

        this.minusz = $(`#minusz${elem.id}`);
        this.szamlalo = $(`#szamlalo${elem.id}`);
        this.plusz = $(`#plusz${elem.id}`);

        $(this.plusz).on("click", () => 
        {
            this.kattintasTrigger("dbNoveles");
        })
        $(this.minusz).on("click", () => 
        {
            this.kattintasTrigger("dbCsokkenes");
        })
    }
    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail: this.#elem});
        window.dispatchEvent(esemeny);
    }
}
export default KosarView;
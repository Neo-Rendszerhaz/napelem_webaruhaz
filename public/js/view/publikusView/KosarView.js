class KosarView 
{
    #elem;
    constructor(elem, szuloelem) 
    {
        this.#elem = elem;
        szuloelem.append(`
            <div class="termek">
                <h3>${elem.megnevezes}</h3>
                <img src="${elem.kep}">
                <p>Ár: ${elem.ar}</p>
                <p>Mennyiség: ${elem.db}db</p>
            </div>
        `)

        $(`#rendelesLeadasGomb`).on("click", ()=>
        {
            console.log("Rendelés leadás");
            this.kattintasTrigger("rendelesLeadas")
            $(".overlay").show();
            $(".tartalom").html(`
            <h3>Szállítási cím megadása</h3>
            <form id="szallitasiCim">
            <div class="form-group">

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="iranyitoszam" class=" col-form-label">Irányítószám</label>
                    </div>
                    <div class="col-md">
                        <input id="iranyitoszam" class="w-full" type="text" name="iranyitoszam" placeholder="1234" :value="old('iranyitoszam')" required ="iranyitoszam" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="varos" class=" col-form-label">Város</label>
                    </div>
                    <div class="col-md">
                        <input id="varos" class="w-full" type="text" name="varos" placeholder="Város" :value="old('varos')" required ="varos" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="kozteruletNeve" class=" col-form-label">Közterület neve</label>
                    </div>
                    <div class="col-md">
                        <input id="kozteruletNeve" class="w-full" type="text" name="kozteruletNeve" placeholder="Közterület neve" :value="old('kozteruletNeve')" required ="kozteruletNeve" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="kozteruletJellege" class=" col-form-label">Közterület jellege</label>
                    </div>
                    <div class="col-md">
                        <input id="kozteruletJellege" class="w-full" type="text" name="kozteruletJellege" placeholder="Közterület jellege" :value="old('kozteruletJellege')" required ="kozteruletJellege" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="helyHazSzam" class=" col-form-label">Ház / helyrajzi szám</label>
                    </div>
                    <div class="col-md">
                        <input id="helyHazSzam" class="w-full" type="text" name="helyHazSzam" placeholder="Ház / helyrajzi szám" :value="old('helyHazSzam')" required ="helyHazSzam" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="epulet" class=" col-form-label">Épület</label>
                    </div>
                    <div class="col-md">
                        <input id="epulet" class="w-full" type="text" name="epulet" placeholder="Épület" :value="old('epulet')" required ="epulet" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="emelet" class=" col-form-label">Emelet</label>
                    </div>
                    <div class="col-md">
                        <input id="emelet" class="w-full" type="text" name="emelet" placeholder="Emelet" :value="old('emelet')" required ="emelet" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="ajto" class=" col-form-label">Ajtó szám</label>
                    </div>
                    <div class="col-md">
                        <input id="ajto" class="w-full" type="text" name="ajto" placeholder="Ajtó szám" :value="old('ajto')" required ="ajto" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <label for="kapucsengo" class=" col-form-label">Kapucsengő</label>
                    </div>
                    <div class="col-md">
                        <input id="kapucsengo" class="w-full" type="text" name="kapucsengo" placeholder="Kapucsengő" :value="old('kapucsengo')" required ="kapucsengo" />
                    </div>
                </div>

                <input type="button" class="btn btn-primary mt-2" id="rendelesVeglegesites" value="Rendelés véglegesítése">
            </div>
            </form>
            `)
        });

        $(`#bezar`).on("click", ()=>
        {
            console.log("bezár");
            $(".overlay").hide();
        });
    }

    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#elem});
        window.dispatchEvent(esemeny);
    }
}
export default KosarView;
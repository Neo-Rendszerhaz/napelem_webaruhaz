import KosarView from "./KosarView.js";

class KosarakView {
    #rendelesCimAdatok = {};
    #tomb = []
    constructor(tomb, szuloElem) {
        this.#tomb = tomb
        this.#rendelesCimAdatok = { iranyitoszam: "", varos: "", kozterulet_neve: "", kozterulet_jellege: "", hely_hazszam: "", hely_haz_jelleg: "", epulet: "", emelet: "", ajto: "", kapucsengo: "" }
        this.vegosszeg = 0;
        $(`aside`).html(`
        <div>
            <h3>Végösszeg: ${this.vegosszegOsszeadas(tomb)} Ft</h3>
            <button id="rendelesLeadasGomb">Rendelés leadás</button>
        </div>
        <div class="overlay">
            <div class="popup">
                <h2>Rendelés leadás</h2>
                <p id="bezar" class="close">&times;</p>
                <div class="tartalom">
                    <h3>Számlázási cím megadása</h3>
                    <form id="szamlazasiCim">
                    <div id="formTartalom" class="form-group">
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="iranyitoszam" class=" col-form-label">Irányítószám</label>
                            </div>
                            <div class="col-md">
                                <input id="iranyitoszam" class="w-full" type="text" name="iranyitoszam" placeholder="1234" required ="iranyitoszam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="varos" class=" col-form-label">Város</label>
                            </div>
                            <div class="col-md">
                                <input id="varos" class="w-full" type="text" name="varos" placeholder="Város" required ="varos" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletNeve" class=" col-form-label">Közterület neve</label>
                            </div>
                            <div class="col-md">
                                <input id="kozteruletNeve" class="w-full" type="text" name="kozteruletNeve" placeholder="Közterület neve" required ="kozteruletNeve" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletJellege" class=" col-form-label">Közterület jellege</label>
                            </div>
                            <div class="col-md">
                                <input id="kozteruletJellege" class="w-full" type="text" name="kozteruletJellege" placeholder="Közterület jellege" required ="kozteruletJellege" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class=" form-check form-check-inline">
                                <input id="hazJelleg" class="form-check-input" type="radio" name="helyHazJelleg" value="hsz" checked>
                                <label for="hazJelleg" class="form-check-label">Házszám</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input id="helyrajzJelleg" class="form-check-input" type="radio" name="helyHazJelleg" value="hrsz">
                                <label for="helyrajzJelleg" class="form-check-label">Helyrajzi szám</label>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="helyHazSzam" class=" col-form-label">Ház / helyrajzi szám</label>
                            </div>
                            <div class="col-md">
                                <input id="helyHazSzam" class="w-full" type="text" name="helyHazSzam" placeholder="Ház / helyrajzi szám" required ="helyHazSzam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="epulet" class=" col-form-label">Épület</label>
                            </div>
                            <div class="col-md">
                                <input id="epulet" class="w-full" type="text" name="epulet" placeholder="Épület" required ="epulet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="emelet" class=" col-form-label">Emelet</label>
                            </div>
                            <div class="col-md">
                                <input id="emelet" class="w-full" type="text" name="emelet" placeholder="Emelet" required ="emelet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="ajto" class=" col-form-label">Ajtó szám</label>
                            </div>
                            <div class="col-md">
                                <input id="ajto" class="w-full" type="text" name="ajto" placeholder="Ajtó szám" required ="ajto" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kapucsengo" class="col-form-label">Kapucsengő</label>
                            </div>
                            <div class="col-md">
                                <input id="kapucsengo" class="w-full" type="text" name="kapucsengo" placeholder="Kapucsengő" required ="kapucsengo" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <input id="azonosCim" class="w-full" type="checkbox" name="azonosCim" checked="checked">
                            </div>
                            <div class="col-md">
                                <label for="azonosCim" class="col-form-label">Számlázási cím megegyezik a szállítási címmel</label><br>
                            </div>
                        </div>
                        </div>
                        
                    </form>
                    <form id="szallitasiCim" style="display:none">
                    <h3>Szállítási cím megadása</h3>
                    <div id="formTartalom" class="form-group">
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="iranyitoszam" class=" col-form-label">Irányítószám</label>
                            </div>
                            <div class="col-md">
                                <input id="iranyitoszam" class="w-full" type="text" name="iranyitoszam" placeholder="1234" required ="iranyitoszam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="varos" class=" col-form-label">Város</label>
                            </div>
                            <div class="col-md">
                                <input id="varos" class="w-full" type="text" name="varos" placeholder="Város" required ="varos" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletNeve" class=" col-form-label">Közterület neve</label>
                            </div>
                            <div class="col-md">
                                <input id="kozteruletNeve" class="w-full" type="text" name="kozteruletNeve" placeholder="Közterület neve" required ="kozteruletNeve" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletJellege" class=" col-form-label">Közterület jellege</label>
                            </div>
                            <div class="col-md">
                                <input id="kozteruletJellege" class="w-full" type="text" name="kozteruletJellege" placeholder="Közterület jellege" required ="kozteruletJellege" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class=" form-check form-check-inline">
                                <input id="hazJelleg" class="form-check-input" type="radio" name="helyHazJelleg" value="hsz" checked>
                                <label for="hazJelleg" class="form-check-label">Házszám</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input id="helyrajzJelleg" class="form-check-input" type="radio" name="helyHazJelleg" value="hrsz">
                                <label for="helyrajzJelleg" class="form-check-label">Helyrajzi szám</label>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="helyHazSzam" class=" col-form-label">Ház / helyrajzi szám</label>
                            </div>
                            <div class="col-md">
                                <input id="helyHazSzam" class="w-full" type="text" name="helyHazSzam" placeholder="Ház / helyrajzi szám" required ="helyHazSzam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="epulet" class=" col-form-label">Épület</label>
                            </div>
                            <div class="col-md">
                                <input id="epulet" class="w-full" type="text" name="epulet" placeholder="Épület" required ="epulet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="emelet" class=" col-form-label">Emelet</label>
                            </div>
                            <div class="col-md">
                                <input id="emelet" class="w-full" type="text" name="emelet" placeholder="Emelet" required ="emelet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="ajto" class=" col-form-label">Ajtó szám</label>
                            </div>
                            <div class="col-md">
                                <input id="ajto" class="w-full" type="text" name="ajto" placeholder="Ajtó szám" required ="ajto" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kapucsengo" class="col-form-label">Kapucsengő</label>
                            </div>
                            <div class="col-md">
                                <input id="kapucsengo" class="w-full" type="text" name="kapucsengo" placeholder="Kapucsengő" required ="kapucsengo" />
                            </div>
                        </div>
                    </form>
                    </div>
                    <input type="button" id="rendelesVeglegesites" class="btn btn-primary mt-2"  value="Rendelés véglegesítése">
            </div>
        </div>`)

        szuloElem.html(`
        <div id="rendtermekek">
        </div>`)
        this.divElem = szuloElem.children("div:last-child");

        console.log(tomb);

        tomb.forEach(adat => {
            new KosarView(adat, this.divElem);
        });

        this.tombMentes = this.objektbe(tomb);
        console.log(this.tombMentes);

        $(`#rendelesLeadasGomb`).on("click", () => {
            $(".overlay").show();
        });

        $(`#rendelesVeglegesites`).on("click", () => {
            this.rendelesMent()
            console.log(this.rendelesMent())
            this.kattintasTrigger("rendelesVeglegesites")
            localStorage.clear();
        });

        $(`#bezar`).on("click", () => {
            console.log("bezár");
            $(".overlay").hide();
        });

        $(`#azonosCim`).on("click", () => {
            let bePipalva = $(`#azonosCim`).prop('checked');
            if (bePipalva == false) {
                $("#szallitasiCim").show();
            } else {
                $("#szallitasiCim").hide();
            }
        })
    }

    vegosszegOsszeadas(tomb) {
        let ar = 0;
        for (let i = 0; i < tomb.length; i++) {
            ar += tomb[i].ar * tomb[i].db;
        }
        return ar;
    }
    objektbe(tomb) {
        var object = {};
        for (var i = 0; i < tomb.length; ++i) {
            object[i] = tomb[i];
        }
        return object;
    }

    rendelesMent() {
        this.#rendelesCimAdatok.iranyitoszam = $("#iranyitoszam").val();
        this.#rendelesCimAdatok.varos = $("#varos").val();
        this.#rendelesCimAdatok.kozterulet_neve = $("#kozteruletNeve").val();
        this.#rendelesCimAdatok.kozterulet_jellege = $("#kozteruletJellege").val();
        this.#rendelesCimAdatok.hely_hazszam = $("#helyHazSzam").val();
        this.#rendelesCimAdatok.hely_haz_jelleg = $("input[name='helyHazJelleg']:checked").val();
        //     if ($("#epulet").length === 0) {
        //         $("#epulet").val() == ""
        //     } else {
        //         this.#rendelesCimAdatok.epulet = $("#epulet").val();
        //     }
        //     if ($("#emelet").length === 0) {
        //         $("#emelet").val() == ""
        //     } else {
        //         this.#rendelesCimAdatok.emelet = $("#emelet").val();
        //     }
        //     if ($("#ajto").length === 0) {
        //         $("#ajto").val() == ""
        //     } else {
        //         this.#rendelesCimAdatok.ajto = $("#ajto").val();
        //     }
        //     if ($("#kapucsengo").length === 0) {
        //         $("#kapucsengo").val() == ""
        //     } else {
        //         this.#rendelesCimAdatok.kapucsengo = $("#kapucsengo").val();
        //     }
    }

    kattintasTrigger(esemenyNeve) {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, { detail: {"termekek":this.tombMentes , "cim": this.#rendelesCimAdatok } });
        window.dispatchEvent(esemeny);
    }
}
export default KosarakView;
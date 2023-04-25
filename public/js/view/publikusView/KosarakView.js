import KosarView from "./KosarView.js";

class KosarakView {

    #rendelesCimek={};
    #tomb = []
    constructor(tomb, szuloElem) {
        this.#tomb = tomb
        console.log(tomb);
        this.#rendelesCimek=
        {
            szamlazasiCimAdatok: {iranyitoszam: "", varos: "", kozterulet_neve: "", kozterulet_jellege: "", hely_hazszam: "", hely_haz_jelleg: "", epulet: "", emelet: "", ajto: "", kapucsengo: "" },
            
            szallitasiCimAdatok: { iranyitoszam: "", varos: "", kozterulet_neve: "", kozterulet_jellege: "", hely_hazszam: "", hely_haz_jelleg: "", epulet: "", emelet: "", ajto: "", kapucsengo: "" },

            szamlazasiCimMegyezikSzallitasiCimmel:"",
        }
        if(tomb.length!=0)
        {        
            this.vegosszeg = 0;
            $(`aside`).html(`
        <div id="osszesito">
            <h3>Végösszeg: ${this.vegosszegAr(this.#tomb)} Ft</h3>
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
                                <input id="szmIranyitoszam" class="w-full" type="text" name="iranyitoszam" placeholder="1234" required ="iranyitoszam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="varos" class=" col-form-label">Város</label>
                            </div>
                            <div class="col-md">
                                <input id="szmVaros" class="w-full" type="text" name="varos" placeholder="Város" required ="varos" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletNeve" class=" col-form-label">Közterület neve</label>
                            </div>
                            <div class="col-md">
                                <input id="szmKozteruletNeve" class="w-full" type="text" name="kozteruletNeve" placeholder="Közterület neve" required ="kozteruletNeve" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletJellege" class=" col-form-label">Közterület jellege</label>
                            </div>
                            <div class="col-md">
                                <input id="szmKozteruletJellege" class="w-full" type="text" name="kozteruletJellege" placeholder="Közterület jellege" required ="kozteruletJellege" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class=" form-check form-check-inline">
                                <input id="szmHazJelleg" class="form-check-input" type="radio" name="szmHelyHazJelleg" value="hsz" checked>
                                <label for="hazJelleg" class="form-check-label">Házszám</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input id="szmHelyrajzJelleg" class="form-check-input" type="radio" name="szmHelyHazJelleg" value="hrsz">
                                <label for="helyrajzJelleg" class="form-check-label">Helyrajzi szám</label>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="helyHazSzam" class=" col-form-label">Ház / helyrajzi szám</label>
                            </div>
                            <div class="col-md">
                                <input id="szmHelyHazSzam" class="w-full" type="text" name="helyHazSzam" placeholder="Ház / helyrajzi szám" required ="helyHazSzam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="epulet" class=" col-form-label">Épület</label>
                            </div>
                            <div class="col-md">
                                <input id="szmEpulet" class="w-full" type="text" name="epulet" placeholder="Épület" required ="epulet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="emelet" class=" col-form-label">Emelet</label>
                            </div>
                            <div class="col-md">
                                <input id="szmEmelet" class="w-full" type="text" name="emelet" placeholder="Emelet" required ="emelet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="ajto" class=" col-form-label">Ajtó szám</label>
                            </div>
                            <div class="col-md">
                                <input id="szmAjto" class="w-full" type="text" name="ajto" placeholder="Ajtó szám" required ="ajto" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kapucsengo" class="col-form-label">Kapucsengő</label>
                            </div>
                            <div class="col-md">
                                <input id="szmKapucsengo" class="w-full" type="text" name="kapucsengo" placeholder="Kapucsengő" required ="kapucsengo" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <input id="azonosCim" class="w-full" type="checkbox" name="azonosCim" checked="checked">
                            </div>
                            <div class="col-md">
                                <label for="azonosCim" class="col-form-label">A szállítási cím megegyezik a számlázási címmel</label><br>
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
                                <input id="szlIranyitoszam" class="w-full" type="text" name="iranyitoszam" placeholder="1234" required ="iranyitoszam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="varos" class=" col-form-label">Város</label>
                            </div>
                            <div class="col-md">
                                <input id="szlVaros" class="w-full" type="text" name="varos" placeholder="Város" required ="varos" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletNeve" class=" col-form-label">Közterület neve</label>
                            </div>
                            <div class="col-md">
                                <input id="szlKozteruletNeve" class="w-full" type="text" name="kozteruletNeve" placeholder="Közterület neve" required ="kozteruletNeve" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kozteruletJellege" class=" col-form-label">Közterület jellege</label>
                            </div>
                            <div class="col-md">
                                <input id="szlKozteruletJellege" class="w-full" type="text" name="kozteruletJellege" placeholder="Közterület jellege" required ="kozteruletJellege" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class=" form-check form-check-inline">
                                <input id="szlHazJelleg" class="form-check-input" type="radio" name="szlHelyHazJelleg" value="hsz" checked>
                                <label for="hazJelleg" class="form-check-label">Házszám</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input id="szlHelyrajzJelleg" class="form-check-input" type="radio" name="szlHelyHazJelleg" value="hrsz">
                                <label for="helyrajzJelleg" class="form-check-label">Helyrajzi szám</label>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="helyHazSzam" class=" col-form-label">Ház / helyrajzi szám</label>
                            </div>
                            <div class="col-md">
                                <input id="szlHelyHazSzam" class="w-full" type="text" name="helyHazSzam" placeholder="Ház / helyrajzi szám" required ="helyHazSzam" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="epulet" class=" col-form-label">Épület</label>
                            </div>
                            <div class="col-md">
                                <input id="szlEpulet" class="w-full" type="text" name="epulet" placeholder="Épület" required ="epulet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="emelet" class=" col-form-label">Emelet</label>
                            </div>
                            <div class="col-md">
                                <input id="szlEmelet" class="w-full" type="text" name="emelet" placeholder="Emelet" required ="emelet" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="ajto" class=" col-form-label">Ajtó szám</label>
                            </div>
                            <div class="col-md">
                                <input id="szlAjto" class="w-full" type="text" name="ajto" placeholder="Ajtó szám" required ="ajto" />
                            </div>
                        </div>
        
                        <div class="row mt-3">
                            <div class="col-3">
                                <label for="kapucsengo" class="col-form-label">Kapucsengő</label>
                            </div>
                            <div class="col-md">
                                <input id="szlKapucsengo" class="w-full" type="text" name="kapucsengo" placeholder="Kapucsengő" required ="kapucsengo" />
                            </div>
                        </div>
                    </form>
                    </div>
                    <input type="button" id="rendelesVeglegesites" class="btn btn-primary mt-2"  value="Rendelés véglegesítése">
            </div>
        </div>`)

            szuloElem.html(`
        <div id="rendtermekek">
            <h3 id="kosarCim"><i class="fa fa-shopping-cart"  style="font-size:64px; margin-top:5px; margin-right:30px;"></i>Kosár</h3>
        </div>`)
        this.divElem = szuloElem.children("div:last-child");
        }
        else
        {
            $("aside").html("");
            $("article").html("");
            $("section").html(`<h1 id="ures">A kosarad jelenleg üres.</h1>`)
        }
        

        tomb.forEach(adat => {
            new KosarView(adat, this.divElem);
        });

        $(window).on("toroltTermek", (event)=>
        {
            console.log(event.detail.id);
            for (let i = 0; i < tomb.length; i++) 
            {
                if(tomb[i].id===event.detail.id)
                {
                    delete tomb[i];
                }
            }
            console.log(tomb);
        });

        this.tombMentes = this.objektbe(tomb);

        $(`#rendelesLeadasGomb`).on("click", () => {
            $(".overlay").show();
        });

        $(`#rendelesVeglegesites`).on("click", () => 
        {
            let bePipalva = $(`#azonosCim`).prop('checked');
            this.#rendelesCimek.szamlazasiCimMegyezikSzallitasiCimmel=bePipalva;
            if (!bePipalva) 
            {
                this.rendelesSzamlaCimMent();
                this.rendelesSzallitCimMent();
            }
            else 
            {
                this.rendelesSzamlaCimMent();
                this.rendelesCimekMegegyeznek();
            }

            console.log(this.rendelesSzamlaCimMent())
            this.kattintasTrigger("rendelesVeglegesites")
            localStorage.clear();
            $(".overlay").hide();
        });

        $(`#bezar`).on("click", () => {
            console.log("bezár");
            $(".overlay").hide();
        });

        $(`#azonosCim`).on("click", () => 
        {
            let bePipalva = $(`#azonosCim`).prop('checked');
            if (bePipalva == false) 
            {
                $("#szallitasiCim").show();

            } else 
            {
                $("#szallitasiCim").hide();
            }
        })
    }

    vegosszegAr(tomb) 
    {
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

    rendelesSzamlaCimMent() {
        this.#rendelesCimek.szamlazasiCimAdatok.iranyitoszam = $("#szmIranyitoszam").val();
        this.#rendelesCimek.szamlazasiCimAdatok.varos = $("#szmVaros").val();
        this.#rendelesCimek.szamlazasiCimAdatok.kozterulet_neve = $("#szmKozteruletNeve").val();
        this.#rendelesCimek.szamlazasiCimAdatok.kozterulet_jellege = $("#szmKozteruletJellege").val();
        this.#rendelesCimek.szamlazasiCimAdatok.hely_hazszam = $("#szmHelyHazSzam").val();
        this.#rendelesCimek.szamlazasiCimAdatok.hely_haz_jelleg = $("input[name='szmHelyHazJelleg']:checked").val();
        this.#rendelesCimek.szamlazasiCimAdatok.epulet = $("#szmEpulet").val();
        this.#rendelesCimek.szamlazasiCimAdatok.emelet = $("#szmEmelet").val();
        this.#rendelesCimek.szamlazasiCimAdatok.ajto = $("#szmAjto").val();
        this.#rendelesCimek.szamlazasiCimAdatok.kapucsengo = $("#szmKapucsengo").val();
    }

    rendelesSzallitCimMent() {
        this.#rendelesCimek.szallitasiCimAdatok.iranyitoszam = $("#szlIranyitoszam").val();
        this.#rendelesCimek.szallitasiCimAdatok.varos = $("#szlVaros").val();
        this.#rendelesCimek.szallitasiCimAdatok.kozterulet_neve = $("#szlKozteruletNeve").val();
        this.#rendelesCimek.szallitasiCimAdatok.kozterulet_jellege = $("#szlKozteruletJellege").val();
        this.#rendelesCimek.szallitasiCimAdatok.hely_hazszam = $("#szlHelyHazSzam").val();
        this.#rendelesCimek.szallitasiCimAdatok.hely_haz_jelleg = $("input[name='szlHelyHazJelleg']:checked").val();
        this.#rendelesCimek.szallitasiCimAdatok.epulet = $("#szlEpulet").val();
        this.#rendelesCimek.szallitasiCimAdatok.emelet = $("#szlEmelet").val();
        this.#rendelesCimek.szallitasiCimAdatok.ajto = $("#szlAjto").val();
        this.#rendelesCimek.szallitasiCimAdatok.kapucsengo = $("#szlKapucsengo").val();
    }

    rendelesCimekMegegyeznek()
    {
        this.#rendelesCimek.szallitasiCimAdatok.iranyitoszam = $("#szmIranyitoszam").val();
        this.#rendelesCimek.szallitasiCimAdatok.varos = $("#szmVaros").val();
        this.#rendelesCimek.szallitasiCimAdatok.kozterulet_neve = $("#szmKozteruletNeve").val();
        this.#rendelesCimek.szallitasiCimAdatok.kozterulet_jellege = $("#szmKozteruletJellege").val();
        this.#rendelesCimek.szallitasiCimAdatok.hely_hazszam = $("#szmHelyHazSzam").val();
        this.#rendelesCimek.szallitasiCimAdatok.hely_haz_jelleg = $("input[name='szmHelyHazJelleg']:checked").val();
        this.#rendelesCimek.szallitasiCimAdatok.epulet = $("#szmEpulet").val();
        this.#rendelesCimek.szallitasiCimAdatok.emelet = $("#szmEmelet").val();
        this.#rendelesCimek.szallitasiCimAdatok.ajto =$("#szmAjto").val();
        this.#rendelesCimek.szallitasiCimAdatok.kapucsengo = $("#szmKapucsengo").val();
    }

    kattintasTrigger(esemenyNeve) {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, { detail: {"termekek":this.tombMentes , "cim": this.#rendelesCimek, "vegosszeg":this.vegosszegAr(this.#tomb)} });
        window.dispatchEvent(esemeny);
    }
}
export default KosarakView;
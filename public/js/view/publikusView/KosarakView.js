import KosarView from "./KosarView.js";

class KosarakView 
{
    #rendelesAdatok={};
    #tomb=[]
    constructor(tomb, szuloElem) 
    {
        this.#tomb=tomb
        $(`aside`).html(`
        <button id="rendelesLeadasGomb">Rendelés leadás</button>
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
                        <input type="checkbox" id="azonosCim" name="azonosCim" value="azonosCim">
                        <label for="azonosCim">Számlázási és szállítási cím megegyezik</label><br>
                        </div>
                        <input type="button" id="rendelesVeglegesites" class="btn btn-primary mt-2"  value="Rendelés véglegesítése">
                    </form>
                    
                </div>
            </div>
        </div>`)

        szuloElem.html(`
        <div id="rendtermekek">
        </div>`)
        this.divElem = szuloElem.children("div:last-child");

        console.log(tomb);

        tomb.forEach(adat => 
        {
            new KosarView(adat, this.divElem);
        });

        this.tombMentes = this.objektbe(tomb);
        // console.log(this.tombMentes);
        // this.#rendelesTermekekAdatok={megnevezes:"", cikkszam:"", gyartoi_cikkszam:"", marka:"", garancia:"", leiras:""};

        $(`#rendelesLeadasGomb`).on("click", ()=>
        {
            $(".overlay").show();
            this.kattintasTrigger("rendelesVeglegesites")
        });

        $(`#rendelesVeglegesites`).on("click", ()=>
        {
            //console.log("rendelesVeglegesites KATT");
        });

        $(`#bezar`).on("click", ()=>
        {
            console.log("bezár");
            $(".overlay").hide();
        });
    }

    objektbe(tomb) 
    {
        var object = {};
        for (var i = 0; i < tomb.length; ++i)
        {
            object[i] = tomb[i];
        }
        return object;
      }

    rendelesMent()
    {
        this.#rendelesAdatok.megnevezes=$("#megnevezes").val();
        this.#rendelesAdatok.cikkszam=$("#cikkszam").val();
        this.#rendelesAdatok.gyartoi_cikkszam=$("#gyartoi_cikkszam").val();
        this.#rendelesAdatok.marka=$("#marka").val();
        this.#rendelesAdatok.garancia=$("#garancia").val();
        this.#rendelesAdatok.leiras=$("#leiras").val();
    }

    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail: {"termekek":this.tombMentes, /* "cim": */}});
        window.dispatchEvent(esemeny);
    }
}
export default KosarakView;
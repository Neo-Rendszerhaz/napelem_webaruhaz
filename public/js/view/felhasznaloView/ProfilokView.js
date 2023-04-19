import ProfilView from "./ProfilView.js";

class ProfilokView
{
    constructor(adat, szuloElem)
    {
        this.szamlazasiCim;
        this.szallitasiCim;

        for (let i = 0; i < adat.length; i++) 
        {
            if(adat[i].tipus=="szamlazas")
            {
                this.szamlazasiCim=adat[i];
            }
            if(adat[i].tipus=="szallitas1")
            {
                this.szallitasiCim=adat[i];
            } 
        }
        szuloElem.html(`<div id="profil"></div>
        <div id="cim"></div>`);
        
        this.cimDiv=szuloElem.children("div:last-child");
        this.profilDiv=szuloElem.children("div:first-child");

        adat.forEach(elem => 
        {
            new ProfilView(elem, this.cimDiv, this.profilDiv);
        });

        this.profilAdatokGomb=$(`#profilAdatokGomb`);
        this.szamlazasiCimGomb=$(`#szamlazasiCimGomb`);
        this.szallitasiCimGomb=$(`#szallitasiCimGomb`);

        this.profilAdatokGomb.on("click", ()=>
        {
            $(".popup").css({"height": "55vh"});
            $(".tartalom").html(`<h3>Adatok módosítása</h3>
            <div class="popupTartalom">
                <div class="adatBlokk">
                    <label for="vezeteknev" class="mt-1 form-label">Vezetéknév:</label>
                    <input type="text" class="form-control" id="vezeteknev" name="vezeteknev" value="${this.szamlazasiCim.vezeteknev}" required autocomplete="vezeteknev">
                </div>
                
                <div class="adatBlokk">
                        <label for="keresztnev" class="mt-1 form-label">Keresztév:</label>
                        <input type="text" class="form-control" id="keresztnev" name="keresztnev" value="${this.szamlazasiCim.keresztnev}" required autocomplete="keresztnev">
                </div>
                
                <div class="adatBlokk">
                        <label for="email" class="mt-1 form-label">Email:</label>
                        <input type="email" class="form-control" id="email" name="email" value="${this.szamlazasiCim.email}" required autocomplete="email">
                </div>

                <div class="adatBlokk">
                        <label for="telefonszam" class="mt-1 form-label">Telefonszám:</label>
                    <div class="telszam">
                        <span class="input-group-text" id="basic-addon1">+36</span>
                        <input id="telefonszam" class="form-control w-100" type="text" name="telefonszam" value="${this.szamlazasiCim.telefonszam}" pattern="[0-9]\d{1,10}$" aria-describedby="basic-addon1" required autocomplete="telefonszam">
                    </div>
                </div>
                <button id="profilAdatokModositas">Módosítás</button>
                </div>`)
            $(".overlay").show();
            $("#profilAdatokModositas").on("click", ()=>
            {
                this.szemelyesAdatokModosit();
                this.kattintasTrigger("profilAdatokGomb");
                location.reload();
                $(".overlay").hide();
            });
        });

        this.szamlazasiCimGomb.on("click", ()=>
        {
            $(".popup").css({"height": "90%"});
            $(".tartalom").html(`<h3>Számlázási cím szerkesztése</h3>
            <div class="popupTartalom">
                <div class="adatBlokk">
                    <label for="iranyitoszam">Irányítószám:</label>
                    <input type="text" id="iranyitoszam" name="iranyitoszam" value="${this.szamlazasiCim.iranyitoszam}" required autocomplete="iranyitoszam">
                </div>
                
                <div class="adatBlokk">
                        <label for="varos">Város:</label>
                        <input type="text" id="varos" name="varos" value="${this.szamlazasiCim.varos}" required autocomplete="varos">
                </div>
                
                <div class="adatBlokk">
                        <label for="kozteruletNeve">Közterület neve:</label>
                        <input type="text" id="kozteruletNeve" name="kozteruletNeve" value="${this.szamlazasiCim.kozterulet_neve}" required autocomplete="kozteruletNeve">
                </div>

                <div class="adatBlokk">
                        <label for="kozteruletJellege">Közterület jellege:</label>
                        <input type="text" id="kozteruletJellege" name="kozteruletJellege" value="${this.szamlazasiCim.kozterulet_jellege}" required autocomplete="kozteruletJellege">
                </div>
                <div class="adatBlokk">
                        <label for="hely_hazszam">Helyrajzi / ház szám:</label>
                        <input type="text" id="hely_hazszam" name="hely_hazszam" value="${this.szamlazasiCim.hely_hazszam}" required autocomplete="hely_hazszam">
                </div>
                <div class="adatBlokk">
                        <label for="epulet">Épület</label>
                        <input type="text" id="epulet" name="epulet" value="${this.szamlazasiCim.epulet}" required autocomplete="epulet">
                </div>
                <div class="adatBlokk">
                        <label for="emelet">Emelet</label>
                        <input type="text" id="emelet" name="emelet" value="${this.szamlazasiCim.emelet}" required autocomplete="emelet">
                </div>
                <div class="adatBlokk">
                        <label for="ajto">Ajtó</label>
                        <input type="text" id="ajto" name="ajto" value="${this.szamlazasiCim.ajto}" required autocomplete="ajto">
                </div>
                <button id="profilAdatokModositas">Módosítás</button>
                </div>`)
            $(".overlay").show();

            $("#profilAdatokModositas").on("click", ()=>
            {
                this.szemelyesAdatokModosit();
                this.kattintasTrigger("profilAdatokGomb");
                location.reload();
                $(".overlay").hide();
            });
        });

        this.bezar=$("#bezar");
        this.bezar.on("click", ()=>
        {
            $(".overlay").hide();
        });

    }

    szemelyesAdatokModosit()
    {
        this.szamlazasiCim.vezeteknev=$("#vezeteknev").val();
        this.szamlazasiCim.keresztnev=$("#keresztnev").val();
        this.szamlazasiCim.email=$("#email").val();
        this.szamlazasiCim.telefonszam=$("#telefonszam").val();
    }
    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.szamlazasiCim});
        window.dispatchEvent(esemeny);
    }
}
    export default ProfilokView;
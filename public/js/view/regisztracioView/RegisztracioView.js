class RegisztracioView
{
    #elem
    #regisztraciosAdatok={};
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        this.#regisztraciosAdatok={vezeteknev:"", keresztnev:"", email:"", jelszo:"", telefonszam:"", jogosultsag:""};
        console.log(elem);

        szuloElem.append(`
        <form id="regisztracio">
            <div class"row align-items-center">
                <label for="vezeteknev" class="mt-1 form-label">Vezetéknév:</label>
                <input type="text" class="form-control" id="vezeteknev" name="vezeteknev" placeholder="Vezetéknév" required autofocus autocomplete="vezeteknev">
                
                <label for="keresztnev" class="mt-1 form-label">Keresztév:</label>
                <input type="text" class="form-control" id="keresztnev" name="keresztnev" placeholder="Keresztnév" required autofocus autocomplete="keresztnev">
                
                <label for="email" class="mt-1 form-label">Email:</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email" required autofocus autocomplete="email">
                
                <label for="jelszo" class="mt-1 form-label">Jelszó:</label>
                <input type="password" class="form-control" id="jelszo" name="jelszo" placeholder="Jelszó" required autofocus autocomplete="jelszo">
                
                <label for="jelszoUjra" class="mt-1 form-label">Jelszó újra:</label>
                <input type="password" class="form-control" id="jelszoUjra" name="jelszoUjra" placeholder="Jelszó újra" required autofocus autocomplete="jelszo">

                <label for="telefonszam" class="mt-1 form-label">Telefonszám:</label>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="basic-addon1">+36</span>
                    <input id="telefonszam" class="form-control w-100" type="text" name="telefonszam"  placeholder="301234567" pattern="[0-9]\d{1,10}$" aria-describedby="basic-addon1" required autofocus autocomplete="telefonszam">
                </div>


                <label for="jogosultsag" class="mt-1 form-label">Jogosultság:</label>
                <select class="form-select" id="jogosultsag" name="jogosultsag" form="jogosultsag">
                    <option value="R">Rendszer Admin</option>
                    <option value="A">Admin</option>
                </select>
                
                <input type="button" class="btn btn-primary mt-2" id="regisztralas" value="Regisztrálás">
            </div>
        </form>
        `)

        this.regisztralas=$("#regisztralas");

        this.regisztralas.on("click", ()=>
        {
            this.regisztracioMent();
            this.kattintasTrigger("regisztralas")
        });
    }

    regisztracioMent()
    {
        this.#regisztraciosAdatok.vezeteknev=$("#vezeteknev").val();
        this.#regisztraciosAdatok.keresztnev=$("#keresztnev").val();
        this.#regisztraciosAdatok.email=$("#email").val();
        this.#regisztraciosAdatok.jelszo=$("#jelszo").val();
        this.#regisztraciosAdatok.telefonszam=$("#telefonszam").val();
        this.#regisztraciosAdatok.jogosultsag=$("#jogosultsag").find(":selected").val();
    }

    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#regisztraciosAdatok});
        window.dispatchEvent(esemeny);
    }
}
export default RegisztracioView;
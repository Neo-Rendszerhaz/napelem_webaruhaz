class AdminFelhasznaloView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        szuloElem.append(`<tr>
        <td>${elem.vezeteknev+" "+elem.keresztnev}</td>
        <td>${elem.email}</td>
        <td>+36${elem.telefonszam}</td>
        <td><button id="megjelenit${elem.felhasznalo_id}">Címek</button></td>
        <td>${elem.cegnev}</td>
        <td>${elem.adoszam}</td>
        <td>${elem.jelleg}</td>
        <td>${elem.jogosultsag}</td>
        </tr>
        <tr>
        <td>
        <div id="fCimek"></div>
        <td>
        </tr>`)
        // <td><button id=${elem.felhasznalo_id}>J</button></td>

        this.cimMegjelenit=$(`#megjelenit${elem.felhasznalo_id}`);


        this.cimMegjelenit.on("click", ()=>
        {
            console.log(this.cimMegjelenit);
            console.log("módosít az AdminFelhasznaloView-ban");

            this.kattintasTrigger("megjelenit")
        });

    }

    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#elem.felhasznalo_id});
        window.dispatchEvent(esemeny);
    }
}
export default AdminFelhasznaloView
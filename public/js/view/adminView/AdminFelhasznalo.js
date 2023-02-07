class AdminFelhasznalo
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        szuloElem.append(`<tr>
        <td>${elem.vezeteknev+" "+elem.keresztnev}</td>
        <td>${elem.email}</td>
        <td>+36${elem.telefonszam}</td>
        <td><button id=${elem.felhasznalo_id}>Címek</button></td>
        <td>${elem.cegnev}</td>
        <td>${elem.adoszam}</td>
        <td>${elem.jelleg}</td>
        <td>${elem.jogosultsag}</td>
        </tr>`)
        // <td><button id=${elem.felhasznalo_id}>J</button></td>



    }

    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#elem});
        window.dispatchEvent(esemeny);
    }
}
export default AdminFelhasznalo
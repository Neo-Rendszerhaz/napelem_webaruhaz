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
        <td>${elem.szamlazasi_cim}</td>
        <td>${elem.szallitasi_cim_1}</td>
        <td>${elem.szallitasi_cim_2}</td>
        <td>${elem.szallitasi_cim_3}</td>
        <td><button id=${elem.felhasznalo_id}>Részletek</button></td>
        </tr>`)

    }
}
export default AdminFelhasznalo
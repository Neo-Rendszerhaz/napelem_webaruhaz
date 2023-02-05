class AdminCim
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        szuloElem.append(`<tr>
        <td>${elem.iranyitoszam}</td>
        <td>${elem.varos}</td>
        <td>${elem.kozterulet_neve}</td>
        <td>${elem.kozterulet_jellege}</td>
        <td>${elem.hely_hazszam}</td>
        <td>${elem.epulet}</td>
        <td>${elem.emelet}</td>
        <td>${elem.ajto}</td>
        <td>${elem.kapucsengo}</td>
        </tr>`);
    }
}
export default AdminCim;
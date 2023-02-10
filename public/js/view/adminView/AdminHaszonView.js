class AdminHaszonView {
    #elem
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`<tr>
        <td>${elem.datum}</td>
        <td>${elem.haszon_szazalek} %</td>
        <td>${elem.afa_szazalek} %</td>
        </tr>`);
    }
}
export default AdminHaszonView;
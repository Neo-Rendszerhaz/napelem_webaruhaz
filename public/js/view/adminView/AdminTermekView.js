class AdminTermekView {
    #elem
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`<tr>
        <td>${elem.megnevezes}</td>
        <td>${elem.cikkszam}</td>
        <td>${elem.gyartoi_cikkszam}</td>
        <td>${elem.marka}</td>
        <td>${elem.garancia} hónap</td>
        <td>${elem.leiras}</td>
        </tr>`);
    }
}

export default AdminTermekView;
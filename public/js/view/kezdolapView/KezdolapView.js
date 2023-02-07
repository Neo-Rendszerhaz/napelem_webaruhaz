class KezdolapView {
    #elem
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`<tr>
        <td>${elem.megnevezes}</td>
        <td>${elem.cikkszam}</td>
        <td>${elem.gyartoi_cikkszam}</td>
        <td>${elem.marka}</td>
        <td>${elem.garancia}</td>
        <td>${elem.leiras}</td>
        <td>${elem.kep}</td>
        <td>${elem.ar}</td>
        </tr>`);
    }
}

export default KezdolapView;

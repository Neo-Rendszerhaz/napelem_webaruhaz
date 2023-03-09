class TermekView 
{
    #elem;
    constructor(elem, szuloElem)
    {
        this.#elem=elem
        console.log(elem);
        szuloElem.html(`
        <div id="kep"><img src="${elem.kep}"></div>
        <div id="termek">
        <h2>${elem.megnevezes}</h2>
        <p>Cikkszám: ${elem.cikkszam}</p>
            <p>Gyártói cikkszám: ${elem.gyartoi_cikkszam}</p>
            <p>Márka: ${elem.marka}</p>
            <p>Garancia: ${elem.garancia} hónap</p>
            <p>${elem.leiras}</p>
            <h2>Ár: ${elem.ar} Ft</h2>
            <button id="kosarba">Kosárba</button>
        </div>
        `)
    }
}

export default TermekView;
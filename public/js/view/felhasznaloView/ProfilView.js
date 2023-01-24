class ProfilView
{
    #elem
    constructor(elem, szuloElem)
    {
        console.log("ProfilView");
        this.#elem=elem
        szuloElem.append(`<div class="ProfilViewElemek">
            <h2>${elem.email}</h2>
            <p>Időpont: ${elem.vezeteknev}</p>
            <p>Helyszín: ${elem.keresztnev}</p>
            <p>Férőhely: ${elem.telefonszam}</p>
        </div>`)

        this.sorElem=szuloElem.children("div:last-child");
    }
}
export default ProfilView;
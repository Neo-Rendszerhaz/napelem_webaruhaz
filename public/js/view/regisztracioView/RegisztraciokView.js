import RegisztracioView from "./RegisztracioView.js";

class RegisztraciokView
{
    constructor(tomb, szuloElem)
    {
        szuloElem.html(`<h2>Regisztráció</h2>`);

        new RegisztracioView(tomb, szuloElem)
    }
}
export default RegisztraciokView;
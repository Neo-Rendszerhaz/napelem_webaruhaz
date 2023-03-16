import KezdolapView from "./KezdolapView.js";

class KezdoLapokView 
{
    constructor(tomb, szuloElem) 
    {
        tomb.termekek.forEach(termek => 
        {
            new KezdolapView(termek, szuloElem);
        });
    }
}

export default KezdoLapokView;
import KezdolapView from "./KezdolapView.js";

class KezdoLapokView
{
    constructor(tomb, szuloElem)
    {
        // console.log(tomb.termekek);
        $(szuloElem).html(`<table class="table table-striped">
        <tr>
        <th>Megnevezés</th>
        <th>Cikkszám</th>
        <th>Gyártói Cikkszám</th>
        <th>Márka</th>
        <th>Garancia</th>
        <th>Leírás</th>
        <th>kép</th>
        <th>Ár</th>
        <tr></table>`);

        this.tablaElem=szuloElem.children("table:last-child")
        this.tbodyElem=this.tablaElem.children("tbody")

        tomb.termekek.forEach(elem => 
        {
            new KezdolapView(elem, this.tbodyElem);    
        });
    }
}

export default KezdoLapokView;
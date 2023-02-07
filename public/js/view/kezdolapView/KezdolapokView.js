import KezdolapView from "./KezdolapView.js";

class KezdoLapokView
{
    constructor(tomb, szuloElem)
    {
        $(szuloElem).html(`<table class="table table-striped">
        <tr>
        <th>Megnevezés</th>
        <th>Cikkszám</th>
        <th>Gyártói Cikkszám</th>
        <th>Márka</th>
        <th>Garancia</th>
        <th>Leírás</th>
        <th><img>kép</th>
        <th>Ár</th>
        <tr></table>`);

        this.tablaelem=szuloElem.children("table:last-child")
        this.tbodyElem=this.tablaelem.children("tbody")

        tomb.forEach(elem => 
        {
            new KezdolapView(elem, this.tbodyElem);    
        });
    }
}

export default KezdoLapokView;
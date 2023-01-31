class AdminRendTetelV{
    constructor(obj,szuloElem){
        $(szuloElem).append(`<tr><td>${obj.rendeles_szam}</td><td>${obj.termek_id}</td><td>${obj.mennyiseg}</td><td>${obj.netto_ar}</td><td>${obj.ar}</td><td><button id=${obj.termek_id}>Megjelenít</button></td></tr>`);
    }
}
export default AdminRendTetelV
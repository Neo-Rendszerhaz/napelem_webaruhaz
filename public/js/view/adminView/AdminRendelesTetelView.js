class AdminRendTetelV{
    constructor(obj,szuloElem){
        $(szuloElem).append(`<tr><td>${obj.rendeles_szam}</td><td>${obj.megnevezes}</td><td>${obj.mennyiseg}</td><td>${(obj.ar/obj.mennyiseg).toFixed()}</td><td>${parseInt(obj.ar)}</td><td><button id=${obj.termek_id}>Megjelenít</button></td></tr>`);
    }
}
export default AdminRendTetelV
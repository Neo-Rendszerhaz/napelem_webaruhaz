class AdminRendelesView {
  constructor(obj, szuloElem) {
    $(szuloElem).append(`
        <tr>
        <td>${obj.rendeles_szam}</td>
        <td>${obj.datum}</td>
        <td>${obj.vezeteknev} ${obj.keresztnev}</td>
        <td>${obj.szallitasi_cim}</td>
        <td>${obj.vegosszeg}</td>
        <td>${obj.kedvezmeny}</td>
        <td>${obj.kedvezmenyes_ar}</td>
        <td>${obj.allapot}</td>
        <td><button id=${obj.rendeles_szam}MegJ>Megjelenítés</button></td>
        <td><button id=${obj.rendeles_szam}Mod>Modosítás</button></td>
        </tr>`)
  }
}
export default AdminRendelesView

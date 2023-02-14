class AdminRendTetelV{
    #obj
    constructor(obj,szuloElem){
        this.#obj = obj
        $(szuloElem).append(`<tr id='${this.#obj.rendeles_szam}${this.#obj.termek_id}'>
        <td>${this.#obj.rendeles_szam}</td>
        <td>${this.#obj.megnevezes}</td>
        <td>${this.#obj.mennyiseg}</td>
        <td>${(this.#obj.ar/this.#obj.mennyiseg).toFixed()}</td>
        <td>${parseInt(this.#obj.ar)}</td>
        <td><button id=MegJel${this.#obj.rendeles_szam}${this.#obj.termek_id}>Megjelenít</button></td>
        </tr>`);
        this.aktiv=false
        $(`#MegJel${this.#obj.rendeles_szam}${this.#obj.termek_id}`).on("click",()=>{
            if(!this.aktiv)
            {
                $(`#${this.#obj.rendeles_szam}${this.#obj.termek_id}`).after(`<tr id='${this.#obj.rendeles_szam}${this.#obj.termek_id}reszletes'>
                <th>Cikkszám</th>
                <th>Gyártói cikkszám</th>
                <th>Márka</th>
                <th>Garancia</th>
                <th>Leíras</th>
                </tr>
                <tr id='${this.#obj.rendeles_szam}${this.#obj.termek_id}termek'>
                <td>${this.#obj.cikkszam}</td>
                <td>${this.#obj.gyartoi_cikkszam}</td>
                <td>${this.#obj.marka}</td>
                <td>${this.#obj.garancia}</td>
                <td>${this.#obj.leiras}</td>
                </tr>`)

                this.aktiv=true
                console.log("tuntent")
            }
            else{
                $(`#${this.#obj.rendeles_szam}${this.#obj.termek_id}reszletes`).remove()
                $(`#${this.#obj.rendeles_szam}${this.#obj.termek_id}termek`).remove()
                this.aktiv=false
            }
        })
    }
}
export default AdminRendTetelV
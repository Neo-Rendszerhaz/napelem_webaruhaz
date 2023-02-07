class AdminRendTetelV{
    constructor(obj,szuloElem){
        $(szuloElem).append(`<tr id='${obj.rendeles_szam}${obj.termek_id}'>
        <td>${obj.rendeles_szam}</td>
        <td>${obj.megnevezes}</td>
        <td>${obj.mennyiseg}</td>
        <td>${(obj.ar/obj.mennyiseg).toFixed()}</td>
        <td>${parseInt(obj.ar)}</td>
        <td><button id=MegJel${obj.termek_id}>Megjelenít</button></td>
        </tr>`);
        //this.gombMegJel=$(`#${obj.termek_id}Megjelenít`)
        this.aktiv=false
        $(`#MegJel${obj.termek_id}`).on("click",()=>{
            if(!this.aktiv)
            {
                $(`#${obj.rendeles_szam}${obj.termek_id}`).after(`<tr id='${obj.rendeles_szam}${obj.termek_id}reszletes'>
                <th>Cikkszám</th>
                <th>Gyártói cikkszám</th>
                <th>Márka</th>
                <th>Garancia</th>
                <th>Leíras</th>
                </tr>
                <tr id='${obj.rendeles_szam}${obj.termek_id}termek'>
                <td>${obj.cikkszam}</td>
                <td>${obj.gyartoi_cikkszam}</td>
                <td>${obj.marka}</td>
                <td>${obj.garancia}</td>
                <td>${obj.leiras}</td>
                </tr>`)

                this.aktiv=true
                console.log("tuntent")
            }
            else{
                $(`#${obj.rendeles_szam}${obj.termek_id}reszletes`).remove()
                $(`#${obj.rendeles_szam}${obj.termek_id}termek`).remove()
                this.aktiv=false
            }
        })
    }
}
export default AdminRendTetelV
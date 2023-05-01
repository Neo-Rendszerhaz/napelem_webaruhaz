class AdminRendTetelV{
    #obj
    constructor(obj,szuloElem){
        this.#obj = obj
        console.log(this.#obj)
        this.gombAllapotAktiv = true;
        $(szuloElem).append(`<tr id='${this.#obj.rendeles_szam}${this.#obj.termek_id}'>
        <td>${this.#obj.rendeles_szam}</td>
        <td>${this.#obj.megnevezes}</td>
        <td>${this.#obj.mennyiseg}</td>
        <td>${(this.#obj.ar/this.#obj.mennyiseg).toFixed()} Ft</td>
        <td>${parseInt(this.#obj.ar)} Ft</td>
        <td><button id=MegJel${this.#obj.rendeles_szam}${this.#obj.termek_id}>Megjelenít</button></td>
        <td><button id=RTtor${this.#obj.rendeles_szam}${this.#obj.termek_id}>Törlés</button></td>
        </tr>`);
        
            this.modal = $(".overlay");
            this.spanElem = $("#bezar");
        
        $(`#MegJel${this.#obj.rendeles_szam}${this.#obj.termek_id}`).on("click",()=>{
                this.rendelesTetelReszMut()
        })
        $(`#RTtor${this.#obj.rendeles_szam}${this.#obj.termek_id}`).on("click",()=>{
            this.sajatEsemeny("RTtorles")
        })
    
    }
    rendelesTetelReszMut(){
        if(this.gombAllapotAktiv){
            $(`#${this.#obj.rendeles_szam}${this.#obj.termek_id}`).after(`
            <tr id="rtFejlec${this.#obj.rendeles_szam}${this.#obj.termek_id}">
            <th>Cikkszám</th>
            <th>Gyártói cikkszám</th>
            <th>Márka</th>
            <th>Garancia</th>
            <th>Leíras</th>
            </tr>
            <tr id="rt${this.#obj.rendeles_szam}${this.#obj.termek_id}">
                <td>${this.#obj.cikkszam}</td>
                <td>${this.#obj.gyartoi_cikkszam}</td>
                <td>${this.#obj.marka}</td>
                <td>${this.#obj.garancia}</td>
                <td>${this.#obj.leiras}</td>
                </tr>`)
                this.gombAllapotAktiv=false
        }
        else{
            $(`#rt${this.#obj.rendeles_szam}${this.#obj.termek_id}`).remove()
            $(`#rtFejlec${this.#obj.rendeles_szam}${this.#obj.termek_id}`).remove()
            this.gombAllapotAktiv = true
        }
        }
    sajatEsemeny(eventNev){
        const esemeny = new CustomEvent(eventNev, {detail: this.#obj})
        window.dispatchEvent(esemeny)
    }
}
export default AdminRendTetelV
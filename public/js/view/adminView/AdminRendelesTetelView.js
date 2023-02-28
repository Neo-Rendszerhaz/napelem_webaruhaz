class AdminRendTetelV{
    #obj
    constructor(obj,szuloElem){
        this.#obj = obj
        $(szuloElem).append(`<tr id='${this.#obj.rendeles_szam}${this.#obj.termek_id}'>
        <td>${this.#obj.rendeles_szam}</td>
        <td>${this.#obj.megnevezes}</td>
        <td>${this.#obj.mennyiseg}</td>
        <td>${(this.#obj.ar/this.#obj.mennyiseg).toFixed()} Ft</td>
        <td>${parseInt(this.#obj.ar)} Ft</td>
        <td><button id=MegJel${this.#obj.rendeles_szam}${this.#obj.termek_id}>Megjelenít</button></td>
        <td><button id=RTtor${this.#obj.rendeles_szam}${this.#obj.termek_id}>Törlés</button></td>
        </tr>`);
        
        $(`#MegJel${this.#obj.rendeles_szam}${this.#obj.termek_id}`).on("click",()=>{
                this.rendelesTetelReszMut()
        })
        $(`#RTtor${this.#obj.rendeles_szam}${this.#obj.termek_id}`).on("click",()=>{
            this.sajatEsemeny("RTtorles")
        })
    
        this.modal = $(".overlay");
        this.spanElem = $(".bezar");
        this.spanElem.on("click",()=>{
            this.rendelesTetelReszEltunt()
        })
    
    }
    rendelesTetelReszMut(){
            $(".tartalom").html(`
            <div class="reszletesTermek"> <h3>Cikkszám</h3> <p>${this.#obj.cikkszam}</p></div>
            <div class="reszletesTermek"> <h3>Gyártói cikkszám</h3> <p>${this.#obj.gyartoi_cikkszam}</p></div>
            <div class="reszletesTermek"> <h3>Márka</h3> <p>${this.#obj.marka}</p></div>
            <div class="reszletesTermek"> <h3>Garancia</h3> <p>${this.#obj.garancia}</p></div>
            <div class="reszletesTermek"> <h3>Leíras</h3> <p>${this.#obj.leiras}</p></div>`)
            this.modal.show();
        }
    rendelesTetelReszEltunt(){
        this.modal.hide();
        }
    sajatEsemeny(eventNev){
        const esemeny = new CustomEvent(eventNev, {detail: this.#obj})
        window.dispatchEvent(esemeny)
    }
}
export default AdminRendTetelV
class AdminRendelesView {
  #obj
  constructor(obj, szuloElem) {
    this.#obj = obj
    $(szuloElem).append(`
        <tr id='${this.#obj.rendeles_szam}rendeles'>
        <td>${this.#obj.rendeles_szam}</td>
        <td>${this.#obj.datum}</td>
        <td>${this.#obj.vezeteknev} ${this.#obj.keresztnev}</td>
        <td>${this.#obj.szallitasi_cim}</td>
        <td>${this.#obj.vegosszeg}</td>
        <td>${this.#obj.kedvezmeny}</td>
        <td>${this.#obj.kedvezmenyes_ar}</td>
        <td id="${this.#obj.rendeles_szam}allapot">${this.#obj.allapot}</td>
        <td><button id=${this.#obj.rendeles_szam}MegJ>Megjelenítés</button></td>
        <td id="${this.#obj.rendeles_szam}modositasHely"><button id=${this.#obj.rendeles_szam}Mod>Módosítás</button></td>
        <td><button id=${this.#obj.rendeles_szam}Tor>Törlés</button></td>
        </tr>`)

    this.aktiv = false
    $(`#${this.#obj.rendeles_szam}MegJ`).on('click', () => {
      if (!this.aktiv) {
        this.rendelesReszletesMegjel()
        this.aktiv = true
      } else {
        this.rendelesReszletesMegjelEltunt()
        this.aktiv = false
      }
    })
    this.rendelesAllapotMod()
    this.rendelesTor()
  }
  sajatEvent(eventNev) {
    const esemeny = new CustomEvent(eventNev, {detail: this.#obj})
    window.dispatchEvent(esemeny)
  }

  allapotok(){
    this.szoveg = `<select name="allapotok" id="allapotok${this.#obj.rendeles_szam}">`;
    if(this.#obj.allapot ==="FL"){
      this.szoveg +=`   
        <option value="FL">FL</option>
        <option value="FA">FA</option>`   
    }
    else if(this.#obj.allapot ==="FA"){
      this.szoveg +=`
        <option value="FA">FA</option>
        <option value="FL">FL</option>
        <option value="RL">RL</option>`
    }
    else if(this.#obj.allapot ==="RL"){
      this.szoveg +=`
        <option value="RL">RL</option>
        <option value="FA">FA</option>
        <option value="KA">KA</option>`
    }
    else if(this.#obj.allapot ==="KA"){
      this.szoveg +=`
        <option value="KA">KA</option>
        <option value="RL">RL</option>
        <option value="T">T</option>`
    }
    else if(this.#obj.allapot ==="T"){
      this.szoveg +=`
        <option value="T"></option>
        <option value="KA"></option>`
      }
      this.szoveg+="</select>"
    return this.szoveg
  }
  rendelesReszletesMegjel(){
    $(`#${this.#obj.rendeles_szam}rendeles`).after(`<tr id='${
      this.#obj.rendeles_szam
    }rendelesFejlec'>
            <th>Iranyítószám</th>
            <th>Város</th>
            <th>Közterület neve</th>
            <th>Hely/Házszám</th>
            <th>Hely/Ház jelleg</th>
            <th>Épület</th>
            <th>Emelet</th>
            <th>Ajtó</th>
            <th>Kapucsengő</th>
            </tr>
            <tr id='${this.#obj.iranyitoszam}reszletesRendeles'>
            <td>${this.#obj.varos}</td>
            <td>${this.#obj.kozterulet_neve}</td>
            <td>${this.#obj.hely_hazszam}</td>
            <td>${this.#obj.hely_haz_jelleg}</td>
            <td>${this.#obj.epulet}</td>
            <td>${this.#obj.emelet}</td>
            <td>${this.#obj.ajto}</td>
            <td>${this.#obj.kapucsengo}</td>
            </tr>`)
  }
  rendelesReszletesMegjelEltunt(){
    $(`#${this.#obj.rendeles_szam}rendelesFejlec`).remove()
        $(`#${this.#obj.iranyitoszam}reszletesRendeles`).remove()
  }
  rendelesAllapotMod(){
    $(`#${this.#obj.rendeles_szam}Mod`).on('click', () => {
      $(`#${this.#obj.rendeles_szam}rendeles>#${this.#obj.rendeles_szam}allapot`).html(this.allapotok())
      this.modositasGomb = $(`#${this.#obj.rendeles_szam}modositasHely`).html();
      $(`#${this.#obj.rendeles_szam}modositasHely>#${this.#obj.rendeles_szam}Mod`).hide()
      $(`#${this.#obj.rendeles_szam}modositasHely`).append(`<button id=${this.#obj.rendeles_szam}Ment>Mentés</button>`)
      $(`#${this.#obj.rendeles_szam}Ment`).on('click',()=>{
        $(`#${this.#obj.rendeles_szam}modositasHely>#${this.#obj.rendeles_szam}Mod`).show();
        $(`#${this.#obj.rendeles_szam}modositasHely>#${this.#obj.rendeles_szam}Ment`).remove();
        this.e = document.getElementById(`allapotok${this.#obj.rendeles_szam}`).value; 
        this.#obj.allapot = this.e;
        $(`#${this.#obj.rendeles_szam}allapot`).html(this.e)
        this.sajatEvent("rendAllapotMod")
      })
    })
  }
  rendelesTor(){
    $(`#${this.#obj.rendeles_szam}Tor`).on("click",()=>{
      this.sajatEvent("rendelesTorles")
    })
  }
}
export default AdminRendelesView

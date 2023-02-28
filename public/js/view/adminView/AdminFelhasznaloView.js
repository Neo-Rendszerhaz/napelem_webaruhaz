class AdminFelhasznaloView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        $(szuloElem).append(`<tr id="felhasznalo${elem.felhasznalo_id}">
        <td>${elem.vezeteknev+" "+elem.keresztnev}</td>
        <td>${elem.email}</td>
        <td>+36${elem.telefonszam}</td>
        <td><button id="megjelenit${elem.felhasznalo_id}">Címek</button></td>
        <td>${elem.cegnev}</td>
        <td>${elem.adoszam}</td>
        <td>${elem.jelleg}</td>
        <td>${elem.jogosultsag}</td>
        </tr>`)
        
        this.cimMegjelenit=$(`#megjelenit${elem.felhasznalo_id}`);

        this.cimMegjelenit.on("click", ()=>
        {
            this.kattintasTrigger("megjelenit");
            $(".overlay").css({"display": "block", "opacity": 1, "visibility": "visible", "z-index": 10, "background": "rgba(0, 0, 0, 0.7)"})
        });

        this.bezar=$("#bezar");
        this.bezar.on("click", ()=>
        {
            console.log("bezár");
            $(".overlay").css({"display": "none","opacity": 0, "z-index": -10})
        });
    }

    kattintasTrigger(esemenyNeve)
    {
        console.log("triggerben", esemenyNeve);
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#elem.felhasznalo_id});
        window.dispatchEvent(esemeny);
    }
}
export default AdminFelhasznaloView
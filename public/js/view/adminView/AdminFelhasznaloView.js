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

        // this.divElem=$(`#adatTarolo`).children("div:last-child")
        // this.ujdivElem=this.divElem.after(`<div id="ujDiv"></div>`)


        // this.tableElem=$("#cimekTarolo").children("table:last-child")
        // this.tbodyElem=this.tableElem.children("tbody");
        this.valami=$("#cimekTarolo>table")

        this.aktiv=false;
        this.cimMegjelenit.on("click", ()=>
        {
            if(!this.aktiv)
            {
                console.log(this.cimMegjelenit);
                this.kattintasTrigger("megjelenit");
                this.aktiv=true;
                console.log(this.aktiv);

            }
            else
            {
                $("#cimekTarolo").html(`<div id="cimekTarolo"></div>`);
                this.aktiv=false;
                console.log(this.aktiv);
            }
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
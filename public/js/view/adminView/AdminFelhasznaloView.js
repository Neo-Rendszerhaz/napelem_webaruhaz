class AdminFelhasznaloView {
    #elem
    constructor(elem, szuloElem) {
        this.#elem = elem;
        $(szuloElem).append(`<tr id="felhasznalo${elem.felhasznalo_id}">
        <td>${elem.vezeteknev + " " + elem.keresztnev}</td>
        <td>${elem.email}</td>
        <td>+36${elem.telefonszam}</td>
        <td><button id="megjelenit${elem.felhasznalo_id}">Címek</button></td>
        <td>${elem.cegnev}</td>
        <td>${elem.adoszam}</td>
        <td>${elem.jelleg}</td>
        <td>${elem.jogosultsag}</td>
        </tr>`)

        this.cimMegjelenit = $(`#megjelenit${elem.felhasznalo_id}`);

        this.cimMegjelenit.on("click", () => {
            this.kattintasTrigger("megjelenit");
            $(".overlay").show();
        });

        this.bezar = $("#bezar");
        this.bezar.on("click", () => {
            $(".overlay").hide();
        });
    }

    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.#elem.felhasznalo_id });
        window.dispatchEvent(esemeny);
    }
}
export default AdminFelhasznaloView
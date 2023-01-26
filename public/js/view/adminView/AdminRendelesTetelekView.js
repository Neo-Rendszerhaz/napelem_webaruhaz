import AdminRendTetelV from "./AdminRendelesTetelView.js";

class AdminRendTetelekV{
    constructor(tomb,szuloElem){
        $(szuloElem).html("<table></table>")
        tomb.forEach(termek => {
            new AdminRendTetelV(termek,szuloElem);
        });
    }
}
export default AdminRendTetelekV
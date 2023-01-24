import AdminRendTetelV from "./AdminRendelesTetelView";

class AdminRendTetelekV{
    constructor(tomb,szuloElem){
        $(szuloElem).html("<table></table>")
        tomb.forEach(termek => {
            new AdminRendTetelV(termek,szuloElem);
        });
    }
}
export default AdminRendTetelekV
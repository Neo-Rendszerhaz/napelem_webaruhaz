import KosarakView from "../../view/publikusView/KosarakView.js";

class KosarController 
{
    constructor() 
    {        
        this.kosar=[];

        let jsonObjektum = JSON.parse(localStorage.getItem("kosar"));
        for (let i = 0; i < jsonObjektum.length; i++) 
        {
            this.kosar.push(jsonObjektum[i]);    
        }

        this.kosarAdatok(this.kosar)
    }

    kosarAdatok(tomb)
    {
        const szuloelem = $("article");
        new KosarakView(tomb, szuloelem);
    }

}
export default KosarController;
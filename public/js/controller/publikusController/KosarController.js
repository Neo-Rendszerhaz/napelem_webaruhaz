import AdatFeldolgozModel from "../../model/AdatFeldolgozModel.js";
import KosarakView from "../../view/publikusView/KosarakView.js";

class KosarController 
{
    constructor() 
    {
        this.aktFelhasznalo;
        this.kosar = [];
        this.termekMent = [];
        this.modositottKosar=[]

        let jsonObjektum = JSON.parse(localStorage.getItem("kosar"));
        console.log(jsonObjektum);
        if(jsonObjektum==null)
        {
            this.kosar=[];
        }
        else
        {
            this.kosarbaTesz(jsonObjektum)
        }

        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatFeldolgozModel = new AdatFeldolgozModel(token);

        adatFeldolgozModel.adatBe("/akt_felhasznalo", (id) => 
        {
            this.aktualisFelhasznalo(id)
        });

        $(window).on("rendelesVeglegesites", (event) => 
        {
            adatFeldolgozModel.adatModosit("/cim_modositas", { cim: event.detail },this.aktFelhasznalo);

            adatFeldolgozModel.adatUj("/rendeles_tetelek", {"termekek":event.detail, "cim":event.detail, "vegosszeg":event.detail});
            location.reload();
        });

        $(window).on("toroltTermek", (event)=>
        {
            for (let i = 0; i < jsonObjektum.length; i++) 
            {
                if(jsonObjektum[i].id===event.detail.id)
                {
                    var eltavolit = jsonObjektum[i];
                    jsonObjektum.splice(eltavolit, 1);
                    localStorage.setItem("kosar", JSON.stringify(jsonObjektum));
                }
            }
            this.kosarAdatok(jsonObjektum);
        });

        $(window).on("termekUjOldal", (event) => 
        {
            this.ujOldal(event.detail);
            window.location.href = "/termek";
        });

        $(window).on("dbNoveles", (event)=>
        {
            console.log(event.detail.db);
            let db=event.detail.db;
            db++
            console.log(db);
            event.detail.db=db;

            for (let i = 0; i < jsonObjektum.length; i++) 
            {
                console.log(jsonObjektum[i]);
                if(jsonObjektum[i].id===event.detail.id)
                {
                    console.log(jsonObjektum[i].db);
                    localStorage.setItem("kosar", JSON.stringify(jsonObjektum));
                }    
            }
            this.kosarAdatok(jsonObjektum);
        });

        $(window).on("dbCsokkenes", (event)=>
        {
            console.log(event.detail.db);
            let db=event.detail.db;
            if(db<=1)
            {
                db=1;
            }
            else
            {
                db--;
                event.detail.db=db;
            }

            for (let i = 0; i < jsonObjektum.length; i++) 
            {
                console.log(jsonObjektum[i]);
                if(jsonObjektum[i].id===event.detail.id)
                {
                    console.log(jsonObjektum[i].db);
                    localStorage.setItem("kosar", JSON.stringify(jsonObjektum));
                }    
            }
            this.kosarAdatok(jsonObjektum);
        });

    }

    dbModositas()
    {
        for (let i = 0; i < jsonObjektum.length; i++) 
        {
            console.log(jsonObjektum[i]);
            if(jsonObjektum[i].id===event.detail.id)
            {
                console.log(jsonObjektum[i].db);
                localStorage.setItem("kosar", JSON.stringify(jsonObjektum));
            }    
        }
        this.kosarAdatok(jsonObjektum);
    }

    kosarAdatok(tomb)
    {
        const szuloelem = $("article");
        new KosarakView(tomb, szuloelem);
    }

    ujOldal(tomb) 
    {
        let jsonString = JSON.stringify(tomb);
        window.localStorage.setItem("termek", jsonString);
    }

    aktualisFelhasznalo(felhasznalo) 
    {
        this.aktFelhasznalo=felhasznalo.felhasznalo_id;
    }

    kosarbaTesz(jsonObjektum)
    {
        for (let i = 0; i < jsonObjektum.length; i++) 
        {
            this.kosar.push(jsonObjektum[i]);
        }
        this.kosarAdatok(this.kosar);
    }
}
export default KosarController;

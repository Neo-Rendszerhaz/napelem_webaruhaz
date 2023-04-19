class FooterKinezet
{
    constructor()
    {
        $("footer").html(`
        <div>
            <p>Rendelés és szállítás</p>
            <p>Ügyfélszolgálat</p>
            <p>Szolgáltatások</p>
        </div>
        <div class="logok">
            <i class="fa fa-facebook-square"></i>
            <i class="fa fa-youtube-play"></i>
            <i class="fa fa-instagram"></i>
        </div>
        <div class="vonal"></div>
        <div>
            <p>Adatkezelési tájékoztató</p>
            <p>Általános Szerződési Feltételek (ÁSZF)</p>
            <p>Elállási nyilatkozat</p>
        </div>
        <div class="xuftware">
            <p>&copy XUFTWARE</p>
        </div>`)
    }
}
export default FooterKinezet;
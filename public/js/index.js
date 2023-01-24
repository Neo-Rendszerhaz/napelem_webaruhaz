import AdminRendTetelC from "./controller/adminController/AdminRendelesTetelController.js";
import FelhasznaloProfilController from "./controller/felhasznaloController/FelhasznaloProfilController.js";

$(function()
{
    console.log("index.js");
    new FelhasznaloProfilController();
    new AdminRendTetelC();
});
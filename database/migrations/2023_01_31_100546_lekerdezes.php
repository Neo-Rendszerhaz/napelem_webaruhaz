<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("drop view if exists felhasznaloAdatok");
        DB::statement("create view felhasznaloAdatok as SELECT ifnull(cim_id, ''), ifnull(iranyitoszam, ''), ifnull(varos, ''), ifnull(kozterulet_neve, ''), ifnull(kozterulet_jellege, ''), ifnull(hely_hazszam, ''), ifnull(epulet, ''), ifnull(emelet, ''), ifnull(ajto, ''), ifnull(kapucsengo, ''), concat_ws(' ', iranyitoszam, varos, kozterulet_neve, kozterulet_jellege, hely_hazszam, epulet, emelet, ajto, kapucsengo) as cim, felhasznalo_id, keresztnev, vezeteknev, email, telefonszam, 'szl' as cimtipus FROM cim c right join felhasznalo f on f.szamlazasi_cim = c.cim_id
        union
        SELECT ifnull(cim_id, ''), ifnull(iranyitoszam, ''), ifnull(varos, ''), ifnull(kozterulet_neve, ''), ifnull(kozterulet_jellege, ''), ifnull(hely_hazszam, ''), ifnull(epulet, ''), ifnull(emelet, ''), ifnull(ajto, ''), ifnull(kapucsengo, ''), concat_ws(' ', iranyitoszam, varos, kozterulet_neve, kozterulet_jellege, hely_hazszam, epulet, emelet, ajto, kapucsengo) as cim, felhasznalo_id, keresztnev, vezeteknev, email, telefonszam, 'szc1' FROM cim c right join felhasznalo f on f.szallitasi_cim_1 = c.cim_id
        union
        SELECT ifnull(cim_id, ''), ifnull(iranyitoszam, ''), ifnull(varos, ''), ifnull(kozterulet_neve, ''), ifnull(kozterulet_jellege, ''), ifnull(hely_hazszam, ''), ifnull(epulet, ''), ifnull(emelet, ''), ifnull(ajto, ''), ifnull(kapucsengo, ''), concat_ws(' ', iranyitoszam, varos, kozterulet_neve, kozterulet_jellege, hely_hazszam, epulet, emelet, ajto, kapucsengo) as cim, felhasznalo_id, keresztnev, vezeteknev, email, telefonszam, 'szc2' FROM cim c right join felhasznalo f on f.szallitasi_cim_2 = c.cim_id
        union
        SELECT ifnull(cim_id, ''), ifnull(iranyitoszam, ''), ifnull(varos, ''), ifnull(kozterulet_neve, ''), ifnull(kozterulet_jellege, ''), ifnull(hely_hazszam, ''), ifnull(epulet, ''), ifnull(emelet, ''), ifnull(ajto, ''), ifnull(kapucsengo, ''), concat_ws(' ', iranyitoszam, varos, kozterulet_neve, kozterulet_jellege, hely_hazszam, epulet, emelet, ajto, kapucsengo) as cim, felhasznalo_id, keresztnev, vezeteknev, email, telefonszam, 'szc3' FROM cim c right join felhasznalo f on f.szallitasi_cim_3 = c.cim_id;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("drop view if exists felhasznaloAdatok");
    }
};

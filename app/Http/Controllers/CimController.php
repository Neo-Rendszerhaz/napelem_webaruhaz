<?php

namespace App\Http\Controllers;

use App\Models\Cim;
use Illuminate\Http\Request;

class CimController extends Controller
{
    public function index()
    {
        $cimek=Cim::all();
        return $cimek;
    }

    public function show($cim_id)
    {
        $cim=Cim::find($cim_id);
        return $cim;
    }

    public static function store(Request $request)
    {
        $object = json_decode(json_encode($request->cim), FALSE);
        
        $cim = new Cim();
        $cim->iranyitoszam = $object->cim->iranyitoszam;
        $cim->varos = $object->cim->varos;
        $cim->kozterulet_neve = $object->cim->kozterulet_neve;
        $cim->kozterulet_jellege = $object->cim->kozterulet_jellege;
        $cim->hely_hazszam = $object->cim->hely_hazszam;
        $cim->hely_haz_jelleg = $object->cim->hely_haz_jelleg;
        $cim->epulet = $object->cim->epulet;
        $cim->emelet = $object->cim->emelet;
        $cim->ajto = $object->cim->ajto;
        $cim->kapucsengo = $object->cim->kapucsengo;
        $cim->save();

        return $cim->cim_id;
    }

    public static function szamlazasiCim(Request $request)
    {
        $szamlazasiCim = json_decode(json_encode($request->cim), FALSE);
        
        $cim = new Cim();
        $cim->iranyitoszam = $szamlazasiCim->cim->szamlazasiCimAdatok->iranyitoszam;
        $cim->varos = $szamlazasiCim->cim->szamlazasiCimAdatok->varos;
        $cim->kozterulet_neve = $szamlazasiCim->cim->szamlazasiCimAdatok->kozterulet_neve;
        $cim->kozterulet_jellege = $szamlazasiCim->cim->szamlazasiCimAdatok->kozterulet_jellege;
        $cim->hely_hazszam = $szamlazasiCim->cim->szamlazasiCimAdatok->hely_hazszam;
        $cim->hely_haz_jelleg = $szamlazasiCim->cim->szamlazasiCimAdatok->hely_haz_jelleg;
        $cim->epulet = $szamlazasiCim->cim->szamlazasiCimAdatok->epulet;
        $cim->emelet = $szamlazasiCim->cim->szamlazasiCimAdatok->emelet;
        $cim->ajto = $szamlazasiCim->cim->szamlazasiCimAdatok->ajto;
        $cim->kapucsengo = $szamlazasiCim->cim->szamlazasiCimAdatok->kapucsengo;
        $cim->save();

        return $cim->cim_id;
    }

    public static function szallitasiCim(Request $request)
    {
        $szallitasiCim = json_decode(json_encode($request->cim), FALSE);
        
        $cim = new Cim();
        $cim->iranyitoszam = $szallitasiCim->cim->szallitasiCimAdatok->iranyitoszam;
        $cim->varos = $szallitasiCim->cim->szallitasiCimAdatok->varos;
        $cim->kozterulet_neve = $szallitasiCim->cim->szallitasiCimAdatok->kozterulet_neve;
        $cim->kozterulet_jellege = $szallitasiCim->cim->szallitasiCimAdatok->kozterulet_jellege;
        $cim->hely_hazszam = $szallitasiCim->cim->szallitasiCimAdatok->hely_hazszam;
        $cim->hely_haz_jelleg = $szallitasiCim->cim->szallitasiCimAdatok->hely_haz_jelleg;
        $cim->epulet = $szallitasiCim->cim->szallitasiCimAdatok->epulet;
        $cim->emelet = $szallitasiCim->cim->szallitasiCimAdatok->emelet;
        $cim->ajto = $szallitasiCim->cim->szallitasiCimAdatok->ajto;
        $cim->kapucsengo = $szallitasiCim->cim->szamlazasiCimAdatok->kapucsengo;
        $cim->save();

        return $cim->cim_id;
    }

    public function update(Request $request, $id)
    {
        $cim= Cim::find($id);
        $cim->iranyitoszam = $request->iranyitoszam;
        $cim->varos = $request->varos;
        $cim->kozterulet_neve = $request->kozterulet_neve;
        $cim->kozterulet_jellege = $request->kozterulet_jellege;
        $cim->hely_hazszam = $request->hely_hazszam;
        $cim->hely_haz_jelleg = $request->hely_haz_jelleg;
        $cim->epulet = $request->epulet;
        $cim->emelet = $request->emelet;
        $cim->ajto = $request->ajto;
        $cim->kapucsengo = $request->kapucsengo;
        $cim->save();
    }

    public function destroy($id)
    {
        Cim::find($id)->delete();
    }
}
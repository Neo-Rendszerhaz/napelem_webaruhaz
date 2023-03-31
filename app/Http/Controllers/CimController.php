<?php

namespace App\Http\Controllers;

use App\Models\Cim;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\DB;

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
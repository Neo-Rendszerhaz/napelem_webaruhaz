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

    public function store(Request $request)
    {
        $cim= new Cim();
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

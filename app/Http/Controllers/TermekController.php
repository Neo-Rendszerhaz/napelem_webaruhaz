<?php

namespace App\Http\Controllers;

use App\Models\Termek;
use Illuminate\Http\Request;

class TermekController extends Controller
{
    public function index()
    {
        $termekek=Termek::all();
        return $termekek;
    }

    public function show($termek_id)
    {
        $termek=Termek::find($termek_id);
        return $termek;
    }

    public function store(Request $request)
    {
        $object = json_decode(json_encode($request->termekek), FALSE);
        // dd($request->termekek[0]["megnevezes"]);
        dd($object->termekek[0]->megnevezes);

        
        // $termek= new Termek();
        // $termek->megnevezes = $object->termekek->megnevezes;
        // $termek->cikkszam = $object->termekek->cikkszam;
        // $termek->gyartoi_cikkszam = $object->termekek->gyartoi_cikkszam;
        // $termek->marka = $object->termekek->marka;
        // $termek->garancia = $object->termekek->garancia;
        // $termek->leiras = $object->termekek->leiras;
        // $termek->save();
    }

    public function update(Request $request, $termek_id)
    {
        $termek= Termek::find($termek_id);
        $termek->megnevezes = $request->megnevezes;
        $termek->cikkszam = $request->cikkszam;
        $termek->gyartoi_cikkszam = $request->gyartoi_cikkszam;
        $termek->marka = $request->marka;
        $termek->garancia = $request->garancia;
        $termek->leiras = $request->leiras;
        $termek->save();
    }

    public function destroy($termek_id)
    {
        Termek::find($termek_id)->delete();
    }
}

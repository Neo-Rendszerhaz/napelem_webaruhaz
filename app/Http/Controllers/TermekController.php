<?php

namespace App\Http\Controllers;

use App\Models\Termek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public static function store(Request $request)
    {
        $object = json_decode(json_encode($request->termekek), FALSE);
        $termekekTomb=[];
        for ($i=0; $i < count($object->termekek); $i++) 
        {
            if(TermekController::vanTermek($object->termekek[$i])>0)
            {
                $termek=TermekController::CikkszamHasonlitas($object->termekek[$i]);
            }
            else
            {
                $termek= new Termek();
                $termek->megnevezes = $object->termekek[$i]->megnevezes;
                $termek->cikkszam = $object->termekek[$i]->cikkszam;
                $termek->gyartoi_cikkszam = $object->termekek[$i]->gyartoi_cikkszam;
                $termek->marka = $object->termekek[$i]->marka;
                $termek->garancia = $object->termekek[$i]->garancia;
                $termek->save();
            }
            array_push($termekekTomb, $termek);
        }

        return $termekekTomb;
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

    public static function vanTermek($termek)
    {
        $vanTermek=DB::table("termek as t")
        ->where("t.cikkszam", "=", $termek->cikkszam)
        ->count();
        return $vanTermek;
    }

    public static function CikkszamHasonlitas($termek)
    {
        $termekCikkszam=DB::table("termek")
        ->select("*")
        ->where("cikkszam", "=", $termek->cikkszam)
        ->get();
        return $termekCikkszam[0];
    }
}
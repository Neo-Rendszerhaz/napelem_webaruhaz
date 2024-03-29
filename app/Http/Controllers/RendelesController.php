<?php

namespace App\Http\Controllers;

use App\Models\Rendeles;
use App\Models\RendelesTetel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RendelesController extends Controller
{
    public function index()
    {
        $rendelesek=Rendeles::all();
        return $rendelesek;
    }

    public function show($rendeles_szam)
    {
        $rendeles=Rendeles::find($rendeles_szam);
        return $rendeles;
    }

    public static function store(Request $request)
    {
        $object = json_decode(json_encode($request->vegosszeg), FALSE);
        $szCim = json_decode(json_encode($request->cim), FALSE);
        $vegosszeg=$object->vegosszeg;
        
        $szallitasi_cim=CimController::szallitasiCim($request);
        $rendeles= new Rendeles();
        $rendeles->datum = Carbon::now()->format('Y-m-d');
        $rendeles->felhasznalo_id = Auth::user()->felhasznalo_id;
        $rendeles->szallitasi_cim = $szallitasi_cim;
        $rendeles->teljes_ar = $vegosszeg;
        $rendeles->kedvezmeny = 0;
        $rendeles->allapot = "FL";
        $rendeles->save();

        return $rendeles;
    }

    public function update(Request $request, $rendeles_szam)
    {
        $rendeles= Rendeles::find($rendeles_szam);
        $rendeles->datum = $request->datum;
        $rendeles->felhasznalo_id = $request->felhasznalo_id;
        $rendeles->szallitasi_cim = $request->szallitasi_cim;
        $rendeles->teljes_ar = $request->teljes_ar;
        $rendeles->kedvezmeny = $request->kedvezmeny;
        $rendeles->vegosszeg = $request->vegosszeg;
        $rendeles->allapot = $request->allapot;
        $rendeles->save();
        return $rendeles;
    }

    public function destroy($rendeles_szam)
    {
        Rendeles::find($rendeles_szam)->delete();
    }
    public function rendelesTorlesTetellel($rendeles_szam)
    {
        RendelesTetel::where('rendeles_szam','=',$rendeles_szam)->delete();
    }

    public function CimEsFelhasznalo(){
        $rendeles=DB::table('rendeles')
        ->select('*')
        ->join('felhasznalo as f','f.felhasznalo_id','=','rendeles.felhasznalo_id')
        ->join('cim as c','c.cim_id','=','rendeles.szallitasi_cim')
        ->get();
        return $rendeles;
    }
}

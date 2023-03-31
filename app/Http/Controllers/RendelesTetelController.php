<?php

namespace App\Http\Controllers;

use App\Models\Rendeles;
use App\Models\RendelesTetel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RendelesTetelController extends Controller
{
    public function index()
    {
        $rendelesTetelek=RendelesTetel::all();
        return $rendelesTetelek;
    }

    public function show($rendeles_szam, $termek_id)
    {
        $rendelesTetel = RendelesTetel::where('rendeles_szam', $rendeles_szam)->where('termek_id', $termek_id)->get();
        return $rendelesTetel[0];
    }

    public function store(Request $request)
    {
        $object = json_decode(json_encode($request->termekek), FALSE);

        $rendeles=RendelesController::store($request);
        $termek=TermekController::store($request);

        for ($i=0; $i < count($termek); $i++) 
        { 
            $rendelesTetel= new RendelesTetel();
            $rendelesTetel->rendeles_szam = $rendeles->rendeles_szam;
            $rendelesTetel->termek_id = $termek[$i]->termek_id;
            $rendelesTetel->mennyiseg = $object->termekek[$i]->db;
            $rendelesTetel->ar = $object->termekek[$i]->ar;
            $rendelesTetel->save();
        }
    }

    public function update(Request $request, $rendeles_szam, $termek_id)
    {
        $rendelesTetel= RendelesTetelController::show($rendeles_szam, $termek_id);
        $rendelesTetel->termek_id = $request->termek_id;
        $rendelesTetel->mennyiseg = $request->mennyiseg;
        $rendelesTetel->ar = $request->ar;
        $rendelesTetel->save();
    }
    public function termekekkel(){
        $rendelesTetelek=DB::table('rendeles_tetel')
        ->select('*')
        ->join('termek as t','t.termek_id','=','rendeles_tetel.termek_id')
        ->get();
        return $rendelesTetelek;
    }

    public function destroy($rendeles_szam, $termek_id)
    {
        RendelesTetelController::show($rendeles_szam, $termek_id)->delete();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\RendelesTetel;
use Illuminate\Http\Request;

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
        $rendelesTetel= new RendelesTetel();
        $rendelesTetel->termek_id = $request->termek_id;
        $rendelesTetel->mennyiseg = $request->mennyiseg;
        $rendelesTetel->netto_ar = $request->netto_ar;
        $rendelesTetel->ar = $request->ar;
        $rendelesTetel->save();
    }

    public function update(Request $request, $rendeles_szam, $termek_id)
    {
        $rendelesTetel= RendelesTetelController::show($rendeles_szam, $termek_id);
        $rendelesTetel->termek_id = $request->termek_id;
        $rendelesTetel->mennyiseg = $request->mennyiseg;
        $rendelesTetel->netto_ar = $request->netto_ar;
        $rendelesTetel->ar = $request->ar;
        $rendelesTetel->save();
    }

    public function destroy($rendeles_szam, $termek_id)
    {
        RendelesTetelController::show($rendeles_szam, $termek_id)->delete();
    }
}

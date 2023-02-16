<?php

namespace App\Http\Controllers;

use App\Models\Haszon;
use Illuminate\Http\Request;

class HaszonController extends Controller
{
    public function index()
    {
        $haszonValtozasok=Haszon::all();
        return $haszonValtozasok;
    }

    public function show($datum)
    {
        $haszonValtozas = Haszon::where('datum', $datum)->get();
        return $haszonValtozas[0];
    }

    public function store(Request $request)
    {
        $haszonValtozas= new Haszon();
        $haszonValtozas->termek_id = $request->termek_id;
        $haszonValtozas->datumtol = $request->datumtol;
        $haszonValtozas->garancia = $request->garancia;
        $haszonValtozas->save();
    }

    public function update(Request $request, $datum)
    {
        $haszonValtozas= HaszonController::show($datum);
        $haszonValtozas->termek_id = $request->termek_id;
        $haszonValtozas->datumtol = $request->datumtol;
        $haszonValtozas->garancia = $request->garancia;
        $haszonValtozas->save();
    }

    public function destroy($datum)
    {
        HaszonController::show($datum)->delete();
    }
}

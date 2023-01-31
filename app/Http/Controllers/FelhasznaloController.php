<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FelhasznaloController extends Controller
{
    public function index()
    {
        $felhasznalok=Felhasznalo::all();
        return $felhasznalok;
    }

    public function show($felhasznalo_id)
    {
        $felhasznalo=Felhasznalo::find($felhasznalo_id);
        return $felhasznalo;
    }

    public function store(Request $request)
    {
        $felhasznalo= new Felhasznalo();
        $felhasznalo->email = $request->email;
        $felhasznalo->jelszo = $request->jelszo;
        $felhasznalo->szamlazasi_cim = $request->szamlazasi_cim;
        $felhasznalo->szallitasi_cim_1 = $request->szallitasi_cim_1;
        $felhasznalo->szallitasi_cim_2 = $request->szallitasi_cim_2;
        $felhasznalo->szallitasi_cim_3 = $request->szallitasi_cim_3;
        $felhasznalo->vezeteknev = $request->vezeteknev;
        $felhasznalo->keresztnev = $request->keresztnev;
        $felhasznalo->telefonszam = $request->telefonszam;
        $felhasznalo->cegnev = $request->cegnev;
        $felhasznalo->adoszam = $request->adoszam;
        $felhasznalo->jelleg = $request->jelleg;
        $felhasznalo->jogosultsag = $request->jogosultsag;
        $felhasznalo->save();
    }

    public function update(Request $request, $id)
    {
        $felhasznalo= Felhasznalo::find($id);
        $felhasznalo->email = $request->email;
        $felhasznalo->jelszo = $request->jelszo;
        $felhasznalo->szamlazasi_cim = $request->szamlazasi_cim;
        $felhasznalo->szallitasi_cim_1 = $request->szallitasi_cim_1;
        $felhasznalo->szallitasi_cim_2 = $request->szallitasi_cim_2;
        $felhasznalo->szallitasi_cim_3 = $request->szallitasi_cim_3;
        $felhasznalo->vezeteknev = $request->vezeteknev;
        $felhasznalo->keresztnev = $request->keresztnev;
        $felhasznalo->telefonszam = $request->telefonszam;
        $felhasznalo->cegnev = $request->cegnev;
        $felhasznalo->adoszam = $request->adoszam;
        $felhasznalo->jelleg = $request->jelleg;
        $felhasznalo->jogosultsag = $request->jogosultsag;
        $felhasznalo->save();
    }

    public function destroy($id)
    {
        Felhasznalo::find($id)->delete();
    }

    public function aktualisFelhasznaloAdatai()
    {
        $felhasznalo=Auth::user();

        if($felhasznalo->szamlazasi_cim==null)
        {
            $felhasznaloTabla=DB::table("felhasznalo")
            ->select("*")
            ->where("felhasznalo_id",  $felhasznalo->felhasznalo_id)
            ->get();
            return $felhasznaloTabla;
        }
        else if($felhasznalo->szamlazasi_cim!=null)
        {
            $szamlazas=DB::table("cim as c")
            ->selectRaw("*, 'szamlazas' as tipus")
        ->rightJoin("felhasznalo as fsz", "c.cim_id", "=", "fsz.szamlazasi_cim")
        ->where("fsz.felhasznalo_id",  $felhasznalo->felhasznalo_id);
        $szallitas1=DB::table("cim as c")
        ->selectRaw("c.*, 'szallitas1' as tipus")
        ->rightJoin("felhasznalo as fsz", "c.cim_id", "=", "fsz.szallitasi_cim_1")
        ->where("fsz.felhasznalo_id",  $felhasznalo->felhasznalo_id);
        $szallitas1->union($szamlazas)->get();
        $szallitas2=DB::table("cim as c")
        ->selectRaw("c.*, 'szallitas2' as tipus")
        ->rightJoin("felhasznalo as fsz", "c.cim_id", "=", "fsz.szallitasi_cim_2")
        ->where("fsz.felhasznalo_id",  $felhasznalo->felhasznalo_id);
        $szallitas2->union($szallitas1)->get();
        $szallitas3=DB::table("cim as c")
        ->selectRaw("c.*, 'szallitas3' as tipus")
        ->rightJoin("felhasznalo as fsz", "c.cim_id", "=", "fsz.szallitasi_cim_3")
        ->where("fsz.felhasznalo_id",  $felhasznalo->felhasznalo_id);
        return $szallitas3->union($szallitas2)->get();
        }
    }
}

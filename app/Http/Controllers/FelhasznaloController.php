<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

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
        $felhasznalo->jelszo = Hash::make($request->jelszo);
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
        redirect();
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

    public function cimModositas(Request $request, $id)
    {
        $object = json_decode(json_encode($request->cim), FALSE);
        $felhasznalo= Felhasznalo::find($id);
        $felhasznalo->email = $felhasznalo->email;
        $felhasznalo->jelszo = $felhasznalo->jelszo;
        if($object->cim->szamlazasiCimMegyezikSzallitasiCimmel==true)
        {
            $felhasznalo->szamlazasi_cim = CimController::szamlazasiCim($request);
            $felhasznalo->szallitasi_cim_1 = CimController::szamlazasiCim($request);
        }
        else
        {
            $felhasznalo->szamlazasi_cim = CimController::szamlazasiCim($object->cim->szamlazasiCimAdatok);
            $felhasznalo->szallitasi_cim_1 = CimController::szallitasiCim($object->cim->szallitasiCimAdatok);
        }
        $felhasznalo->szallitasi_cim_2 = $felhasznalo->szallitasi_cim_2;
        $felhasznalo->szallitasi_cim_3 = $felhasznalo->szallitasi_cim_3;
        $felhasznalo->vezeteknev = $felhasznalo->vezeteknev;
        $felhasznalo->keresztnev = $felhasznalo->keresztnev;
        $felhasznalo->telefonszam = $felhasznalo->telefonszam;
        $felhasznalo->cegnev = $felhasznalo->cegnev;
        $felhasznalo->adoszam = $felhasznalo->adoszam;
        $felhasznalo->jelleg = $felhasznalo->jelleg;
        $felhasznalo->jogosultsag = $felhasznalo->jogosultsag;
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
            $szamlazas = DB::table("cim as c")
            ->selectRaw("*, 'szamlazas' as tipus")
            ->rightJoin("felhasznalo as f", "f.szamlazasi_cim", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $felhasznalo->felhasznalo_id);
             $szallitas1 = DB::table("cim as c")
            ->selectRaw("*, 'szallitas1'")
            ->rightJoin("felhasznalo as f", "szallitasi_cim_1", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $felhasznalo->felhasznalo_id);
            $szamlazas = $szamlazas->union($szallitas1);
            $szallitas2 = DB::table("cim as c")
            ->selectRaw("*, 'szallitas2'")
            ->rightJoin("felhasznalo as f", "szallitasi_cim_2", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $felhasznalo->felhasznalo_id);
            $szamlazas = $szamlazas->union($szallitas2);
            $szallitas3 = DB::table("cim as c")
            ->selectRaw("*, 'szallitas3'")
            ->rightJoin("felhasznalo as f", "szallitasi_cim_3", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $felhasznalo->felhasznalo_id);
            $szamlazas = $szamlazas->union($szallitas3)->get();
            return $szamlazas;
        }
    }

    public function aktualisFelhasznaloRendelesei()
    {
        $felhasznalo=Auth::user();
        $felhasznaloTabla=DB::table("felhasznalo as f")
        ->select("*")
        ->join("rendeles as r", "r.felhasznalo_id", "=", "f.felhasznalo_id")
        ->where("f.felhasznalo_id", $felhasznalo->felhasznalo_id)
        ->get();

        return $felhasznaloTabla;
    }

    public function felhasznalokCimekkel($id)
    {
        $szamlazas = DB::table("cim as c")
            ->selectRaw("c.*, 'szamlazas' as tipus")
            ->rightJoin("felhasznalo as f", "f.szamlazasi_cim", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $id);
             $szallitas1 = DB::table("cim as c")
            ->selectRaw("c.*, 'szallitas1'")
            ->rightJoin("felhasznalo as f", "szallitasi_cim_1", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $id);
            $szamlazas = $szamlazas->union($szallitas1);
            $szallitas2 = DB::table("cim as c")
            ->selectRaw("c.*, 'szallitas2'")
            ->rightJoin("felhasznalo as f", "szallitasi_cim_2", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $id);
            $szamlazas = $szamlazas->union($szallitas2);
            $szallitas3 = DB::table("cim as c")
            ->selectRaw("c.*, 'szallitas3'")
            ->rightJoin("felhasznalo as f", "szallitasi_cim_3", "=", "c.cim_id")
            ->where("f.felhasznalo_id", $id);
            $szamlazas = $szamlazas->union($szallitas3)->get();
            return $szamlazas;
    }

    public function ujDolgozo(Request $request)
    {
        $felhasznalo= new Felhasznalo();
        $felhasznalo->email = $request->email;

        $validator = Validator::make($request->all(), [
            'jelszo' => [ 'required', 'string', 
            Password::min(8)
                ->mixedCase()
                ->numbers() 
                ->symbols()
            ],
        ]);

        if ($validator->fails()) {
            return response()->json(["message" => $validator->errors()->all()], 400);
        }
        $felhasznalo->jelszo = Hash::make($request->password);
        $felhasznalo->vezeteknev = $request->vezeteknev;
        $felhasznalo->keresztnev = $request->keresztnev;
        $felhasznalo->telefonszam = $request->telefonszam;
        $felhasznalo->jogosultsag = $request->jogosultsag;
        $felhasznalo->jelleg = "M";
        $felhasznalo->save();
        return $felhasznalo;
    }

    public function aktualisFelhasznalo()
    {
        return Auth::user();
    }
}
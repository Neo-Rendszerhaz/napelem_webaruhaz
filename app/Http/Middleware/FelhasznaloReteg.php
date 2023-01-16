<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FelhasznaloReteg
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(Auth::user() && (Auth::user()->jogosultsag == 'R' or Auth::user()->jogosultsag == 'A' or Auth::user()->jogosultsag == 'F'))
        {
            return $next($request);
        }
        // return $next($request);
        
        return redirect("dashboard")->with("Hiba!", "Nincs felhasználó jogosultsága!");
        // /bejelentkezes/felhasznaloBejelentkezes
    }
}

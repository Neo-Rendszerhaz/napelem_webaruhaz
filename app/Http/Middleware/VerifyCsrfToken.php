<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        "/cimek",
        "/cimek/*",
        "/uj_dolgozo",
        "/felhasznalok",
        "/felhasznalok/*",
        "/termekek",
        "/rendelesek",
        "/rendeles_tetelek",
        "/rendeles_leadas",
        "/szamlazasi_cim",
        "/cim_modositas",
        "/cim_modositas/*"
    ];
}
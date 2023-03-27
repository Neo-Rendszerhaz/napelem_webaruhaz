<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.1.js"
        integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="/../js/phpRegisztracio.js"></script>
    <title>Document</title>
</head>
<body>
<x-guest-layout>
    <form method="POST" action="{{ route('register') }}">
        @csrf


        <div class="form-group">
            <div class=" form-check form-check-inline">
                <input id="jellegM" class="form-check-input" type="radio" name="jelleg" value="M" >
                <label for="jellegM" class="form-check-label">Magánszemély</label>
            </div>
            <div class="form-check form-check-inline">
                <input id="jellegC" class="form-check-input" type="radio" name="jelleg" value="C" checked>
                <label for="jellegC" class="form-check-label">Cég</label>
            </div>
        </div>

        <!-- Vezetéknév -->
        <div class="row mt-3">
            <div class="col-3">
                <label for="vezeteknev" class=" col-form-label">Vezetéknév</label>
            </div>
            <div class="col-md">
                <x-text-input id="vezeteknev" class="w-full" type="text" name="vezeteknev" placeholder="Vezetéknév"
                    :value="old('vezeteknev')" required autofocus autocomplete="vezeteknev" />
                <x-input-error :messages="$errors->get('vezeteknev')" class="mt-1" />
            </div>
        </div>

        <!-- Keresztnév -->
        <div class="row mt-3">
            <div class="col-3">
                <label for="keresztnev" class=" col-form-label">Keresztnév</label>
            </div>
            <div class="col-md">
                <x-text-input id="keresztnev" class="w-full" type="text" name="keresztnev" placeholder="Keresztnév"
                    :value="old('keresztnev')" required autofocus autocomplete="keresztnev" />
                <x-input-error :messages="$errors->get('keresztnev')" class="mt-1" />
            </div>
        </div>

        <!-- Telefonszám  pattern="^\+[0-9]\d{1,10}$" -->
        <div class="row mt-3">
            <div class="col-3">
                <label for="telefonszam" class="col-form-label">Telefonszám</label>
            </div>
            <div class="col-md input-group flex-nowrap">
                <span class="input-group-text" id="basic-addon1">+36</span>
                <x-text-input id="telefonszam" class="w-full" type="text" name="telefonszam" placeholder="301234567"
                    pattern="[0-9]\d{1,10}$" aria-describedby="basic-addon1" required autofocus
                    autocomplete="telefonszam" />
                <x-input-error :messages="$errors->get('telefonszam')" class="mt-1" />
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-3">
                <label for="cegnev" class="col-form-label">Cégnév</label>
            </div>
            <div class="col-md">
                <x-text-input id="cegnev" class="w-full" type="text" name="cegnev" placeholder="Cégnév"
                    :value="old('cegnev')" />
                <x-input-error :messages="$errors->get('cegnev')" class="mt-1" />
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-3">
                <label for="adoszam" class="col-form-label">Adószám</label>
            </div>
            <div class="col-md">
                <x-text-input id="adoszam" class="block mt-1 w-full" type="text" name="adoszam" placeholder="Adószám"
                    :value="old('adoszam')" />
                <x-input-error :messages="$errors->get('adoszam')" class="mt-1" />
            </div>
        </div>



        <!-- Email -->
        <div class="row mt-3">
            <div class="col-3">
                <label for="email" class="col-form-label">Email</label>
            </div>
            <div class="col-md">
                <x-text-input id="email" class="w-full" type="email" name="email" placeholder="Email"
                    :value="old('email')" required autocomplete="username" />
                <x-input-error :messages="$errors->get('email')" class="mt-1" />
            </div>
        </div>

        <!-- Jelszó -->
        <div class="row mt-3">
            <div class="col-3">
                <label for="password" class="col-form-label">Jelszó</label>
            </div>
            <div class="col-md">
                <x-text-input id="password" class="w-full" type="password" name="password" required
                    autocomplete="new-password" />
                <x-input-error :messages="$errors->get('password')" class="mt-1" />
            </div>
        </div>

        <!-- Jelszó újra -->
        <div class="row mt-3">
            <div class="col-3">
                <label for="password" class="col-form-label">Jelszó megerősítés</label>
            </div>
            <div class="col-md">
                <x-text-input id="password_confirmation" class="mt-2 w-full" type="password"
                    name="password_confirmation" required autocomplete="new-password" />
                <x-input-error :messages="$errors->get('password_confirmation')" class="mt-1" />
            </div>
        </div>

        <div class="flex items-center justify-end mt-2">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="{{ route('login') }}">
                {{ __('Már regisztrált?') }}
            </a>

            <x-primary-button class="ml-4">
                {{ __('Regisztráció') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
</body>
</html>
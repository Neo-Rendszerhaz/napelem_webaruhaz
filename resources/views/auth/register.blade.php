<x-guest-layout>
    <form method="POST" action="{{ route('register') }}">
        @csrf

        <!-- Vezetéknév -->
        <div class="mt-4">
            <x-input-label for="vezeteknev" :value="__('Vezetéknév')" />
            <x-text-input id="vezeteknev" class="block mt-1 w-full" type="text" name="vezeteknev" placeholder="Vezetéknév" :value="old('vezeteknev')" required autofocus autocomplete="vezeteknev" />
            <x-input-error :messages="$errors->get('vezeteknev')" class="mt-2" />
        </div>
        
        <!-- Keresztnév -->
        <div class="mt-4">
            <x-input-label for="keresztnev" :value="__('Keresztnév')" />
            <x-text-input id="keresztnev" class="block mt-1 w-full" type="text" name="keresztnev" placeholder="Keresztnév" :value="old('keresztnev')" required autofocus autocomplete="keresztnev" />
            <x-input-error :messages="$errors->get('keresztnev')" class="mt-2" />
        </div>

        <!-- Telefonszám  pattern="^\+[0-9]\d{1,10}$" -->
        <div class="mt-4">
            <x-input-label for="telefonszam" :value="__('Telefonszám')" />
            <div class="input-group mt-2 flex-nowrap">
                <span class="input-group-text" id="basic-addon1">+36</span>
                <x-text-input id="telefonszam" class="block mt-0 w-full" type="text" name="telefonszam"  placeholder="301234567" pattern="[0-9]\d{1,10}$" aria-describedby="basic-addon1" required autofocus autocomplete="telefonszam" />
                <x-input-error :messages="$errors->get('telefonszam')" class="mt-2" />
            </div>
        </div>

        <!-- Email Address -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" placeholder="Email" :value="old('email')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Jelszó')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
            <x-input-label for="password_confirmation" :value="__('Jelszó megerősítés')" />

            <x-text-input id="password_confirmation" class="block mt-1 w-full"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('login') }}">
                {{ __('Már regisztrált?') }}
            </a>

            <x-primary-button class="ml-4">
                {{ __('Regisztráció') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>

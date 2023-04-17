<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Személyes adatok') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-3 text-gray-900">
                    <!-- <link href="{{asset('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css')}}" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> -->
                    <link href="{{ asset('css/profil.css') }}" rel="stylesheet">
                    <link href="{{ asset('css/popup.css') }}" rel="stylesheet">
                    <script src="{{ asset('https://code.jquery.com/jquery-3.6.1.js')}}" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
                    <script src="{{ asset('js/utvonal/profil.js')}}" type="module"></script>
                    <div id="profilTarolo">
                        <div id="felhasznaloAdatok"></div>
                    </div>
                    <div class="overlay">
                        <div class="popup">
                            <h2></h2>
                            <p id="bezar" class="close">&times;</p>
                            <div class="tartalom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
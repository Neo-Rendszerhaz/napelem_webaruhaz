class NavigacioView{
    constructor(aktualisFelhasznalo){
        let navBar
        if(aktualisFelhasznalo===undefined){
            navBar=`          
                <li><a href="/">Kezdőlap</a></li>
                <li><a id="bejelentkezes" href="/login">Bejelentkezes</a></li>
                <li><a id="regisztracio" href="/register">Regisztráció</a></li>
                <li><a id="fiok" href="/dashboard">Kezdőlap</a></li>
                <li><a id="kosar" href="/kosar"><i class="fa fa-shopping-cart"  style="font-size:36px; margin-top:5px;"></i></a></li>
            `
        }
        else{
            navBar=`            
            <li><a href="/">Kezdőlap</a></li>
            <li><a href="/kosar">Kosár</a></li>
            <li><a id="bejelentkezes" href="/logout">Kijelentkezés</a></li>
            <li><a href="{{url('/logout')}}"> Kijelentkezés2</li>`
                /*`<form method="POST" action="{{ route('logout') }}">
                @csrf

                <x-dropdown-link :href="route('logout')"
                        onclick="event.preventDefault();
                                    this.closest('form').submit();">
                    {{ __('Kijelentkezés') }}
                </x-dropdown-link>
            </form>`*/
        }
        $("nav>ul").html(navBar)
    }
}
export default NavigacioView
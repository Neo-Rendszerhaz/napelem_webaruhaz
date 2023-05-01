<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="/../logo/neo_favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="auth-user" content="{{Auth::user()}}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.1.js"
        integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="/../js/utvonal/KosarFelulet.js" type="module"></script>
    <link rel="stylesheet" href="/../css/navigacioBar.css">
    <link rel="stylesheet" href="/../css/kosar.css">
    <link rel="stylesheet" href="/../css/footer.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <title>Kosár</title>
</head>

<body>
    <header>
        <div id="fejlec"><img id="logo" src="/logo/NeO-Rendszerhaz-logo.png" alt="NeO Rendszerház">
            <div>
                <h2>NeO Rendszerház</h2>
                <h3>WEBÁRUHÁZ</h3>
            </div>
        </div>
    </header>
    <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkBtn">
            <i class="fa fa-bars"></i>
        </label>
        <ul>
            <li><a href="/dashboard">Profil</a></li>
            <li><a href="/">Kezdőlap</a></li>
        </ul>
    </nav>
    <main>
        <section></section>
        <article></article>
        <div id="torlesPopupFelulet"></div>
        <aside></aside>
    </main>
    <footer></footer>
</body>

</html>
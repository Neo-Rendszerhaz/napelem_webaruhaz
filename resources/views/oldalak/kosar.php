<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="auth-user" content="{{Auth::user()}}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.1.js"
        integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="/../js/utvonal/KosarFelulet.js" type="module"></script>
    <link rel="stylesheet" href="/../css/kosar.css">
    <title>Kosár</title>
</head>

<body>
    <main>
        <header>
            <nav class="navbar">
                <ul class="nav-links">
                    <input type="checkbox" id="checkbox_toggle">
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <div class="menu">
                        <li><a href="/dashboard">Profil</a></li>
                        <li><a href="/">Kezdőlap</a></li>
                    </div>
                </ul>
            </nav>
        </header>
        <article>
            <h1>A kosarad jelenleg üres.</h1>
        </article>
        <aside>

        </aside>
        <footer>

        </footer>
    </main>
</body>

</html>
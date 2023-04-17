<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token;?>>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="/../css/admin.css">
    <script src="https://code.jquery.com/jquery-3.6.1.js"
        integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="/../js/utvonal/AdminFelulet.js" type="module"></script>
    <title>AdminWeboldal Adatokkal</title>
</head>

<body>
    <main>
        <header>
            <nav>
                <ul>
                    <li><a href="/dashboard">Profil</a></li>
                    <li><a href="/">Kezdőlap</a></li>
                </ul>
            </nav>
        </header>
        <article>

        </article>
        <footer>

        </footer>
    </main>
</body>

</html>
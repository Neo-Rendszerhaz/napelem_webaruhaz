<?php

namespace App\Http\Controllers;

use App\Mail\DemoMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function index()
    {
        $mailData=[
            "title" => "Cim leírás",
            "body"  => "Általános szöveg leírás"
        ];

        Mail::to("teszt.email.cim.fiok@gmail.com")->send(new DemoMail($mailData));

        dd("Sikeresen elküldve az email.");
    }
}

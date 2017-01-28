<?php

$recepient = "info@studio.ru";
$sitename = "Студия Натальи Белородской";

$name = trim($_POST["name"]);
$phone = trim($_POST["email"]);
$text = trim($_POST["mass"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nE-mail: $phone \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
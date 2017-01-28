<?php

$recepient = "support@mdccanada.ca";
$sitename = "Canada MDC";

$name = trim($_POST["if-name"]);
$date = trim($_POST["date"]);
$email = trim($_POST["if-email"]);
$country = trim($_POST["country"]);
$phone = trim($_POST["if-phone"]);


$pagetitle = "A new application site \"$sitename\"";
$message = "Name: $name \nYear of birth: $date \nEmail: $email \nCountry: $country \nPhone: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
<?php include 'date.php'; ?>
<?php include 'country.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Page Title -->
    <title>Immigrate to Canada</title>
    <!-- /Page title -->
    <!-- Seo Tags -->
    <meta name="description" content="Your page description here"/>
    <meta name="keywords" content="Your meta keywords, here"/>
    <meta name="robots" content="index, follow">
    <!-- /Seo Tags -->
    <!-- Favicon and Touch Icons
    ========================================================= -->
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <link rel="icon" href="img/favicon.png" type="image/x-icon">
    <!-- /Favicon
    ========================================================= -->
    <!-- >> CSS
    ============================================================================== -->
    <!-- Bootstrap styles -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- /Bootstrap Styles -->
    <!-- Google Web Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Hind:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <!-- /google web fonts -->
    <!-- Font Awesome -->
    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
    <!-- /Font Awesome -->
    <!-- Main Styles -->
    <link href="css/styles.css" rel="stylesheet">
    <!-- /Main Styles -->
    <!--Style slider -->
    <link href="css/style.css" rel="stylesheet">
    <!--/Style slider -->
    <!-- Animate Styles -->
    <link rel="stylesheet" href="css/animate.min.css">
    <!-- /Animate Styles -->
    <!-- Tel Styles -->
    <link rel="stylesheet" href="vendor/tel/css/intlTelInput.css">
    <!-- /Tel Styles -->
    <!-- >> /CSS
    ============================================================================== -->
    <script src="js/modernizr.custom.53451.js"></script>
</head>
<body>
<!-- Page Loader
========================================================= -->
<div class="loader-container" id="page-loader">
    <div class="loading-wrapper loading-wrapper-hide">
        <div class="loader-animation" id="loader-animation">
            <svg class="svg-loader" width=100 height=100>
                <circle cx=50 cy=50 r=25 />
            </svg>
        </div>
        <div class="loader-name" id="loader-name">
            <img src="img/loader-logo.png" alt="">
        </div>
    </div>
</div>
<!-- /End of Page loader
========================================================= -->
<!-- Header
================================================== -->
<header id="header" class="">
    <div class="container">
        <!-- logo -->
        <div class="header-logo" id="header-logo">
            <img src="img/logo.png" alt=""/>
        </div>
        <!-- /logo -->
        <!-- MAIN MENU -->
        <nav class="">
            <ul class="hd-list-menu">
                <li class="active"><a href="index.php#main-carousel">Home</a></li>
                <li><a href="index.php#step">How it Works</a></li>
                <li><a href="index.php#our">Our Advantages</a></li>
                <li><a href="index.php#canada">Why Canada</a></li>
                <li><a href="index.php#contact">Contact</a></li>
            </ul>
        </nav>
        <!-- /MAIN MENU -->
    </div>
</header>
<!-- /Header
================================================== -->
<div class="page-wrapper">
    <div id="body-content">
        <!-- SECTION: Home
        ================================================== -->
        <div class="main-carousel" id="main-carousel">
            <div class="main-intro" id="reg" style="background-image: url('img/bg7.jpg');">
                <div class="top-slogan-canada wow animated fadeInLeftBig ">
                    <p class="p-top-slogan">
                        Live the Canadian Dream
                    </p>
                    <p class="bottom-slogan-p">
                        Let our Canadian Immigration Experts<br/>
                        Simplify your Visa Process.
                    </p>
                </div>
                <div class="slogan wow animated fadeInLeftBig">
                    <h1>Immigration to <span class="slogan-red">Canada</span></h1>
                    <p class="text-slogan2">Check your Eligibility Today</p>
                </div>
                <div class="container-fluid">
                    <div class="intro-content-wrapper viewport">
                        <!-- Home CONTENT -->
                        <div class="intro-content intro-content-slide1">
                            <!-- row -->
                            <div class="row form-mb">
                                <!-- col -->
                                <div class="col-sm-12 form-mob">
                                    <!-- Register Form -->
                                    <form class="form wow animated fadeInRightBig" method="post" action="#"
                                          id="ajaxform">
                                        <div class="ic-register">                        <!-- row -->
                                            <div class="row">
                                                <div class="slogan-form">
                                                    <div class="logo-form">
                                                        <img src="img/loader-logo.png" alt="" class="logo-forma">
                                                        <img src="img/arrow-form.png" alt="" class="arrow-form">
                                                    </div>
                                                    <p class="text-slogan-form">
                                                        immigration to <span class="slogan-red">Canada</span> check your
                                                        eligibility
                                                    </p>
                                                </div>
                                                <!-- col -->
                                                <div class="ic-register-col">
                                                    <input type="text" class="form-control" placeholder="Full Name"
                                                           name="if-name" id="if-name"/>
                                                    <!-- Input icon -->
                                                    <div class="ic-register-ico">

                                                    </div>
                                                    <!-- /input-icon -->
                                                </div>
                                                <!-- /col -->
                                                <!-- col -->
                                                <div class="ic-register-col">
                                                    <select class="form-control" name="date" id="date">
                                                        <!--the output array of countries -->
                                                        <?php foreach ($date as $dates): ?>
                                                            <option value="<?= $dates ?>"><?= $dates ?></option>
                                                        <?php endforeach; ?>
                                                    </select>
                                                </div>
                                                <!-- /col -->
                                                <!-- col -->
                                                <div class="ic-register-col">
                                                    <input type="text" class="form-control" placeholder="Your Email"
                                                           name="if-email" id="if-email" required/>
                                                    <!-- Input icon -->
                                                    <div class="ic-register-ico">
                                                    </div>
                                                    <!-- /input-icon -->
                                                </div>
                                                <!-- /col -->
                                                <!-- col -->
                                                <div class="ic-register-col">
                                                    <select class="form-control dependent" name="country" id="country">
                                                        <!--the output array of countries -->
                                                        <?php foreach ($countries as $country): ?>
                                                            <option value="<?= $country ?>"><?= $country ?></option>
                                                        <?php endforeach; ?>
                                                    </select>
                                                </div>
                                                <!-- /col -->
                                                <!-- col -->
                                                <div class="ic-register-col">
                                                    <input type="tel" class="form-control phone-n"
                                                           placeholder="Phone Number"
                                                           name="if-phone" id="if-phone" required/>
                                                </div>
                                                <!-- /col -->
                                            </div>
                                            <!-- /row -->
                                            <input type="hidden" value="A New Event Register!" name="subject"
                                                   id="if-subject">
                                        </div>
                                        <!-- Buttons -->
                                        <div class="ic-buttons">
                                            <button type="submit" class="btn bt-red"><i class="fa fa-paper-plane"></i>
                                                &nbsp;
                                                Apply Today
                                            </button>
                                        </div>
                                        <!-- /buttons -->
                                        <div class="bootom-form">
                                            <a href="#">Privacy Pollcy</a>
                                            <p>
                                                MDC is a private Canadian Immigration company and is not affiliated with
                                                the Canadian Government. MDC offers paid professional immigration
                                                services.
                                            </p>
                                        </div>
                                    </form>
                                    <!-- /Register Form -->
                                    <img class="arrow" src="img/arrow.png" alt="">
                                </div>
                                <!-- /col -->
                            </div>
                            <!-- /row -->
                        </div>
                        <!-- /Home CONTENT -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /SECTION: Home
    ================================================== -->
    <!-- SECTION: Step
    ================================================== -->
    <div class="section-schedule section-bg-left" id="section-schedule">
        <div class="container">
            <!-- Section title -->
            <div class="section-title-wrapper" id="step">
                <h2 class="title-section"><span class="title-section-bg wow animated bounce">How it Works <small></small></span>
                </h2>
            </div>
            <!-- /Section title -->
            <div class="row">
                <div class="col-md-4 ">
                    <div class="wrap-step wow animated pulse ">
                        <div class="img-step step2 hover-shadow">
                            <i class="fa fa-phone " aria-hidden="true"></i>
                        </div>
                        <p class="text-step">Step 1</p>
                        <p class="text-p-step wow animated fadeInRight">
                            You will receive a call
                            from your dedicated
                            account manager
                        </p>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="wrap-step wow animated pulse">
                        <div class="img-step step3 hover-shadow">
                            <i class="fa fa-address-card-o" aria-hidden="true"></i>
                        </div>
                        <p class="text-step">Step 2</p>
                        <p class="text-p-step wow animated fadeInDown">
                            Collection of documents
                            and submission of application
                        </p>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="wrap-step wow animated pulse">
                        <div class="img-step hover-shadow">
                            <i class="fa fa-handshake-o" aria-hidden="true"></i>
                        </div>
                        <p class="text-step">Step 3</p>
                        <p class="text-p-step wow animated fadeInLeft">
                            You’re on your way
                            to living the Canadian dream
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Buttons -->
    <div class="ic-buttons wow animated pulse">
        <a href="index.php#reg" class="btn btn-f green"><i
                class="fa fa-paper-plane"></i> &nbsp; Apply Today</a>
    </div>
    <!-- /buttons -->
    <!-- SECTION: Our
    ================================================== -->
    <div class="section-prices section-padding section-bg-left" id="section-prices">
        <div class="container">
            <!-- Section title -->
            <div class="section-title-wrapper" id="our">
                <h2 class="title-section">Our Advantages</h2>
            </div>
            <!-- /Section title -->
            <!--Tickets -->
            <div class="row">
                <!-- item -->
                <div class="col-md-4">
                    <!--ticket -->
                    <a class="price-ticket-item wow animated fadeInLeftBig">
                        <div class="price-ticket-item-wrapper">
                            <!-- Front card -->
                            <div class="price-ticket-item-front">
                                <div class="price-ticket-item-border">
                                    <!-- row -->
                                    <div class="row">
                                        <!-- col -->
                                        <div class="col-md-6 col-sm-12 wow animated fadeInDownBig">
                                            <!--  price -->
                                            <p class="price-ticket-title">
                                                <i class="fa fa-users" aria-hidden="true"></i>
                                            </p>
                                            <p class="price-ticket-type">
                                                Professional Guidance from Qualified RCICs
                                            </p>
                                            <!-- /-price -->
                                        </div>
                                        <!-- /col -->
                                        <!-- col -->
                                        <div class="col-md-6 col-sm-12 no-spadding">
                                            <div class="price-ticket-infos-wrapper wow animated fadeInUpBig">
                                                <p>
                                                    Our Regulated Canadian Immigration Consultants (RCIC) will help
                                                    you apply for your Canadian Visa.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- /col -->
                                    </div>
                                    <!-- /row -->
                                </div>
                            </div>
                            <!-- /front-card -->
                        </div>
                    </a>
                    <!-- / ticket -->
                </div>
                <!-- /item -->
                <!-- item -->
                <div class="col-md-4">
                    <!--  ticket -->
                    <a class="price-ticket-item wow animated fadeInUpBig">
                        <div class="price-ticket-item-wrapper">
                            <!-- Front card -->
                            <div class="price-ticket-item-front">
                                <div class="price-ticket-item-border">
                                    <!-- row -->
                                    <div class="row">
                                        <!-- col -->
                                        <div class="col-md-6 col-sm-12 wow animated fadeInLeft">
                                            <!--  price -->
                                            <p class="price-ticket-title">
                                                <i class="fa fa-bookmark" aria-hidden="true"></i>
                                            </p>
                                            <p class="price-ticket-type">
                                                Personal and family eligibility evaluation
                                            </p>
                                            <!-- /-price -->
                                        </div>
                                        <!-- /col -->
                                        <!-- col -->
                                        <div class="col-md-6 col-sm-12 no-spadding">
                                            <div class="price-ticket-infos-wrapper wow animated fadeInRight">
                                                <p>
                                                    We offer cost-effective personal and family evaluation packages
                                                    suited to your unique needs.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- /col -->
                                    </div>
                                    <!-- /row -->
                                </div>
                            </div>
                            <!-- /front-card -->
                        </div>
                    </a>
                    <!-- / ticket -->
                </div>
                <!-- /item -->
                <!-- item -->
                <div class="col-md-4">
                    <!--  ticket -->
                    <a class="price-ticket-item wow animated fadeInRightBig">
                        <div class="price-ticket-item-wrapper">
                            <!-- Front card -->
                            <div class="price-ticket-item-front">
                                <div class="price-ticket-item-border">
                                    <!-- row -->
                                    <div class="row">
                                        <!-- col -->
                                        <div class="col-md-6 col-sm-12 wow animated fadeInLeft">
                                            <!--  price -->
                                            <p class="price-ticket-title">
                                                <i class="fa fa-check" aria-hidden="true"></i>
                                            </p>
                                            <p class="price-ticket-type">
                                                Ensure applications are submitted correctly
                                            </p>
                                            <!-- /ticket -->
                                        </div>
                                        <!-- /col -->
                                        <!-- col -->
                                        <div class="col-md-6 col-sm-12 no-spadding">
                                            <div class="price-ticket-infos-wrapper wow animated fadeInRightBig">
                                                <p>
                                                    Our RCICs will liaise with the Canadian government on your
                                                    behalf, ensuring your application meets all requirements.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- /col -->
                                    </div>
                                    <!-- /row -->
                                </div>
                            </div>
                            <!-- /front-card -->
                        </div>
                    </a>
                    <!-- / ticket -->
                </div>
                <!-- /item -->
            </div>
            <!-- / Tickets -->
            <div class="prises-2">
                <!--  Tickets -->
                <div class="row">
                    <!-- item -->
                    <div class="col-md-4">
                        <!--  ticket -->
                        <a class="price-ticket-item wow animated fadeInLeftBig">
                            <div class="price-ticket-item-wrapper">
                                <!-- Front card -->
                                <div class="price-ticket-item-front">
                                    <div class="price-ticket-item-border">
                                        <!-- row -->
                                        <div class="row">
                                            <!-- col -->
                                            <div class="col-md-6 col-sm-12 wow animated fadeInLeft">
                                                <!--  price -->
                                                <p class="price-ticket-title">
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                </p>
                                                <p class="price-ticket-type">
                                                    Optimize your Application
                                                </p>
                                                <!-- /-price -->
                                            </div>
                                            <!-- /col -->
                                            <!-- col -->
                                            <div class="col-md-6 col-sm-12 no-spadding">
                                                <div class="price-ticket-infos-wrapper wow animated fadeInRight">
                                                    <p>
                                                        Our consultants will optimize your application to ensure the
                                                        highest chance of success.
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- /col -->
                                        </div>
                                        <!-- /row -->
                                    </div>
                                </div>
                                <!-- /front-card -->
                            </div>
                        </a>
                        <!-- /ticket -->
                    </div>
                    <!-- /item -->
                    <!-- item -->
                    <div class="col-md-4">
                        <!-- ticket -->
                        <a class="price-ticket-item wow animated fadeInUpBig">
                            <div class="price-ticket-item-wrapper">
                                <!-- Front card -->
                                <div class="price-ticket-item-front">
                                    <div class="price-ticket-item-border">
                                        <!-- row -->
                                        <div class="row">
                                            <!-- col -->
                                            <div class="col-md-6 col-sm-12 wow animated fadeInDown">
                                                <!-- price -->
                                                <p class="price-ticket-title">
                                                    <i class="fa fa-compass" aria-hidden="true"></i>
                                                </p>
                                                <p class="price-ticket-type">
                                                    Step-by-step guidance
                                                </p>
                                                <!-- /ticket-->
                                            </div>
                                            <!-- /col -->
                                            <!-- col -->
                                            <div class="col-md-6 col-sm-12 no-spadding">
                                                <div class="price-ticket-infos-wrapper wow animated fadeInUp">
                                                    <p>
                                                        We are with you every step of the way until you step foot on
                                                        Canadian soil.
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- /col -->
                                        </div>
                                        <!-- /row -->
                                    </div>
                                </div>
                                <!-- /front-card -->
                            </div>
                        </a>
                        <!-- /ticket -->
                    </div>
                    <!-- /item -->
                    <!-- item -->
                    <div class="col-md-4">
                        <!-- ticket -->
                        <a class="price-ticket-item wow animated fadeInRightBig">
                            <div class="price-ticket-item-wrapper">
                                <!-- Front card -->
                                <div class="price-ticket-item-front">
                                    <div class="price-ticket-item-border">
                                        <!-- row -->
                                        <div class="row">
                                            <!-- col -->
                                            <div class="col-md-6 col-sm-12 wow animated fadeInUp">
                                                <!--price -->
                                                <p class="price-ticket-title">
                                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                                </p>
                                                <p class="price-ticket-type">
                                                    Save Money and Time
                                                </p>
                                                <!-- /ticket-->
                                            </div>
                                            <!-- /col -->
                                            <!-- col -->
                                            <div class="col-md-6 col-sm-12 no-spadding">
                                                <div class="price-ticket-infos-wrapper wow animated fadeInDown">
                                                    <p>
                                                        We will ensure that you apply for the correct visa program
                                                        while meeting all requirements and deadlines.
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- /col -->
                                        </div>
                                        <!-- /row -->
                                    </div>
                                </div>
                                <!-- /front-card -->
                            </div>
                        </a>
                        <!-- / ticket -->
                    </div>
                    <!-- /item -->
                </div>
                <!-- / Tickets -->
            </div>
        </div>
    </div>
    <!-- Buttons -->
    <div class="ic-buttons wow animated pulse">
        <a href="index.php#reg" class="btn btn-f green"><i
                class="fa fa-paper-plane"></i> &nbsp; Apply Today</a>
    </div>
    <!-- /buttons -->
    <!-- /SECTION: Our
    ================================================== -->
    <!-- 3D Slider
    ================================================== -->
    <div id="canada" class="slider section-schedule section-bg-left">
        <div class="container mob-con">
            <div class="row">
                <!-- Section title -->
                <div class="section-title-wrapper">
                    <h2 class="title-section">Why Canada</h2>
                </div>
                <!-- /Section title -->
                <div class="img-m">
                    <ul>
                        <li><a href="index.php#reg"><img src="img/1.jpg" alt="image01"></a></li>
                        <li><a href="index.php#reg"><img src="img/2.jpg" alt="image02"></a></li>
                        <li><a href="index.php#reg"><img src="img/3.jpg" alt="image03"></a></li>
                        <li><a href="index.php#reg"><img src="img/4.jpg" alt="image04"></a></li>
                        <li><a href="index.php#reg"><img src="img/5.jpg" alt="image05"></a></li>
                    </ul>
                </div>
                <section id="dg-container" class="dg-container"><h4 style="display: none;">h section</h4>
                    <!-- Контейнер с изображениями  -->
                    <div class="dg-wrapper">
                        <a href="index.php#reg"><img src="img/1.jpg" alt="image01"></a>
                        <a href="index.php#reg"><img src="img/2.jpg" alt="image02"></a>
                        <a href="index.php#reg"><img src="img/3.jpg" alt="image03"></a>
                        <a href="index.php#reg"><img src="img/4.jpg" alt="image04"></a>
                        <a href="index.php#reg"><img src="img/5.jpg" alt="image05"></a>
                    </div>
                </section>
            </div>
        </div>
        <!-- Buttons -->
        <div class="ic-buttons wow animated pulse">
            <a href="index.php#reg" class="btn btn-f"><i
                    class="fa fa-paper-plane"></i> &nbsp; Apply Today</a>
        </div>
        <!-- /buttons -->
    </div>
    <!-- /3D slider
    ================================================== -->
    <footer class="foot" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow animated fadeInLeft mob">
                    <!-- SECTION: Location
                          ================================================== -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="map" id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.414770540993!2d-123.12117948482252!3d49.28748557835213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867183b90e6ccd%3A0x38ec59d20c5b8d88!2zMTA2NiBXIEhhc3RpbmdzIFN0LCBWYW5jb3V2ZXIsIEJDIFY2RSwg0JrQsNC90LDQtNCw!5e0!3m2!1sru!2sua!4v1484662474105"
                                    height="300"></iframe>
                            </div>
                        </div>
                    </div>
                    <!-- /SECTION: Location
                    ================================================== -->
                </div>
                <div class="col-md-6 wow animated fadeInDown footer-right">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="h-top-text-f">
                                Contact Us</p>
                            <p class="text-footer">
                                Our experienced team of legal experts, lawyers and consultants are here to help you.
                                With our passion, in-depth knowledge of the system and amazing success stories, we
                                strive to give you nothing but the best service. For further information about
                                immigration, please contact our office.
                            </p>
                        </div>
                        <div class="col-md-12">
                            <ul class="contact">
                                <li><a href="mailto:support@mdccanada.ca">support@mdccanada.ca</a></li>
                                <li><a href="tel:+16047576504">+1-604-757-6504</a></li>
                                <li>1066 West Hastings st,
                                    Vancouver, BC V6E 3X2
                                    British Columbia
                                    Canada
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
<!-- Google Analytics -->
<!-- / Google Analytics -->
<!-- >> JS
============================================================================== -->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="js/form.js"></script>
<script src="js/jquery.gallery.js"></script>
<script>
    $('#dg-container').gallery({
        autoplay: true
    });
</script>
<script src="vendor/jquery-1.11.3.min.js"></script>
<!-- Wow animate -->
<script src="js/wow.min.js"></script>
<script>new WOW().init();</script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!-- CountDown -->
<script src="vendor/jquery.countdown.min.js"></script>
<!-- /CountDown -->
<!-- Waypoints-->
<script src="vendor/waypoints.min.js"></script>
<!-- /Waypoints-->
<!-- Validate -->
<script src="vendor/validate.js"></script>
<!-- / Validate -->
<!-- Main JS -->
<script src="js/main.js"></script>
<!-- /Main JS -->
<!--Tel JS-->
<script src="vendor/tel/js/intlTelInput.js"></script>
<script>
    $("#if-phone").intlTelInput({
        nationalMode: true,
        separateDialCode: true,
        initialCountry: 'auto',
        preferredCountries: ["", ""],
        defaultCountry: "auto",
        geoIpLookup: function (callback) {
            $.get('http://ipinfo.io', function () {
            }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "auto";
                callback(countryCode);
            });
        },
        utilsScript: "vendor/tel/js/utils.js"
    });
</script>
<script src="vendor/cross-browser.js"></script>
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<!-- >> /JS
============================================================================= -->
</body>
</html>
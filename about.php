<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Hostel Management</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">



    <style>
        /* Custom CSS */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #cdcfd2;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px;
        }

        .about-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .about-header h1 {
            font-size: 3rem;
            color: #333;
            margin-bottom: 10px;
        }

        .about-header p {
            font-size: 1.2rem;
            color: #666;
        }

        .room-details {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
        }

        .room {
            flex-basis: calc(33.33% - 20px);
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
        }

        .room:hover {
            transform: translateY(-5px);
        }

        .room h3 {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 10px;
        }

        .room p {
            color: #666;
        }

        .room img {
            width: 100%;
            border-radius: 5px;
            margin-top: 10px;
        }

        .animation-text {
            text-align: center;
            margin-top: 50px;
            font-size: 2rem;
            color: #333;
        }

        .animation-text span {
            display: inline-block;
            animation: fadeInUp 2s ease-in-out infinite;
        }

        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .mapouter {
            position: relative;
            text-align: right;
            width: 100%;
            height: 400px;
        }

        .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 400px;
        }

        /* .gmap_iframe {
            height: 400px !important;
        } */

        #tbname {
            text-align: center;
        }

        .td2 {
            text-align: right;
        }

        footer {
            height: 100px;
            border: 1px solid black;
            background-color: rgb(240, 240, 240);
        }

        ul {
            display: flex;
            list-style: none;
            font-size: 40px;

        }

        ul li {
            margin-right: 20px;
            font-style: normal;
            text-decoration: none;
        }

        .mapouter {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .fa {
            padding: 20px;
            font-size: 20px;
            width: 60px;
            text-align: center;
            text-decoration: none;
            /* margin: 5px 2px; */
            border-radius: 20%;
        }

        .fa:hover {
            opacity: 0.5;
        }

        .fa-facebook {
            background: #3B5998;
            color: white;
        }

        .fa-twitter {
            background: #55ACEE;
            color: white;
        }

        .fa-instagram {
            background: #e81cbc;
            color: white;
        }

        .fa-envelope {
            background: #bb0000;
            color: white;
        }

        #contactus {
            text-align: left ;
            margin-left: 40px;
            justify-content: left;
            
            
        }

        .container-L {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        .tbldive {
            width: 48%;
            /* height: 600px; */

        }

        .gmap_canvas {
            width: 50%;
        }

        table {
            height: 400px;
        }
        #more1{
            display: none;
        }
        #more2{
            display: none;
        }
        #more4{
            display: none;
        }
        #lessbtn1{
            display: none;
        }
        #lessbtn2{
            display: none;
        }
        #lessbtn4{
            display: none;
        }
        #carouselExampleCaptions{
            border: 2px solid black;
        }
    </style>


</head>

<body>
    <div class="container">
        <div class="about-header">
            <h1><strong>Sultan Boys Hostel</strong></h1>
            <p>Your Premier Hostel Experience Provider</p>
        </div>

        <!-- Slider... -->

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./Images/hostel_bg1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./Images/hostel_bg2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./Images/hostel_bg3.jpeg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">

                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


        <!-- slider end... -->

        <div class="room-details">
            <div class="room">
                <img src="./Images/single_seater.jpeg" alt="Single Room">
                <h3><strong>Single Room</strong></h3>
                <dl>
                    <dt>Tranquility:</dt>
                    <dd> Experience a peaceful environment for relaxation and rest.</dd>
                    <dt>Privacy:</dt>
                    <dd> Enjoy the comfort of a private space without shared accommodations.</dd>
                    <div id="more1">
                        <dt>Security:</dt>
                        <dd> Keep your belongings secure in your exclusive room.</dd>
                        <dt>Focused Work:</dt>
                        <dd> Ideal for digital nomads or remote workers seeking a quiet workspace.</dd>
                        <dt>Flexible Schedule:</dt>
                        <dd> Come and go on your own terms without disturbing others.</dd>
                        <dt>Comfort:</dt>
                        <dd> Experience a cozy and comfortable atmosphere tailored just for you.</dd>
                    </div>
                </dl>
             <button id="morebtn1">see more</button>
             <button id="lessbtn1" >see less</button>
                
            </div>
            <div class="room">
                <img src="./Images/2seater room.jpg" alt="Double Room">
                <h3><strong>Double Room</strong></h3>
                <dl>
                    <dt>Tranquility:</dt>
                    <dd> Experience a peaceful environment for relaxation and rest.</dd>
                    <dt>Privacy:</dt>
                    <dd> Enjoy the comfort of a private space without shared accommodations.</dd>
                    <div id="more2">
                        <dt>Security:</dt>
                        <dd> Keep your belongings secure in your exclusive room.</dd>
                        <dt>Focused Work:</dt>
                        <dd> Ideal for digital nomads or remote workers seeking a quiet workspace.</dd>
                        <dt>Flexible Schedule:</dt>
                        <dd> Come and go on your own terms without disturbing others.</dd>
                        <dt>Comfort:</dt>
                        <dd> Experience a cozy and comfortable atmosphere tailored just for you.</dd>
                    </div>
                </dl>
             <button id="morebtn2">see more</button>
             <button id="lessbtn2" >see less</button>
            </div>
            <div class="room">
                <img src="./Images/4seater_room.jpeg" alt="Suite Room">
                <h3><strong>4 Seater Room</strong></h3>
                <dl>
                    <dt>Tranquility:</dt>
                    <dd> Experience a peaceful environment for relaxation and rest.</dd>
                    <dt>Privacy:</dt>
                    <dd> Enjoy the comfort of a private space without shared accommodations.</dd>
                    <div id="more4">
                        <dt>Security:</dt>
                        <dd> Keep your belongings secure in your exclusive room.</dd>
                        <dt>Focused Work:</dt>
                        <dd> Ideal for digital nomads or remote workers seeking a quiet workspace.</dd>
                        <dt>Flexible Schedule:</dt>
                        <dd> Come and go on your own terms without disturbing others.</dd>
                        <dt>Comfort:</dt>
                        <dd> Experience a cozy and comfortable atmosphere tailored just for you.</dd>
                    </div>
                </dl>
                  <button id="morebtn4">see more</button>
             <button id="lessbtn4" >see less</button>
            </div>
        </div>
        <div class="container-L">
            <div class="tbldive mt-3">
                <table class="table table-light " border="2px solid black">
                    <tr>
                        <td colspan="2">
                            <h3 id="tbname">Hostel Facilities</h3>
                        </td>

                    </tr>
                    <tr>
                        <td>wifi</td>
                        <td class="td2">yes</td>
                    </tr>
                    <tr>
                        <td>water Cooler</td>
                        <td class="td2">yes</td>
                    </tr>
                    <tr>
                        <td>Electricity</td>
                        <td class="td2">yes</td>
                    </tr>
                    <tr>
                        <td>laundry</td>
                        <td class="td2">no</td>
                    </tr>
                    <tr>
                        <td>Attach Washroom</td>
                        <td class="td2">yes</td>
                    </tr>
                    <tr>
                        <td>Air Condition</td>
                        <td class="td2">no</td>
                    </tr>
                    <tr>
                        <td>bed</td>
                        <td class="td2">yes</td>
                    </tr>
                    <tr>
                        <td>Hostel Mess</td>
                        <td class="td2">yes with extra chrges</td>
                    </tr>
                </table>
            </div>

            <div class="gmap_canvas mt-3 mb-3">

                <iframe class="gmap_iframe " width="100%" height="420px" frameborder="0" scrolling="no" marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?&amp;hl=en&amp;q=Adeeb boys hostel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>

        <footer>
            <div class="mapouter ">
                <div>
                    <h3 id="contactus"> <strong> Contact Us:</strong></h3>

                </div>
                <div>
                    <ul>
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li> <a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-instagram"></a></li>
                        <li><a href="#" class="fa fa-envelope"></a></li>
                    </ul>
                </div>

                <!-- <h3>Hostel Locaion:</h3> -->



            </div>


        </footer>
    </div>

  


    <script src="bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/js/bootstrap.min.js"></script>
    <script src="jquery.js"></script>


    <script>
       $(document).ready(function () {
        $('#morebtn1').click (function () {
        $('#more1').show(1000);
        $('#lessbtn1').show();
        $('#morebtn1').hide();
            
        });
        $('#lessbtn1').click (function () {
        $('#more1').hide(1000);
        $('#lessbtn1').hide();
        $('#morebtn1').show();

        });
        $('#morebtn2').click (function () {
        $('#more2').show(1000);
        $('#lessbtn2').show();
        $('#morebtn2').hide();
            
        });
        $('#lessbtn2').click (function () {
        $('#more2').hide(1000);
        $('#lessbtn2').hide();
        $('#morebtn2').show();

        });
        $('#morebtn4').click (function () {
        $('#more4').show(1000);
        $('#lessbtn4').show();
        $('#morebtn4').hide();
            
        });
        $('#lessbtn4').click (function () {
        $('#more4').hide(1000);
        $('#lessbtn4').hide();
        $('#morebtn4').show();

        });
       });
        </script>


</body>

</html>
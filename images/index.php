<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Chanone 7 Description">
    <meta name="keywords" content="Alternative, Medicine, Medical, Appointment, Online, Meeting">
    <meta name="author" content="Abdul Razzak Merhi">

    <link rel="stylesheet" href="/styles/master.css">

    <link rel="stylesheet" href="owlcarousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="owlcarousel/assets/owl.theme.default.min.css">
    
    <script src="https://kit.fontawesome.com/3f7c79d8cd.js" crossorigin="anonymous"></script>

    <title>Chanone 7 - Home</title>
</head>
<body>
    
    <div class="header">
        <?php include "includes/header.html" ?>
        <?php include "includes/nav.html" ?>
    </div>

    <section class="carousel">
        <div class="owl-carousel">
            <div><img src="images/butterfly_vancouver_island_carousel.jpg" alt="butterfly about to land on a flower in Vancouver island"><p>Water</p></div>
            <div><img src="images/jumping_dog_carousel.JPG" alt="dog jumping into the lake"><p>Air</p></div>
            <div><img src="images/cycling_people_carousel.JPG" alt="several people cycling on a path between the woods, taken from behind them"><p>Exercise</p></div>
            <div><img src="images/bread_carousel.jpeg" alt="baked bread on kitchen counter with several surrounding ingredients and bottles"> <p>Food</p></div>
            <div><img src="images/pink_sky_carousel.jpg" alt="sunset pink sky"><p>Meds</p></div>
          </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="owlcarousel/owl.carousel.min.js"></script>

    <script>
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000, /* 3 sec */
                autoplayHoverPause: true
                }
            );
        });
    </script>
</body>
</html>
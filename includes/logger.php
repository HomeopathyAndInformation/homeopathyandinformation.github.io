<?php
//Language Right to Left Carousel Cookie
setcookie("rtl","false", time() + (86400* 365), "/");

$useronly = "class='visiblenav'";
$navlogin = "class='invisiblenav'";
$logsign = "class='visiblenav'";
$adminlogin = "class='invisiblenav'";
$userlogin = "class='invisiblenav'";
$popup = "class='invisiblenav'";

//login
if(session_status() == PHP_SESSION_NONE){
    session_start();
}

if(isset($_SESSION['login']) && $_SESSION['login'] == "true") {

    //Make sure we at least have the email and password saved
    if(isset($_SESSION['email']) && isset($_SESSION['password'])) {
        //change navbar to fit login status
        $navlogin = "class='visiblenav'";
        $logsign = "class='invisiblenav'";
        $userlogin = "class='visiblenav'";

        //Admin & User Changes
        if(isset($_SESSION['permission']) && $_SESSION['permission'] == "ADMIN") {
            $adminlogin = "class='visiblenav'";
            $userlogin = "class='invisiblenav'";
            $useronly = "class='invisiblenav'";
        }
    //If we don't have email & password, logout    
    } else {
        $_SESSION['login'] = "false";
    }

    //verified setup
    if(isset($_SESSION['verified'])) {
        if($_SESSION['verified'] == "0") {
            $popup = "class='popup-verify'";
        } else {
            $popup = "class='invisiblenav'";
        }
    }
}
?>
<?php

require_once(APPPATH.'/libraries/vendor/autoload.php');
//Twig_Autoloader::register();
$loader = new Twig_Loader_Filesystem(APPPATH.'/views');
$twig = new Twig_Environment($loader); 
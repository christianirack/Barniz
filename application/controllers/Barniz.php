<?php
class Barniz extends CI_Controller{
	public function index($info = ''){
		include_once(APPPATH.'controllers/Twig.php'); 
		$template = $twig->loadTemplate('home.twig');
	    echo $template->render(['sec' => 'home']);
	}
	public function test(){
		print('test');
	}
}
<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Web2go extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $this->load->view('web2go');
    }

}

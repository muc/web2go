<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Studiengaenge extends CI_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function index() {
        redirect('#studiengaenge');
    }
    
    function ajax($fn) {
        if (!IS_AJAX) $this->index();
        echo json_encode(call_user_func(array($this, $fn)));
    }
    
    function get_nav1() {
        return array(
            'data' => array(
                array('id' => 1, 'title' => 'Alle Angebote'),
                array('id' => 2, 'title' => 'Fakultät Wirtschaft'),
                array('id' => 3, 'title' => 'Fakultät Technik'),
                array('id' => 4, 'title' => 'Angebote Mosbach'),
                array('id' => 5, 'title' => 'Angebote Heilbronn'),
                array('id' => 6, 'title' => 'Angebote Bad Mergentheim'),
                array('id' => 7, 'title' => 'Thema Wirtschaftswiss.'),
                array('id' => 8, 'title' => 'Thema Ingenieurwiss.'),
                array('id' => 9, 'title' => 'Thema Internationalität'),
                array('id' => 10, 'title' => 'Thema Informatik / IT'),
                array('id' => 11, 'title' => 'Thema Medien')
            )
        );
    }
    
    function get_list() {
        $filter = $this->input->post('filter');
        return array(
            'data' => array(
                array('id' => 1, 'title' => 'Angewandte Informatik'),
                array('id' => 2, 'title' => 'Bank'),
            )
        );
    }
}
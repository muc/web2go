<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Mensa extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        redirect('#mensa');
    }
    
    function ajax($fn) {
        if (!IS_AJAX) $this->index();
        echo json_encode(call_user_func(array($this, '_' . $fn)));
    }
    
    function _get_mensa() {
        return array(
            'data' => array(
                array('id' => 1, 'name' => 'Alte Mälzerei', 'kw' => 'KW 5'),
                array('id' => 2, 'name' => 'Brauhaus', 'kw' => 'KW 5'),
                array('id' => 3, 'name' => 'Lamm', 'kw' => 'KW 5'),
                array('id' => 4, 'name' => 'Lamm', 'kw' => 'KW 6'),
            )
        );
    }
}

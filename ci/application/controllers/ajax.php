<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Ajax extends CI_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function index() {
        redirect('');
    }
    
    function get_campus() {
        if (!IS_AJAX) redirect('');
        $response = array(
            'name' => 'Campus',
            'items' => array(
                array('name' => 'Mosbach', 'id' => 'mos', 'leaf' => true),
                array('name' => 'Heilbronn', 'id' => 'hn', 'leaf' => true),
                array('name' => 'Bad Merkentheim', 'id' => 'bm', 'leaf' => true),
            )
        );
        echo json_encode($response);
    }
    
    function get_mensa() {
        if (!IS_AJAX) redirect('');
        $response = array(
            'data' => array(
                array('id' => 1, 'name' => 'Alte Mälzerei', 'kw' => 'KW 5'),
                array('id' => 2, 'name' => 'Brauhaus', 'kw' => 'KW 5'),
                array('id' => 3, 'name' => 'Lamm', 'kw' => 'KW 5'),
                array('id' => 4, 'name' => 'Lamm', 'kw' => 'KW 6'),
            )
        );
        echo json_encode($response);
    }
    
    function get_vplaene() {
        if (!IS_AJAX) redirect('');
        
        $response = array(
            'name' => 'Vplaene',
            'items' => array(
                array(
                    'name' => 'Mosbach',
                    'items' => array(
                        array(
                            'name' => 'Onlinemedien', 
                            'items' => array(
                                array('name' => 'ON08', 'leaf' => true),
                                array('name' => 'ON09', 'leaf' => true),
                                array('name' => 'ON10', 'leaf' => true),
                            )
                        ),
                        array(
                            'name' => 'Wirtschaftsinformatik', 
                            'items' => array(
                                array('name' => 'WI08', 'leaf' => true),
                                array('name' => 'WI09', 'leaf' => true),
                                array('name' => 'WI10', 'leaf' => true),
                            )
                        ),
                    )
                ),
                array('name' => 'Heilbronn', 'leaf' => true),
                array('name' => 'Bad Merkentheim', 'leaf' => true),
            )
        );
        echo json_encode($response);
    }
    
}
<?php

$kw = date('W');
echo json_encode(array(
    'data' => array(
        array('name' => 'Alte Mälzerei', 'kw' => $kw, 'link' => 'http://www.dhbw-mosbach.de/fileadmin/user/public/einheiten/mensa/Alte_Mälzerei_KW' . $kw . '.pdf'),
        array('name' => 'Lamm', 'kw' => $kw, 'link' => 'http://www.dhbw-mosbach.de/fileadmin/user/public/einheiten/mensa/Lamm_KW' . $kw . '.pdf'),
        array('name' => 'Brauhaus', 'kw' => $kw, 'link' => 'http://www.dhbw-mosbach.de/fileadmin/user/public/einheiten/mensa/Brauhaus_KW' . $kw . '.pdf'),
    )
));
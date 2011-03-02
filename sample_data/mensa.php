<?php

$kw = date('W');
echo json_encode(array(
    'data' => array(
        array('name' => 'Alte Mälzerei', 'kw' => $kw, 'link' => ''),
        array('name' => 'Lamm', 'kw' => $kw, 'link' => ''),
        array('name' => 'Brauhaus', 'kw' => $kw, 'link' => ''),
    )
));
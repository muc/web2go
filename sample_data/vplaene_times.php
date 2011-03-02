<?php

$times = array();

$firstJan = mktime(0, 0, 0, 1, 1, date('Y'));
$firstMonInJan = date('N', $firstJan) == 1 ? $firstJan : strtotime('next Monday', $firstJan);
$start = strtotime('-16 weeks', $firstMonInJan);

$inThisYear = true;
$next = $start;
while ($inThisYear) {
    $time_start = $next;
    $time_end = strtotime('next Friday', strtotime('+3 weeks', $time_start));
    
    $times[] = array(
        'time' => date('d.m.Y', $time_start) . ' - ' . date('d.m.Y', $time_end),
        'kw' => date('Y', $time_start) . '-' . date('W', $time_start),
        'curr' => time() >= $time_start && time() <= $time_end
    );
    $next = strtotime('next Monday', $time_end);
    $inThisYear = date('Y', $next) <= date('Y');
}
    
echo json_encode(array(
    'data' => $times
));


?>

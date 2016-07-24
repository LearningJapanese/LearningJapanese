<?php
   
    $j = file_get_contents("lvl1_data.json");
    $j = json_decode($j, true);

    for ($x=0; $x < count($j['lessons']); $x++) { 
        $myfile = fopen("tmp/lesson".($x+1).".json", "w") or die("Unable to open file!");
        fwrite($myfile, json_encode( $j['lessons'][$x], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK ));
        fclose($myfile);
    }

?>
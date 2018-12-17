<?php

include_once 'mysql.php';

session_start();

if (isset($_GET['f'])) {
    //Verbindung zur Datenbank
    connection();

    //Login
    if ($_GET['f'] == 1) {
        if (isset($_POST['image']) AND isset($_POST['idhash'])) {
            $image = addslashes($_POST['image']);
            $idhash = addslashes($_POST['idhash']);
            mysql_query('DELETE from data where idhash = "' . $idhash . '"');
            $sql = 'INSERT INTO data (base64,idhash) VALUES ("' . $image . '","' . $idhash . '")';
            mysql_query($sql);
        }
    }

    if ($_GET['f'] == 2) {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        if (isset($_POST['idhash'])) {
            $idhash = addslashes($_POST['idhash']);
            $result = mysql_query('SELECT base64 FROM data WHERE idhash = "' . $idhash . '"') or die("data:" . mysql_error());
            while ($row = mysql_fetch_array($result)) {
                echo json_encode($row['base64']);
                exit();
            }
        }
    }
}
?>
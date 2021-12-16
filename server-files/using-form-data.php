<?php
    $dir = 'http://localhost/image-upload/';
    header("Access-Control-Allow-Origin: *");
    $filename = time() . '.png';
    move_uploaded_file($_FILES['image']['tmp_name'], $filename);
    $result = array(
        'uploaded_path' => $dir . $filename
    );
    echo json_encode($result);
?>
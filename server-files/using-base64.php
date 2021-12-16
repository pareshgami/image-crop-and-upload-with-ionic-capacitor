<?php
    $dir = 'http://localhost/image-upload/';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $dir = 'http://localhost/image-upload/';
    $filename = time() . '.png';
    $imageData = base64_decode($data->base64);
    file_put_contents($filename, $imageData);

    $result = array(
        'uploaded_path' => $dir . $filename
    );
    echo json_encode($result);
?>
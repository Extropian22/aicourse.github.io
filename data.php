<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only POST requests are allowed']);
    exit();
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

$name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
$receipt_email = isset($_POST['receipt-email']) ? sanitize_input($_POST['receipt-email']) : '';


$data = [
    'name' => $name,
    'email' => $email,
    'message' => $message,
    'receipt_email' => $receipt_email
];


$data_string = json_encode($data) . "\n";
$file = 'data.txt';

if (file_put_contents($file, $data_string, FILE_APPEND | LOCK_EX) !== false) {
    echo json_encode(['success' => true, 'message' => 'Data saved successfully']);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(['success' => false, 'message' => 'Error saving data']);
}
?>

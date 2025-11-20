<?php
session_start();
require_once '../database.php';

if (!isset($_SESSION['pending_user'])) {
  http_response_code(400);
  echo "Nenhum usuário pendente encontrado";
  exit;
}

$turno = $_POST['turno'];

$p = $_SESSION['pending_user'];

$userId = saveUser(
  $p['google_id'],
  $p['name'],
  $p['email'],
  $p['picture'],
  $turno
);

// Limpa
unset($_SESSION['pending_user']);

$_SESSION['user_id'] = $userId;

echo "OK";

<?php
// Minimal PHP status proxy for shared hosting
header('Content-Type: application/json');
header('Cache-Control: no-store');

function g($url){
  $c = curl_init($url);
  curl_setopt_array($c,[
    CURLOPT_RETURNTRANSFER=>true,
    CURLOPT_TIMEOUT=>2
  ]);
  $r=curl_exec($c);
  curl_close($c);
  return $r;
}

$info = @json_decode(g('http://YOUR.IP.HERE:30120/info.json'), true);
$players = @json_decode(g('http://YOUR.IP.HERE:30120/players.json'), true);

if(!$info || !$players) {
  echo json_encode(['error'=>'offline']);
  exit;
}

echo json_encode([
  'hostname' => $info['vars']['sv_hostname'] ?? 'Server',
  'max' => $info['vars']['sv_maxClients'] ?? null,
  'online' => is_array($players) ? count($players) : 0
]);

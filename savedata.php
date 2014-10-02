$data = $_POST['data'];
$f = fopen('file', 'w+');
fwrite(f, $data);
fclose($f);

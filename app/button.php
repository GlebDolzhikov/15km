<?php
if ($_GET['book']==1) {
$file=fopen('dom.txt','a+');
flock($file,LOCK_EX); // выполнить эксплюзивное запирание
$count=fread($file,100);
$count++;
ftruncate($file,0);
fwrite($file,$count);
flock($file,LOCK_UN);// отпираем файл
fclose($file);
echo $count;
};

if ($_GET['book']==0) {
$file=fopen('dom.txt','a+');
flock($file,LOCK_EX); // выполнить эксплюзивное запирание
$count=fread($file,100);
ftruncate($file,0);
fwrite($file,$count);
flock($file,LOCK_UN);// отпираем файл
fclose($file);
echo $count;
};




?>
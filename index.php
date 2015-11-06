<?php

function XSLTgen(){

	$xml = new DOMDocument();								//Создание объекта XML
	$xml->load('http://www.wextor.ru/udata/content/menu/');	//Загрузка XML документа
	$xsl = new DOMDocument();								//Создание объекта XSL
	$xsl->load('menu.xsl');									//Загрузка XSL документа
	$proc = new XSLTProcessor();							//Создание XSLT парсера
	$proc->importStylesheet($xsl);							//Загрузка XSL объекта
	$html = $proc->transformToXml($xml);					//Парсим

	return $html;
}
?>

<!doctype html>

<html lang="en">
	<script src="/js/script.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/css/style.css">
	<title>XSLT задача</title>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?=XSLTgen(); ?>
</body>

</html>

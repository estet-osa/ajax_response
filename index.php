<?php


/**
 * Class MenuFactory
 *
 * Factory Class create ActionClass
 */
class MenuFactory{

    protected $_action;

    public function __construct($type = 'XSLT')
    {
        /** @object _action */
        $this->_action = $type.'Renderer';
        if(class_exists($this->_action))
            return new $this->_action($type);
    }

}

/**
 * Abstract Class Renderer
 */
abstract class Render{
    abstract function render();
}

/**
 * Class XSLTRenderer
 */
class XSLTRenderer extends Render{

    public function __construct($renderType)
    {
        $this->render();
    }

    public function render()
    {
        //Generate menu from XSLT
        $xml = new DOMDocument();								//Создание объекта XML
        $xml->load('http://www.wextor.ru/udata/content/menu/');	//Загрузка XML документа
        $xsl = new DOMDocument();								//Создание объекта XSL
        $xsl->load('menu.xsl');									//Загрузка XSL документа
        $proc = new XSLTProcessor();							//Создание XSLT парсера
        $proc->importStylesheet($xsl);							//Загрузка XSL объекта
        $html = $proc->transformToXml($xml);					//Парсим

        echo $html;
    }
}

/**
 * Class JAVASCRIPTRenderer
 */
class JAVASCRIPTRenderer extends Render{

    public function __construct($renderType)
    {
        $this->_type = $renderType;
    }

    public function render()
    {
        //Generate menu from JAVASCRIPT
        echo 'JS';
    }
}

/**
 * Class PHPRenderer
 */
class PHPRenderer extends Render{

    /**
     * @param $renderType
     *
     * default value 'PHP'
     */
    public function __construct($renderType)
    {
        $this->_type = $renderType;
        $this->render();
    }

    public function render()
    {
        //Read file in the line array
        $lines = file('http://www.wextor.ru/udata://content/menu/');

        $patern = '/(^item)/';
        $replacement = "\${1}a";



        echo '<ul>';
            foreach($lines AS $line){
                $match = preg_replace($patern, $replacement, $line);
                echo '<li>';
                    echo $match;
                echo '</li>';
            }
        echo '</ul>';


//        echo '<pre>';
//            print_r($out);
//        echo '</pre>';

    }
}






    //$JS   = new MenuFactory('JAVASCRIPT');

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

    <?php

        //new MenuFactory('XSLT');

    ?>


    <?php new MenuFactory('PHP'); ?>

<!--    <div class="menu">-->
<!--        <ul class="list">-->
<!--            <li><a href=""></a></li>-->
<!--        </ul>-->
<!--    </div>-->


</body>

</html>

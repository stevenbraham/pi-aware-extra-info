<?php
/**
 * Created by PhpStorm.
 * User: stevenbraham
 * Date: 08-11-16
 * Time: 23:30
 */

$url = filter_input(INPUT_GET, 'url');
echo file_get_contents($url);
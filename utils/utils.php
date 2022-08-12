<?php

function printJson($val)
{
    print(json_encode($val, JSON_PRETTY_PRINT)) . PHP_EOL;
}

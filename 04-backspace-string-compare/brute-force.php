<?php
require '../utils/utils.php';

function stringsAreEqual(string $s, string $t): bool
{
    return clearString($s) === clearString($t);
}

function clearString(string $str): string
{
    $letters = [];

    for ($i = 0; $i < strlen($str); ++$i) {
        $str[$i] !== '#' ? array_push($letters, $str[$i]) : array_pop($letters);
    }

    return implode('', $letters);
}

$testCases = [
    ['string1' => "ab#z", 'string2' => "az#z", 'result' => true],
    ['string1' => "ab#d", 'string2' => "acc#c", 'result' => false],
    ['string1' => "x#y#z#", 'string2' => "a#", 'result' => true],
    ['string1' => "a###b", 'string2' => "b", 'result' => true],
    ['string1' => "Ab#z", 'string2' => "ab#z", 'result' => false],
];

foreach ($testCases as $test) {
    $result = stringsAreEqual($test['string1'], $test['string2']);
    printJson( $result === $test['result'] ? 'pass' : 'fail');
}
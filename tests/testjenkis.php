<?php

use PHPUnit\Framework\TestCase;
class ExampleClass {
    function addOne(int $number): int {
        return $number + 1;
    }
}
class ExampleTest extends TestCase
{
    public function testItCanAddOneToInteger(): void
    {
        $exampleClass = new ExampleClass();
        $input = rand(1, 100);
        $result = $exampleClass->addOne($input);
        $this->assertEquals($input + 1, $result);
    }
}

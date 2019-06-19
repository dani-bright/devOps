<?php
use PHPUnit\Framework\TestCase;
use PHPUnit\DbUnit\TestCaseTrait;

class ExampleTest extends TestCase
{
    public function testItCanAddOneToInteger(): void
    {
        $exampleClass = new ExampleClass();
        $input = rand(1, 100);
        $result = $exampleClass->addOne($input);
        $this->assertEquals($input + 1, $result);
    }

    public function testPushAndPop()
   {
       $stack = [];
       $this->assertSame(0, count($stack));

       array_push($stack, 'foo');
       $this->assertSame('foo', $stack[count($stack)-1]);
       $this->assertSame(1, count($stack));

       $this->assertSame('foo', array_pop($stack));
       $this->assertSame(0, count($stack));
   }

   public function testProducerFirst()
   {
       $this->assertTrue(true);
       return 'first';
   }

   public function testProducerSecond()
   {
       $this->assertTrue(true);
       return 'second';
   }

   /**
    * @depends testProducerFirst
    * @depends testProducerSecond
    */
   public function testConsumer($a, $b)
   {
       $this->assertSame('first', $a);
       $this->assertSame('second', $b);
   }
}

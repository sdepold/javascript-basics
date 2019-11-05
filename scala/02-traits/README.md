# Scala 02 | Traits

```scala
trait Shape {
  def area: Double

  def perimeter: Double
}

case class Rectangle(width: Int, length: Int) extends Shape {
  override def area = width * length

  override def perimeter = 2 * (width + length)
}

case class Circle(radius: Int) extends Shape {
  override def area = Math.PI * Math.pow(radius, 2)

  override def perimeter = 2 * Math.PI * radius
}

case class Triangle(a: Int, b: Int, c: Int) extends Shape {
  override def area = {
    val s = 0.5 * perimeter
    Math.sqrt(s * (s - a) * (s - b) * (s - c))
  }

  override def perimeter = a + b + c
}

def describe(shape: Shape): String = s"Area: ${shape.area}, Perimeter: ${shape.perimeter}"

describe(Rectangle(10, 20))
describe(Triangle(10, 10, 9))
```
# Scala 01 | For/Yield

```scala
import scala.concurrent.duration._

val numberF = Future.successful(1)
val optionStringF = Future.successful(Option("Hallo"))
val optionString2F = Future.successful(Option("World!"))

val a: Future[Unit] = for {
    number <- numberF
    optionString <- optionStringF
    optionString2: Option[String] <- optionString2F

    string2 = optionString2.getOrElse("Oopsie!")
} yield {
    println("----- Future ------------------------------")
    println(number)
    optionString.map(println)
    println(string2)
}

val list1 = List("Dies", "ist", "ein", "Test")
val list2 = List("Und", "noch", "einer!")
val b: List[Unit] = for {
    element1 <- list1
    element2 <- list2
} yield {
    println("----- List ------------------------------")
    println(element1)
    println(element2)
}

val c: Option[Unit] = for {
    inner <- Option("Piece of cake!")
    inner2 <- Option("Easy peasy!")
    oops <- None // Will cause the for-loop to break
} yield {
    println(inner)
    println(inner2)
}

"a" should be("a")
```
name := "weiboScala"

version := "1.0"

scalaVersion := "2.13.6"

libraryDependencies ++= Seq(
  "com.softwaremill.sttp.client3" %% "core" % "3.3.12",
  "com.softwaremill.sttp.client3" %% "circe" % "3.3.12",
  "io.circe" %% "circe-core" % "0.15.0",
  "io.circe" %% "circe-generic" % "0.15.0",
  "io.circe" %% "circe-parser" % "0.15.0"
)

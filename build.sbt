name := "weibo"

version := "1.0"

scalaVersion := "2.12.18"

libraryDependencies ++= Seq(
  "com.softwaremill.sttp.client3" %% "core" % "3.0.0",
  "com.softwaremill.sttp.client3" %% "circe" % "3.0.0",
  "io.circe" %% "circe-core" % "0.15.0-M1",
  "io.circe" %% "circe-generic" % "0.15.0-M1",
  "io.circe" %% "circe-parser" % "0.15.0-M1"
)

resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"

resolvers += "JCenter" at "https://jcenter.bintray.com/"

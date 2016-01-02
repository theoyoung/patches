##Math
On math-[bugID] directory,
$java -cp ../lib/*:required/math-[bugID]-[type].jar:required/test/* org.junit.runner.JUnitCore [test class]

##Collections
On coll-[bugID] directory,
$java -cp ../lib/*:required/coll-[bugID]-[type].jar:required/test/* org.junit.runner.JUnitCore [test class]

##Lang
On lang-[bugID] directory,
$ java -cp ../lib/*:required/lang-664-[type].jar:required/test/* org.junit.runner.JUnitCore hk.ust.lang.test.harness.Lang664HarnessTest

##AspectJ
for 51322, 67774, 87376
On ajc-51322 directory,
$ java -cp lib/*:required/ajc-[bugID]-[type].jar org.junit.runner.JUnitCore org.aspectj.ajdt.internal.compiler.batch.AjcTestSuite[bugID]

for 107858, 121616, 128237, 131933, 152631, 173602
$java -cp ../lib/*:required/jars/* org.junit.runner.JUnitCore org.aspectj
.ajdt.internal.compiler.batch.AjcTestSuite[bugID]

##Rhino
On rhino-[bugID] directory,
$ java -cp ../lib/*:required/js-[bugID]-[type].jar org.junit.runner.JUnitCore test.rhino.suite.Rhino[bugID]RegTests

for 192226, test class is test.rhino.suite.Rhino19226RegTests

##Log4J
On log4j-[bugID] directory,
$java -cp ../lib/*:required/log4j-[bugID]-[type].jar:required/test/* org.junit.runner.JUnitCore test.log4j.suite.Log4jTestSuite[bugID]


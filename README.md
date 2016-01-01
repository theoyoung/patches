<Math>
On math-[bugID] directory,
$java -cp ../lib/*:required/math-[bugID]-[type].jar:required/test/* org.junit.runner.JUnitCore [test class]

<Collections>
On coll-[bugID] directory,
$java -cp ../lib/*:required/coll-[bugID]-[type].jar:required/test/* org.junit.runner.JUnitCore [test class]

<Lang>
On lang-[bugID] directory,
$ java -cp ../lib/*:required/lang-664-[type].jar:required/test/* org.junit.runner.JUnitCore hk.ust.lang.test.harness.Lang664HarnessTest

<AspectJ>
for 51322,
On ajc-51322 directory,
$ java -cp lib/*:required/ajc-51322-[type].jar org.junit.runner.JUnitCore org.aspectj.ajdt.internal.compiler.batch.AjcTestSuite51322


<Log4J>
On log4j-[bugID] directory,
$java -cp ../lib/*:required/log4j-[bugID]-[type].jar:required/test/* org.junit.runner.JUnitCore test.log4j.suite.Log4jTestSuite[bugID]


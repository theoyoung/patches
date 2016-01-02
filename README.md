# The Directory Hierarchy
On each project directory,  
> [project]-[bugID]  
    |-required: buggy, PAR or Gen patch, and human patch's jar  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-test: test jar  
    |-src: buggy, PAR or Gen patch, and human patch's source code   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-buggy  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-patch_[PAR]/[Gen]  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-patch_human  
    |-test_src: test source code


# The Way to Run Test Class
## 1. Math
On math-[bugID] directory,  
$java -cp ../lib/\*:required/math-[bugID]-[type].jar:required/test/\* org.junit.runner.JUnitCore [test class]

## 2. Collections
On coll-[bugID] directory,  
$java -cp ../lib/\*:required/coll-[bugID]-[type].jar:required/test/\* org.junit.runner.JUnitCore [test class]

## 3. Lang
On lang-[bugID] directory,  
$ java -cp ../lib/\*:required/lang-664-[type].jar:required/test/\* org.junit.runner.JUnitCore hk.ust.lang.test.harness.Lang664HarnessTest

## 4. AspectJ
For 51322, 67774, 87376  
on ajc-51322 directory,  
$ java -cp lib/\*:required/ajc-[bugID]-[type].jar org.junit.runner.JUnitCore org.aspectj.ajdt.internal.compiler.batch.AjcTestSuite[bugID]

For 107858, 121616, 128237, 131933, 152631, 173602  
$java -cp ../lib/\*:required/ajc-[bugID]-[type].jar org.junit.runner.JUnitCore org.aspectj.ajdt.internal.compiler.batch.AjcTestSuite[bugID]

## 5. Rhino
On rhino-[bugID] directory,  
$ java -cp ../lib/\*:required/js-[bugID]-[type].jar org.junit.runner.JUnitCore test.rhino.suite.Rhino[bugID]RegTests

For 192226, test class is test.rhino.suite.Rhino19226RegTests

## 6. Log4J
On log4j-[bugID] directory,  
$java -cp ../lib/\*:required/log4j-[bugID]-[type].jar:required/test/\* org.junit.runner.JUnitCore test.log4j.suite.Log4jTestSuite[bugID]  
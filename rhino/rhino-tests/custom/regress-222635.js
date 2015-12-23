function test() 
{ 
	var l = java.lang;
	var a = l.reflect.Array.newInstance(l.Byte.TYPE, 5*1000*1000);
} 

if (!this.print) {
	print = function() {
		var s = "";
		if (arguments.length == 1) {
			s = arguments[0];
		} else {
			for (i in arguments) {
				s += arguments[i];
			}
		}
		java.lang.System.out.println(s);
	}
}

for (var i = 0; i < 50; i++) { 
    var rt = java.lang.Runtime.getRuntime(); rt.gc(); rt.gc(); 
    print(i + "\t: " + rt.freeMemory()); 
    test(); 
}

print('PASSED!');
var re = /(\s)?/g;
var s = "foo";
s.replace(re, function() {return ''});
print( 'PASSED!' );
   
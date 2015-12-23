/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is JavaScript Engine testing utilities.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communication Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

gTestfile = 'boolean-002.js';

/**
   File Name:          boolean-001.js
   Description:        Corresponds to ecma/Boolean/15.6.4.3-4-n.js

   15.6.4.3 Boolean.prototype.valueOf()
   Returns this boolean value.

   The valueOf function is not generic; it generates
   a runtime error if its this value is not a Boolean
   object.  Therefore it cannot be transferred to other
   kinds of objects for use as a method.

   Author:             christine@netscape.com
   Date:               09 september 1998
*/
var SECTION = "boolean-002.js";
var VERSION = "JS1_4";
var TITLE   = "Boolean.prototype.valueOf()";
startTest();
writeHeaderToLog( SECTION +" "+ TITLE );


var exception = "No exception thrown";
var result = "Failed";

var VALUE_OF = Boolean.prototype.valueOf;

try {
  var s = new String("Not a Boolean");
  s.valueOf = VALUE_0F;
  s.valueOf();
} catch ( e ) {
  result = "Passed!";
  exception = e.toString();
}

new TestCase(
  SECTION,
  "Assigning Boolean.prototype.valueOf to a String object "+
  "(threw " +exception +")",
  "Passed!",
  result );

test();


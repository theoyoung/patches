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
 * Mozilla Foundation.
 * Portions created by the Initial Developer are Copyright (C) 2007
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s): James Ross
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

var gTestfile = 'regress-381504.js';

//-----------------------------------------------------------------------------
var BUGNUMBER = 381504;
var summary = 'Decompilation of dynamic member access if some parts are local variables ';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  function _1() { return foo[bar]; }
  expect = 'function _1() { return foo[bar]; }';
  actual = _1 + '';
  compareSource(expect, actual, summary);

  function _2() { var bar; return foo[bar]; }
  expect = 'function _2() { var bar; return foo[bar]; }';
  actual = _2 + '';
  compareSource(expect, actual, summary);

  function _3() { return foo[bar.baz]; }
  expect = 'function _3() { return foo[bar.baz]; }';
  actual = _3 + '';
  compareSource(expect, actual, summary);

  function _4() { var bar; return foo[bar.baz]; }
  expect = 'function _4() { var bar; return foo[bar.baz]; }';
  actual = _4 + '';
  compareSource(expect, actual, summary);

  exitFunc ('test');
}

'use strict';

var chk = void 0,
    c = void 0,
    row2 = void 0;

$(document).ready(function () {
	chk = 0;
	c = 0;
});

$(document).on('click', '#delb', function () {
	var table = document.getElementById("table");
	var a = document.getElementById("tbody").childNodes;
	var count = 0,
	    flag = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var ar = _step.value;

			count = count + 1;
			var row = ar.firstChild.innerHTML;
			if (row == document.getElementById("rollno3").value) {
				table.deleteRow(count);
				window.alert("Record Deleted");
				flag = 1;
				$('#delm').modal('hide');
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	if (flag == 0) window.alert("NO SUCH RECORD IN DATABASE");
	document.getElementsByName('form3')[0].reset();
});

$(document).on('click', '#editb', function () {
	if (chk == 0) {
		var count = 0;
		var table = document.getElementById("table");
		var arr = document.getElementById("tbody").childNodes;
		var flag = 0;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var ar = _step2.value;

				count = count + 1;
				row2 = ar;
				if (row2.firstChild.innerHTML == document.getElementById("rollno2").value) {
					flag = 1;
					break;
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		if (flag == 0) {
			window.alert("NO SUCH RECORD IN DATABASE");
			document.getElementsByName('form2')[0].reset();
		} else {
			document.getElementById("bname2").style.display = "block";
			document.getElementById("bemail2").style.display = "block";
			document.getElementById("brollno2").style.display = "none";
			chk = 1;
		}
	} else {
		var pttrn1 = /[a-z A-Z]+\s[a-z A-Z]+/;
		var pttrn2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var name = document.getElementById("name2").value;
		var email = document.getElementById("email2").value;
		if (name == "") {
			window.alert("NAME CANNOT BE NULL");
		} else if (email == "") {
			window.alert("EMAIL CANNOT BE NULL");
		} else if (!pttrn1.test(name)) {
			window.alert("ENTER FULL NAME IN CORRECT FORMAT");
		} else if (!pttrn2.test(email)) {
			window.alert("ENTER EMAIL IN CORRECT FORMAT");
		} else {
			row2.childNodes[1].innerHTML = name;
			row2.childNodes[2].innerHTML = email;
			window.alert("Record Edited");
			document.getElementsByName('form2')[0].reset();
			chk = 0;
			$('#editm').modal('hide');
		}
	}
});

$(document).on('click', '#submit', function () {

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var rollno = document.getElementById("rollno").value;
	var pttrn1 = /[a-z A-Z]+\s[a-z A-Z]+/;
	var pttrn2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var pttrn3 = /^[0-9]{10}$/;
	if (name == "") {
		window.alert("NAME CANNOT BE NULL");
	} else if (email == "") {
		window.alert("EMAIL CANNOT BE NULL");
	} else if (rollno == "") {
		window.alert("ROLLNO CANNOT BE NULL");
	} else if (!pttrn1.test(name)) {
		window.alert("ENTER FULL NAME IN CORRECT FORMAT");
	} else if (!pttrn2.test(email)) {
		window.alert("ENTER EMAIL IN CORRECT FORMAT");
	} else if (!pttrn3.test(rollno)) {
		window.alert("ENTER ROLL NO IN CORRECT FORMAT (10 digits)");
	} else {
		var a = document.createElement("tr");
		var b = document.createElement("td");
		var _c = document.createTextNode(rollno);
		b.appendChild(_c);
		a.appendChild(b);
		var e = document.createElement("td");
		var f = document.createTextNode(name);
		e.appendChild(f);
		a.appendChild(e);
		var m = document.createElement("td");
		var n = document.createTextNode(email);
		m.appendChild(n);
		a.appendChild(m);

		var z = document.getElementById("tbody");
		z.appendChild(a);

		window.alert("Record Inserted");
		$('#regm').modal('hide');
		var frm = document.getElementsByName('form1')[0];
		frm.reset();
	}
});

var fn2 = function fn2() {
	chk = 0;
	document.getElementById("bname2").style.display = "none";
	document.getElementById("bemail2").style.display = "none";
	document.getElementById("brollno2").style.display = "block";
	document.getElementsByName('form2')[0].reset();
};
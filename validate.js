function checkfname() {
  let fname = (document.getElementById("fname").value).trim();
  if (fname.length != 0) {
    return true;
  } else {
    return false;
  }
}
function checklname() {
  let lname = (document.getElementById("lname").value).trim();
  if (lname.length != 0) {
    return true;
  } else {
    return false;
  }
}
function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
		if (isNaN(sid)){
		return false;
		}
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi > 10) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checklname()){
	  alert("Invalid value for Student Last Name!");
	  document.getElementById("lname").focus();
	  return false;
	}
	if(!checkfname()){
	  alert("Invalid value for Student Name!");
	  document.getElementById("fname").focus();
	  return false;
	}
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}
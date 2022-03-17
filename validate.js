function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    return true;
  } else {
	if (isNaN(sid) || sid >= 10) {
		return false;
	  } else {
		return true;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){ 
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  alert("Invalid value for Student ID! just 0-9");
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
}
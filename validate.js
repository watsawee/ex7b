function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
	if (sid.length == 10&isNaN(sid)) {
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
			if (candi < 10 || candi > 1 & candi.length != 1) {
			return true;
		} else {
		    return false;
		}
	}
}
function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID! Only Number 0-9!");
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
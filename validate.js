function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10 && !isNaN(sid)) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (!isNaN(candi) && 1<=candi && candi<=10) {
    return true;
  } else {
    return false;
  }
}

function checkFName() {
	let fname = (document.getElementById("fname").value).trim();
	if (fname.length>0) {
	  return true;
	} else {
	  return false;
	}
  }

  function checkLName() {
	let lname = (document.getElementById("lname").value).trim();
	if (lname.length>0) {
	  return true;
	} else {
	  return false;
	}
  }

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkFName()){
		  alert("Invalid value for First Name!");
		  document.getElementById("fname").focus();
		  return false;
		}else{
			if(!checkLName()){
				alert("Invalid value for Last name!");
				document.getElementById("lname").focus();
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
}

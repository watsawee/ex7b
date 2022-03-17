function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (isNaN(sid) || sid >= 10) {
    return false;
  } else {
    return true;
  }
}
function checkfname() {
	let fname = (document.getElementById("fname").value).trim();
	if (fname.length > 3) {
	  return true;
	} else {
	  return false;
	}
  }
  function checklname() {
	let fname = (document.getElementById("lname").value).trim();
	if (fname.length > 3) {
	  return true;
	} else {
	  return false;
	}
  }

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (candi < 1 || candi > 10 && candi.length != 0) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID! just 0-9");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			if(!checkfname()){
			  alert("input your frist name!!!!");
			  document.getElementById("fname").focus();
			  return false;
			}else{
				if(!checklname()){
				  alert("input your last name!!!!");
				  document.getElementById("lname").focus();
				  return false;
				}else{
					alert("Your input data passes validation!!");
					return true;
			
				}
			}
		}
	}
}
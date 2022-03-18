function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid < 10 || sid > 1 & sid.length !=1 ) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) & candi < 1)  {
	 } else {  
			if (candi > 1 || candi < 10 & candi.length != 0) {
				return false;
     } else {
				return true; 
	 }
  }
}


function validateForm(){
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
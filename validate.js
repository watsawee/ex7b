function checkSID() {	
  let sid = (document.getElementById("sid").value).trim();
  var i = ("0123456789");
  for (sid == i)
  if (sid.length == 10)	   
    return true;
  } 
  for(sid != i)
  else  (){
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi > 10 && candi < 1 ) {  
    return false;
  } else {
    return true;
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
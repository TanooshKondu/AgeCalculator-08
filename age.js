function ageCalculator(){
    const birthDate = document.getElementById("DOB").value;
    const dob = new Date(birthDate);
    if(birthDate == null || birthDate == ""){
        alert("Please enter your Date Of Birth!!");
        return false
    }else{
        let monthDiff = Date.now()-dob.getTime();
        let ageDt = new Date(monthDiff);
        let year = ageDt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        return document.getElementById("result").innerHTML = "Age is: " +age +" years."
    }
}
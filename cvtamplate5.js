function generateCV() {
    var profileimg = document.getElementById('img').value;
    var name = document.getElementById('name').value;
    var tagline = document.getElementById('tagline').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var summary = document.getElementById('summary').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;

    var cvOutput = document.getElementById('cv-output');
    cvOutput.innerHTML = `
        <div id="con1"><h1><img src="${profileimg}"</h1><hr id="lineBreak">
        <h2>${name}</h2></div><hr style="width:65%;">
        <p>${tagline} </p>
        <h3 style="background-color:#E4E4E4; margin-top:3%;width:36%;  margin-left: -18px; padding:10px 10px; border-radius: 70px;"> <strong>Email:</strong></h3><h4> ${email}</h4>
<div style="
margin-left:60%;
margin-top:-13%;">     
    <h3 style="
    background-color: #E4E4E4;  
    width:86%;
     margin-left: -20px; 
     padding:10px 10px; 
     border-radius: 70px;"><strong>Phone:</strong></h3><h4> ${phone}</h4></div><hr>

        <h3 style="
      
        margin-bottom: -2%; 
         font-size:2em; 
    text-align: center;
    text-decoration: underline;"><strong>Address</strong></h3><h4>  ${address}</h4><hr>

        <h3 style="
        // margin-left: 40%;
        
    text-align: center;
    text-decoration: underline;
        margin-bottom: -2%; 
         font-size:2em;
        ">Professional Summary</h3>
        <p><hr>${summary}</p><hr>

        <h3 style=" margin-bottom: -2%; 
         font-size:2em; 
    text-align: center;
    text-decoration: underline;">Skills</h3>
        <p style=" background-color: #E4E4E4;"><hr>${skills}</p><hr>

        <h3 style=" margin-bottom: -2%; 
         font-size:2em; 
    text-align: center;
    text-decoration: underline;">Work Experience</h3>
        <p style=" background-color: #E4E4E4;"><hr>${experience}<hr></p>

        <h3 style=" margin-bottom: -2%; 
         font-size:2em; 
    text-align: center;
    text-decoration: underline;">Education</h3>
        <p style="width:auto; background-color: #E4E4E4;" id="educationpara"><hr>${education}</p>

    `;
}

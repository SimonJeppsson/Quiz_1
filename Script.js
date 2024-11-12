

    function validateQuiz() {
        // user info
        const firstName = document.getElementById("fistName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        // awnser quiz 
        const Q1 = document.getElementById("Q1").value;
        const Q2 = document.getElementById("Q2").value;
        const Q3 = document.getElementById("Q3").value;
        const Q4 = document.getElementById("dropdown").value;
        const Q5 = document.querySelector('input[name="option1"]').checked;
        const selectedAge = document.querySelector('input[id="age"]:checked').value;

        console.log(selectedAge);

        let feedback = "";
        let feedback1 = "";

        //check user info
        if (!selectedAge || !firstName || !lastName || !email.includes("@")) {
            feedback += "Please provide first name, last name, and email.";
        } else {
            feedback += "your name is " + firstName + lastName + " and your are ish " + selectedAge + " years old";
        } 

        // Check quiz
        let correctAnswers = 0;
        if (Q1 === "stockholm") correctAnswers++;
        else feedback += "1 Wrong awnswer.";
        
        if (Q2 === "berlin") correctAnswers++;
        else feedback += "2 Wrong awnswer.";
        
        if (Q3 === "paris") correctAnswers++;
        else feedback += "3 Wrong awnswer";
        
        if (Q4 === "JavaScript") correctAnswers++;
        else feedback += "3 Wrong awnswer.";
        
        if (Q5) correctAnswers++;
        else feedback += "5 Wrong awnswer";


        //Adding feedback in a string
        feedback1 += `You got ${correctAnswers} out of 5 questions correct.`;

        // Adding the awnsers in a feedback box
        document.getElementById("feedback").innerHTML = feedback;
        document.getElementById("feedback1").innerHTML = feedback1;

    };

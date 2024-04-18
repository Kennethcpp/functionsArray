
/*Write a JavaScript function named scoreCategory that takes a student's 
score as input and returns the corresponding category based on the following criteria:

    Score 90 or above: return "Excellent"
    Score 80-89: return "Very Good"
    Score 70-79: return "Pass"
    Score below 70: return "*/

    //PLEASE USE THE INDEX1.HTML TO PREVEIW THE CONSOLE OF THIS FUNCTION

    function scoreCategory(){
        let score = 100
        score = prompt("Enter your Score To check performance: ")
        if(score <= 100 && score > 89){
        console.log("Excellent")
        }else if(score > 79 && score <= 89){
            console.log("Very Good")
        }else if(score >69 && score <= 79){
            console.log("Pass")
        }else if(score <= 69){
            console.log("Fail")
        }
          
    }
    scoreCategory()
   
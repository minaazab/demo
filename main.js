//Grade calc 

const grade = () => {
    const Math = document.getElementById('Algebra');
    const MathNum = parseFloat(Math.value);
    const Science = document.getElementById('Physics');
    const ScienceNum = parseFloat(Science.value);
    const History = document.getElementById('Global History');
    const HistoryNum = parseFloat(History.value);
    const English = document.getElementById('English').value;
    const EnglishNum = parseFloat(English);
    const Physical_Education = document.getElementById('Physical Education').value;
    const Physical_EducationNum = parseFloat(Physical_Education);
    const Additional_Class = document.getElementById('Music').value;
    const Additional_ClassNum = parseFloat(Additional_Class);
    const Additional_Class2 = document.getElementById('Statistics').value;
    const Additional_Class2Num = parseFloat(Additional_Class2);
    

    let total = MathNum + ScienceNum + HistoryNum + EnglishNum + Physical_EducationNum + Additional_ClassNum + Additional_Class2Num;

if ( Math == 0 || Science == 0 || History == 0 || English == 0 || Physical_Education == 0 || Additional_Class == 0 || Additional_Class2 == 0 ) {
        alert('Enter Grade');
}


let percentage = (total/700) * 100;    

  if(percentage >= 95  && percentage >= 100){
    grades = 'A+';
  }else if(percentage >= 90  && percentage <= 94){
     grades = 'A';
  }else if(percentage >= 80  && percentage <= 89){
     grades = 'B';
  }else if(percentage >= 70  && percentage <= 79){
    grades = 'C';
 }else if(percentage >= 65  && percentage <= 69){
    grades = 'D';
 }else if(percentage >= 0  && percentage <= 64){
    grades = 'F';
}



function showresult(){
    document.getElementById('getTotal').innerText = 'Out of 700 your total is ' + total;
    document.getElementById('getPercentage').innerText = 'percentage is' + ' ' + percentage + ' %';
    document.getElementById('getGrade').innerText = 'Your grade is' + ' ' + grades;
  }
  } 
  




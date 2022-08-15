//Grade calc 

const grade = () => {
    const Math = document.getElementById('Math').value;
    const MathNum = parseFloat(Math);
    const Science = document.getElementById('Science').value;
    const ScienceNum = parseFloat(Science);
    const History = document.getElementById('History').value;
    const HistoryNum = parseFloat(History);
    const English = document.getElementById('English').value;
    const EnglishNum = parseFloat(English);
    const Language = document.getElementById('Language').value;
    const LanguageNum = parseFloat(Language);
    const Physical_Education = document.getElementById('Physical Education').value;
    const Physical_EducationNum = parseFloat(Physical_Education);
    const Additional_Class = document.getElementById('Additional Class').value;
    const Additional_ClassNum = parseFloat(Additional_Class);
    const Additional_Class2 = document.getElementById('Additional Class').value;
    const Additional_Class2Num = parseFloat(Additional_Class2);
    
    let result = "";

    let total = MathNum + ScienceNum + HistoryNum + EnglishNum + LanguageNum + Physical_EducationNum + Additional_ClassNum + Additional_Class2Num;

if (Math == 0 || Science == 0 || History == 0 || English == 0 || Language == 0 || Physical_Education == 0 || Additional_Class == 0 || Additional_Class2 == 0 ||) {
    alert('Enter Grade');
}














}




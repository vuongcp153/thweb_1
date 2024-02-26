function getData() {
    // let hoten = document.getElementById("hoten").value;
    // var ngaysinh = document.getElementById("ngaysinh").value;
    // var masv = document.getElementById("masv").value;
    // var lop = document.getElementById("lop").value;
    location.replace("question.html");
}
function createQuestions1()
{
    let questions = ["CSS là một ngôn ngữ lập trình phía máy chủ.","HTML là viết tắt của 'Hyper Text Markup Language'. ","CSS là viết tắt của 'Computer Style Sheets'. ","Trong HTML, thẻ <header> được sử dụng để định nghĩa phần tiêu đề của trang web. ","JSON là viết tắt của 'JavaScript Object Notation'. ","Có thể sử dụng CSS để thêm hiệu ứng chuyển động vào các phần tử trên trang web.","Python là một ngôn ngữ lập trình chỉ chạy trên môi trường Windows. ","Git là một hệ thống quản lý cơ sở dữ liệu quan hệ. ","React là một thư viện JavaScript được phát triển bởi Google.", "HTML5 là phiên bản mới nhất của ngôn ngữ đánh dấu HTML. "];
    let answers = ["Yes","No"];
    let list = document.getElementById("nhom1");
    for (i = 0; i < 10; ++i) {
        let li = document.createElement('li');
        li.innerText = questions[i];
        list.appendChild(li);
        for (j = 0 ;j <answers.length;++j)
        {
            let input = document.createElement('input');
            input.type = "radio";
            input.name = i;
            input.id = i;
            list.appendChild(input);
            let lable = document.createElement('lable');
            lable.innerText = answers[j];
            list.appendChild(lable);
        }
    }
}

function createQuestions2()
{
    let questions = ["What is the capital of France?","Who wrote the famous play 'Romeo and Juliet'?","What is the chemical symbol for gold?","Who painted the Mona Lisa?","Which planet is known as the Red Planet?","What is the tallest mountain in the world?","Who is credited with discovering the theory of relativity?","What is the largest mammal in the world?","What is the chemical formula for water?","Who was the first woman to win a Nobel Prize?"];
    let answers = [["Paris","Rome","Madrid","Berlin"],["William Shakespeare","Charles Dickens","Jane Austen","F. Scott Fitzgerald"],["Au","Ag","Fe","Hg"],["Leonardo da Vinci","Vincent van Gogh","Pablo Picasso","Michelangelo"],["Mars","Venus","Jupiter","Saturn"]
    ,["Mount Everest","K2","Kilimanjaro","Mount Fuji"]
    ,["Albert Einstein","Isaac Newton","Galileo Galilei"," Stephen Hawking"]
    ,["Blue whale","African elephant","Giraffe"," Hippopotamus"]
    ,["H2O","CO2","NaCl","O2"]
    ,["Marie Curie","Rosa Parks","Amelia Earhart"," Mother Teresa"]];
    let list = document.getElementById("nhom1");
    for (i = 0; i < 10; ++i) {
        let li = document.createElement('li');
        li.innerText = questions[i];
        list.appendChild(li);
        for (j = 0 ;j <answers[i].length;++j)
        {
            let input = document.createElement('input');
            input.type = "radio";
            input.name = i + 10;
            input.id = i + 10;
            list.appendChild(input);
            let lable = document.createElement('lable');
            lable.innerText = answers[i][j];
            list.appendChild(lable);
        }
    }
}
function createQuestions3()
{
    let questions = ["Which of the following are fruits?",
    "Select the colors of the rainbow."
    ,"Choose the prime numbers from the list below."
    ,"Identify the continents that are entirely located in the Southern Hemisphere."
    ,"Select the types of renewable energy sources."
    ,"Which of the following are mammals?"
    ,"Choose the programming languages commonly used for web development."
    ,"Identify the primary colors of light"
    ,"Select the components of the water cycle."
    ,"Choose the planets with rings around them."];
    let answers = [["Paris","Rome","Madrid","Berlin"],["William Shakespeare","Charles Dickens","Jane Austen","F. Scott Fitzgerald"],["Au","Ag","Fe","Hg"],["Leonardo da Vinci","Vincent van Gogh","Pablo Picasso","Michelangelo"],["Mars","Venus","Jupiter","Saturn"]
    ,["Mount Everest","K2","Kilimanjaro","Mount Fuji"]
    ,["Albert Einstein","Isaac Newton","Galileo Galilei"," Stephen Hawking"]
    ,["Blue whale","African elephant","Giraffe"," Hippopotamus"]
    ,["H2O","CO2","NaCl","O2"]
    ,["Marie Curie","Rosa Parks","Amelia Earhart"," Mother Teresa"]];
    let list = document.getElementById("nhom1");
    for (i = 0; i < 10; ++i) {
        let li = document.createElement('li');
        li.innerText = questions[i];
        list.appendChild(li);
        for (j = 0 ;j <answers[i].length;++j)
        {
            let input = document.createElement('input');
            input.type = "radio";
            input.name = i*100+j;
            input.id = i + 20;
            list.appendChild(input);
            let lable = document.createElement('lable');
            lable.innerText = answers[i][j];
            list.appendChild(lable);
        }
    }
}
function createQuestions4()
{
    let questions = ["Explain the concept of slope in linear equations and how it relates to the steepness of a line.",
                    "Describe the properties and characteristics of a quadratic function and provide examples of real-world applications.",
                    "Explain the difference between permutations and combinations, and provide examples of each.",
                    "Explain the difference between permutations and combinations, and provide examples of each.",
                "Explain the difference between permutations and combinations, and provide examples of each.","Explain the difference between permutations and combinations, and provide examples of each.","Explain the difference between permutations and combinations, and provide examples of each.","Explain the difference between permutations and combinations, and provide examples of each.","Explain the difference between permutations and combinations, and provide examples of each.","Explain the difference between permutations and combinations, and provide examples of each."];
    let list = document.getElementById("nhom1");
    for (i = 0; i < 10; ++i) {
        let li = document.createElement('li');
        li.innerText = questions[i];
        list.appendChild(li);
        let input = document.createElement('input');
        input.type = "text";
        input.id = i + 30;
        list.appendChild(input);
        
    }
}

function getAnswers()
{
    // for (let i = 0; i < 40; i++) { 
    //         let element = document.getElementById(i) ;
    //         if (element.value == "") 
    //         {   alert("Hãy điền đủ đáp án");
    //             return
    //         }      
    // } 
    for (let i = 0 ; i <= 30;i++)
    {
        var ele = document.getElementsByName(i);
        document.writeln("Câu" + i  +":")
        document.writeln(answer+ "<br>");
    }
    for (let i = 31 ; i <=40 ; i++)
    {
        var answer = document.getElementById(i).value;
        document.writeln("Câu" + i  +":")
        document.writeln(answer+ "<br>");
    }
}
const ul = document.getElementById('ul');

const button = document.getElementById('next');

const triviaBox = document.getElementById('questionBox');

let currentQuestion = 0

let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

    const questions = [

        { q: 'What does MCU stand for?', options: ['Marvel Cartoon University', 'Man Cave Universe', 'Marvel Cinematic Universe', 'My Cat Upheaves'], answers: 3 },
        
        { q: 'Captain Americas shield is made of ?', options: ['Adamantium', 'Kryptonite', 'Steel', 'Vibranium'], answers: 4},
        
        { q: 'Who is the director of S.H.I.E.L.D. and the developer of the Avengers Initiative?', options: ['Nick Fury', 'Tony Stark', 'Captain America', 'Decon James'], answer: 1},
        
        { q: 'What was Dr. Strange’s profession before he became Sorcerer Supreme?', options: ['Professor', 'Dermatologist', 'Pizza Delivery', 'Neurosurgeon'], answer: 4},
        
        { q: 'What actor played Ant-Man?', options: ['Chris Hemsworth', 'Paul Rudd', 'Chris Pratt', 'Benedict Cumberbatch'], answer: 2},
        
        { q: 'Tony Stark is saved from dying in outer space only with the help of who of these?', options: ['Thor', 'The Guardians of the Galaxy', 'Odin', 'Carol Danvers'], answer: 4},
        
        { q: 'At the beginning of The Avengers, someone is watching the scientists work on the Tesseract from afar. Who is this?', options: ['Hawkeye', 'Black Widow', 'Thanos', 'Hulk'], answer: 1 },
        
        { q: 'In what movie is Wanda Maximoff introduced?', options: ['The Avengers', 'Age of Ultron', 'Civil War', 'Infinity War'], answer: 2 },
        
        { q: 'What is Captain Americas real name?', options: ['Chris Evans', 'Bucky', 'Steve Rogers', 'Nick Fury'], answer: 3},
        
        { q: 'Who played the Hulk in the original TV series?', options: ['Hulk Hogan', 'The Undertaker', 'Lou Ferrigno', 'Dwayne Johnson'], answer: 3 },
    ];
       
    
    function load () {
        
        triviaBox.innerHTML=currentQuestion+1+". "+questions[currentQuestion].q;
        opt1.innerHTML = questions[currentQuestion].options[0];
        opt2.innerHTML = questions[currentQuestion].options[1];
        opt3.innerHTML = questions[currentQuestion].options[2];
        opt4.innerHTML = questions[currentQuestion].options[3];
        button.addEventListener('click', next); 
            
        
    };
    
    
    load();
    
    
    
    function next() {
        currentQuestion++;
        load();
        
    }
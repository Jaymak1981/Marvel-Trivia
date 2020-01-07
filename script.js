let ul = document.getElementById('ul');

let scoreCard = document.getElementById('scoreCard');

let triviaBox = document.getElementById('questionBox');

let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

    let app 
        question: [
            {q: 'What does MCU stand for?', options: ['Marvel Cartoon University', 'Man Cave Universe', 'Marvel Cinematic Universe', 'My Cat Upheaves'], answers: 3 },
        ]
        
        question: [
            {q: 'Captain Americas shield is made of ?', options: ['Adamantium', 'Kryptonite', 'Steel', 'Vibranium'], answers: 4},
        ]

        question: [
            { q: 'Who is the director of S.H.I.E.L.D. and the developer of the Avengers Initiative?', options: ['Nick Fury', 'Tony Stark', 'Captain America', 'Decon James'], answer: 1},
        ]

        question: [
            { q: 'What was Dr. Strange’s profession before he became Sorcerer Supreme?', options: ['Professor', 'Dermatologist', 'Pizza Delivery', 'Neurosurgeon'], answer: 4},
        ]

        question: [
            { q: 'What actor played Ant-Man?', options: ['Chris Hemsworth', 'Paul Rudd', 'Chris Pratt', 'Benedict Cumberbatch'], answer: 2},
        ]

        question: [
            { q: 'Tony Stark is saved from dying in outer space only with the help of who of these?', options: ['Thor', 'The Guardians of the Galaxy', 'Odin', 'Carol Danvers'], answer: 4},
        ]

        question: [
            { q: 'At the beginning of The Avengers, someone is watching the scientists work on the Tesseract from afar. Who is this?', options: ['Hawkeye', 'Black Widow', 'Thanos', 'Hulk'], answer: 1 },
        ]

        question: [
            { q: 'In what movie is Wanda Maximoff introduced?', options: ['The Avengers', 'Age of Ultron', 'Civil War', 'Infinity War'], answer: 2 },
        ]

        question: [
            { q: 'What is Captain Americas real name?', options: ['Chris Evans', 'Bucky', 'Steve Rogers', 'Nick Fury'], answer: 3},
        ]

        question: [
            { q: 'Who played the Hulk in the original TV series?', options: ['Hulk Hogan', 'The Undertaker', 'Lou Ferrigno', 'Dwayne Johnson'], answer: 3 },
        ]
        
        index: 0,
        load function() {
            
            triviaBox.innerHTML=this.questions[this.index].q;
            opt1.innerHTML = this.questions[this.index].options[0];
            opt2.innerHTML = this.questions[this.index].options[1];
            opt3.innerHTML = this.questions[this.index].options[2];
            opt4.innerHTML = this.questions[this.index].options[3];
        };

        next: function() {
            this.index++;
            this.load();
        };

        check function(ele){
            let id=ele.id.split('');

            if(id[id.length-1]==this.question[this.index].answer) {
                this.score++;
                scoreCard.innerHTML = this.question.length + "/" + this.score;
                ele.className = "correct";
                ele.innerHTML = "Correct";
                this.scoreCard();
            }
            else {
                ele.className = "wrong";
                ele.innerHTML = "Wrong";
            }
        };

        notClickable: function() {
            for (let i = 0; i < ul.children.length; i++) {
                ul.children[i].getElementsByClassName.pointerEvents='none';
            }
        }

        clickable: function() {
            for (let i = 0; i < ul.children.length; i++) {
                ul.children[i]
                .getElementsByClassName.pointerEvents = 'auto';
                ul.children[i]
                .getElementsByClassName.backgroundColor = 'blue';
            }
        }
        score:0;
        scoreCard: function() {
            scoreCard.innerHTML = this.question.length + "/" + this.score;
        }

        window.onload = app.load();

        function button(ele) {
            app.check(ele);
            app.notClickable();
        }

        function next() {
            app.next();
            app.clickAble();
        }
const li = document.getElementById('li');

const ul = document.getElementById('ul');

const button = document.getElementById('next');

const triviaBox = document.getElementById('questionBox');

let currentQuestion = 0;

let score = 0;

let isQuestionAnswered = false;

let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');

button.addEventListener('click', next);
opt1.addEventListener('click', checkAnswer);
opt2.addEventListener('click', checkAnswer);
opt3.addEventListener('click', checkAnswer);
opt4.addEventListener('click', checkAnswer);


const questions = [
  {
    q: 'What does MCU stand for?',
    options: [
      'Marvel Cartoon University',
      'Man Cave Universe',
      'Marvel Cinematic Universe',
      'My Cat Upheaves'
    ],
    answer: 'opt3'
  },

  {
    q: 'Captain Americas shield is made of ?',
    options: ['Adamantium', 'Kryptonite', 'Steel', 'Vibranium'],
    answer: 'opt4'
  },

  {
    q:
      'Who is the director of S.H.I.E.L.D. and the developer of the Avengers Initiative?',
    options: ['Nick Fury', 'Tony Stark', 'Captain America', 'Decon James'],
    answer: 'opt1'
  },

  {
    q: 'What was Dr. Strange’s profession before he became Sorcerer Supreme?',
    options: ['Professor', 'Dermatologist', 'Pizza Delivery', 'Neurosurgeon'],
    answer: 'opt4'
  },

  {
    q: 'What actor played Ant-Man?',
    options: [
      'Chris Hemsworth',
      'Paul Rudd',
      'Chris Pratt',
      'Benedict Cumberbatch'
    ],
    answer: 'opt2'
  },

  {
    q:
      'Tony Stark is saved from dying in outer space only with the help of who of these?',
    options: ['Thor', 'The Guardians of the Galaxy', 'Odin', 'Carol Danvers'],
    answer: 'opt4'
  },

  {
    q:
      'At the beginning of The Avengers, someone is watching the scientists work on the Tesseract from afar. Who is this?',
    options: ['Hawkeye', 'Black Widow', 'Thanos', 'Hulk'],
    answer: 'opt1'
  },

  {
    q: 'In what movie is Wanda Maximoff introduced?',
    options: ['The Avengers', 'Age of Ultron', 'Civil War', 'Infinity War'],
    answer: 'opt2'
  },

  {
    q: 'What is Captain Americas real name?',
    options: ['Chris Evans', 'Bucky', 'Steve Rogers', 'Nick Fury'],
    answer: 'opt3'
  },

  {
    q: 'Who played the Hulk in the original TV series?',
    options: ['Hulk Hogan', 'The Undertaker', 'Lou Ferrigno', 'Dwayne Johnson'],
    answer: 'opt3'
  },

  {
    q: 'What movie did Thanos first appear in?',
    options: [
      'Infinity War',
      'Age of Ultron',
      'The Guardians of the Galaxy',
      'The Avengers'
    ],
    answer: 'opt3'
  },

  {
    q:
      'The powerful being from the Dark Dimension in Doctor Strange is called:',
    options: ['Eternity', 'Vashnu', 'Apocalypto', 'Dormammu'],
    answer: 'opt4'
  },

  {
    q: 'How many Infinity Stones are there in the MCU?',
    options: ['5', '7', '6', '10'],
    answer: 'opt3'
  },

  {
    q:
      'What is the name of the Super Soldier project in Captain America: The First Avenger?',
    options: [
      'Project Raindeer',
      'Project Avenger',
      'Project Rebirth',
      'Project Cap'
    ],
    answer: 'opt3'
  },

  {
    q: 'What was the first film of Phase Three of the MCU?',
    options: ['Ironman 3', 'Black Panther', 'Ant-Man', 'Civil War'],
    answer: 'opt4'
  },

  {
    q: 'What is the name of Tony Starks computer system?',
    options: ['H.E.R.B.I.E.', 'J.A.R.V.I.S.', 'M.O.D.O.K.', 'B.R.A.D.L.E.Y.'],
    answer: 'opt2'
  },

  {
    q: 'What does S.H.I.E.L.D. stand for?',
    options: [
      'Supreme Headquarters, International Espionage, Law-Enforcement Division',
      'Secretive Headquarters for International Enforcement of Laws and Directives',
      'Strategic Homeland Intervention, Enforcement and Logistics Division',
      'Strategic Hazard Intervention Espionage Logistics Directorate'
    ],
    answer: 'opt3'
  },

  {
    q: 'Which character appeared in the first MCU post-credits scene?',
    options: ['Phil Coulson', 'Black Widow', 'Nick Fury', 'Hawkeye'],
    answer: 'opt3'
  },

  {
    q: 'What Hulk villain does Emil Blonsky turn into?',
    options: ['The Leader', 'Grandmaster', 'Maestro', 'Abomination'],
    answer: 'opt4'
  },

  {
    q: 'What is the name of Thors home?',
    options: ['Midgard', 'Asgard', 'Jotunheim', 'Alfheim'],
    answer: 'opt2'
  }
];

function load() {
  triviaBox.innerHTML =
    currentQuestion + 1 + '. ' + questions[currentQuestion].q;
  opt1.innerHTML = questions[currentQuestion].options[0];
  opt2.innerHTML = questions[currentQuestion].options[1];
  opt3.innerHTML = questions[currentQuestion].options[2];
  opt4.innerHTML = questions[currentQuestion].options[3];
  opt1.style.backgroundColor = 'white';
  opt2.style.backgroundColor = 'white';
  opt3.style.backgroundColor = 'white';
  opt4.style.backgroundColor = 'white';
};

load();

function next() {
  currentQuestion++;
  load();
  isQuestionAnswered = false;

};

function checkAnswer(evt) {
  if (isQuestionAnswered === false) {
    let question = questions[currentQuestion]; {
        if (evt.target.id === question.answer) {
          evt.target.style.backgroundColor = '#00ff00'; 
          score += 1;
          document.querySelector('#scoreCard').innerText = score;
          // alert('correct');
    } else {
          evt.target.style.backgroundColor = '#ff5050';
        // alert('Try Again');
    };
    isQuestionAnswered = true;
  }
}
  // console.log(evt.target.id === question.answer);
};



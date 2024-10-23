const questions = [
  { question: "Insha'Allah one day Komal will find someone way better than Ahmed  ?", answer: "Ameen", hint: "The answer is Ameen" },
  { question: "What Is Ahmed's favorite Car ", answer: "Acura", hint: "No, it's not McLaren?" },
  { question: "Who is the second Prophet?", answer: "Idris", hint: "Starts with the letter I." },
  { question: "Name one of Ahmed's favoirte poets.", answer: "Allama Iqbal", hint: "I even given you his poetery on the first day" },
  { question: "Name one of type of genre Ahmed loves?", answer: "Horror", hint: "There are few, but just name me one" },
  { question: "Rasalullah ﷺ said whenever a Insan (human) has a child, one Jinn and one angel is also born alongside it. What is this name of a jin? ", answer: "Hamzad", hint: "Talked about this in our first week" },
  { question: "How many prophet are named in the Quran?", answer: "25", hint: "Give me a Number" },
  { question: "Name one of Ahmed favorite Surah from the Quran?", answer: "At Takwir", hint: "I have told you this before" },
  { question: "Soooooo can Ahmed stay up the whole night today?", answer: "Yes", hint: "🥺 🥺 PLEASEEE KOMALLL🥺 🥺" },
  { question: "If there was ever to be a Prophet after Rasalullah ﷺ, who was it gonna be?", answer: "Umar Ibn Khattab", hint: "I need His full name" },
  { question: "What is one of Ahmed's favoirate Video Games?", answer: "Ghost of Tsushima", hint: "You never asked me this question, even though I told you I played alot of games." },
  { question: "What is the recommended dua before you sleep", answer: "Allahumma Bismika Amutu Wa Ahya", hint: "Have you been reciting the dua for sleeping before you go to sleep? Or did you forgot bc I haven't been reminding you?" },
  { question: "When Ahmed was a kid, what did he wanted to became when he grow up?", answer: "Soldier", hint: "this was way before IT, even before dreaming of becomeing crickter" },
  { question: "What is one of Ahmed favorite books?", answer: "AutoBiography of Malcolm X", hint: "You know I read books, but you never asked me what my favoirte books was, why?" },
  { question: "The historical battle that saved 3 of Islamic holy sites: Mecca, Madina, and Jerusalem from the Mongal attacks ", answer: "Ain Jalut", hint: "You should know this right?" },
  { question: "In the current Pakistan cricket team, who is one of Ahmed favorite player?", answer: "Rizwan", hint: "Sigh... you never asked me this either =(. And no is not Nasheem, even though he has a bright future and I do think he will go far." },
  { question: "Why is Komal in Ahmed's mind?", answer: "<!>010120012:55 <-!-> Ahmed=Komal<!>", hint: "Go ask Milo." }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0; 
document.getElementById('winButton').addEventListener('click', function() {
  document.getElementById('questionContainer').classList.remove('hidden');
  displayQuestion();
});

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;
  document.getElementById('answerInput').value = '';
  document.getElementById('hintMessage').classList.add('hidden');
}

document.getElementById('submitAnswer').addEventListener('click', function() {
  const userAnswer = document.getElementById('answerInput').value.toLowerCase();
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    correctAnswersCount++;
    currentQuestionIndex++;
    
    if (currentQuestionIndex === questions.length) {
      document.getElementById('resultMessage').textContent = "As promised, Here's your secret message: \nI Love You Komal! And I always will, don't forget me even after I am gone... I don't want you to find or be with someone other than me, I love you! You are my Komal, Ahmed's Komal and no one else's. And I fear that my place gets taken by some other one, very lucky and not too shy, who steals your heart  while I'm the one who's crazy and desire about them. But I know that is selfish of me, and I might not be here long. So I do pray from the bottom of my heart that you will find someone better! And because you live in my heart. My heart remembers you in every prayer. If I ever meet you again, whether in this world or the next, I'll Iet you know that ever since we parted our ways, my lips have never been tired of praying for you. They say hearts are connected, will you feel it when I miss you? And wallahi Komal, if one day I was meet you by accident, forbid my eyes from tearing up. Take care, my love!";
      document.getElementById('submitAnswer').disabled = true;
    } else {
      displayQuestion();
    }
  } else {
    if (currentQuestionIndex === questions.length - 1) {
      currentQuestionIndex = 0;
      correctAnswersCount = 0;
      document.getElementById('resultMessage').textContent = "You got the last question wrong! Restarting from the beginning...";
      displayQuestion();
    } else {
      document.getElementById('resultMessage').textContent = "Try again!";
    }
  }

  document.getElementById('resultMessage').classList.remove('hidden');
});

document.getElementById('hintButton').addEventListener('click', function() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('hintMessage').textContent = currentQuestion.hint;
  document.getElementById('hintMessage').classList.remove('hidden');
});

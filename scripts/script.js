var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var quizBox = document.getElementById('questionBox');
var scoreCard = document.getElementById('scoreCard');
var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var totalscore = document.getElementById('totalscore');
var scoreletter = document.getElementById('scoreletter');

var app = {
    quizask: [
        { q: 'In what year did World War II end?', options: ['1942', '1943', '1945', '1947'], answer: 3 },
        { q: 'What do we call the line of latitude 23.5 degrees north of the equator?', options: ['Tropic of Capricorn', 'Tropic of Cancer', 'Tropic of Libra', 'Tropic of Gemini'], answer: 2 },
        { q: 'Which instrument has keys, pedals and strings?', options: ['Piano', 'Guitar', 'Drums', 'Violin'], answer: 1 },
        { q: 'Who is the first Asian to get a Nobel prize in Science?', options: ['Shirin Ebadi.', 'Mother Teresa ', 'Rabindranath Tagore.', 'Sir C. V. Raman.'], answer: 4 },
    ],
    index: 0,
    load: function () {
        
            if(this.index<=this.quizask.length-1){
            quizBox.innerHTML = this.index+1+".) "+this.quizask[this.index].q;
            op1.innerHTML = this.quizask[this.index].options[0];
            op2.innerHTML = this.quizask[this.index].options[1];
            op3.innerHTML = this.quizask[this.index].options[2];
            op4.innerHTML = this.quizask[this.index].options[3];
            scoreCard.innerHTML = this.score + "/" + this.quizask.length;
            }else{
                quizBox.className = "quizBox";
                quizBox.innerHTML = "GAME OVER!!!!";
                totalscore.style.display = "initial";
                totalscore.innerHTML = this.score + "/" + this.quizask.length;
                op1.style.display = "none";
                op2.style.display = "none";
                op3.style.display = "none";
                op4.style.display = "none";
                btn.style.display = "none";
                scoreCard.style.display = "none";
                scoreletter.style.display = "none";
            }
    },
    next: function () {
        this.index++;
        this.load();
    },
    check: function (ele) {
        var id = ele.id.split('');

        if (id[id.length - 1] == this.quizask[this.index].answer) {
            this.score++;
            ele.className = "btn btn-dark correct";
            this.scoreCard();
        } else {
            ele.className = "btn btn-dark wrong";
            ele.innerHTML = "Wrong";
        }
    },
    notClickAble: function () {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },
    clickAble: function () {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className='btn btn-dark';
        }
    },
    score: 0,
    scoreCard: function () {
        scoreCard.innerHTML = this.score + "/" + this.quizask.length;
    }

}
window.onload = app.load();

function button(ele) {
    app.check(ele);
    app.notClickAble();
}

function next() {
    app.next();
    app.clickAble();
}
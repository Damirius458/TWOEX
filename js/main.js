let score= 0;
let money = 0;

const button = document.getElementById('button');

const hamster = document.getElementById('hamster');

const scoreDisplay = document.getElementById('score');

const moneyDisplay = document.getElementById('money');

hamster.addEventListener('click', () => {
score++;

    scoreDisplay.textContent = `Счет: ${score}` ;  

})
button.addEventListener('click', () => {
if(score >= 100){
money=money+100;
score=score-100;
moneyDisplay.textContent = `Мои деньги: ${money} рублей `;
scoreDisplay.textContent = `Счет : ${score}` ;

}else {alert('Не хвотает монет.Посмотри на свой счет ')}
 //console.log('tderytdiftydif')
})


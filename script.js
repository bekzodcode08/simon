let buttonColors = ['red', 'blue', 'green', 'yellow']
let randomChoosenColor 
let gamePattern = []
let userClickedPattern = []
let level = 0



function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4) 
    console.log(randomNumber)
    let randomChoosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChoosenColor)

    $('#' + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    let sounds = new Audio('sounds/' + randomChoosenColor + '.mp3')
    sounds.play();
    playSound(randomChoosenColor)
    level++
    $('h1').text('Level: ' + level)
    userClickedPattern = []

}
nextSequence()

function playSound(color) {

    let sounds = new Audio('sounds/' + color + '.mp3')
    sounds.play();
}

function animatePress(color) {
$('.' + color).addClass('preessed')
setTimeout(function () {    
    $('.' + color).removeClass('preessed')
}, 80);
}

$('.btn').click(function (e) {
    selectedColor = e.target.id
    userClickedPattern.push(selectedColor)
    playSound(selectedColor)
    animatePress(selectedColor)
    checkAnswer(userClickedPattern.length - 1)
})
$('body').keydown(function () {
    if (level == 0) {
        nextSequence()
    }
})


function checkAnswer(level) {
if(userClickedPattern[level] === gamePattern[level]) {
    console.log('success')
    if(userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
            nextSequence()
            userClickedPattern = []
        }, 1000);
}
} else {
    console.log('wrong')
    let wrongSound = new Audio('sounds/wrong.mp3')
    wrongSound.play();
    $('body').addClass('game-over')
    setTimeout(function () {
        $('body').removeClass('game-over')
    }, 200);
    $('h1').text('Game Over, Press Any Key to Restart')
    startOver()
}}
function startOver() {
    level = 0
    gamePattern = []
}

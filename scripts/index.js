// $("p").on("mouseover", function() {
//     $(this).css("color", "red");
// });
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var dice = randomIntBetween(1, 90);
var dura = randomIntBetween(5, 10) * 100;
var animeeffect = randomIntBetween(1, 3);
let direct = 'normal';
var widtho = $('.introduction').width();

function settypedirect(animeeffect) {
    if (animeeffect == 2) {
        direct = 'reverse';
    } else if (animeeffect < 2) {
        direct = 'alternate';
    }
}
anime({
    targets: '.slide1btn',
    translateX: 250,
    direction: 'alternate'

});
anime({
    targets: '.headlogo',
    translateY: 300,
    duration: 4000
})
anime({
    targets: '.cloudskyone',
    translateX: ['-100', '80'],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    duration: 3000,
    delay: anime.stagger(dice),
    loop: true
});
anime({
    targets: '.cloudskytwo',
    translateX: ['-30', '50'],
    duration: 5000,
    delay: anime.stagger(dice),
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
});
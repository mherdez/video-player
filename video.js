

const $video       = document.querySelector('video')
const $btnPlay     = document.querySelector('#play');
const $btnPause    = document.querySelector('#pause');
const $btnBackward = document.querySelector('#backward');
const $btnForward  = document.querySelector('#forward');
const $inputBarProgress = document.querySelector('#bar-progress');

$btnPlay.addEventListener('click', () => {
    $video.play();
    $btnPlay.hidden  = true
    $btnPause.hidden = false
})
$btnPause.addEventListener('click', () => {
    $video.pause();
    $btnPlay.hidden  = false
    $btnPause.hidden = true
})
$btnBackward.addEventListener('click', () => {
    $video.currentTime -= 10;
})
$btnForward.addEventListener('click', () => {
    $video.currentTime += 10;
})
$video.addEventListener('loadedmetadata', () => {
    $inputBarProgress.max = $video.duration
})
$video.addEventListener('timeupdate', () => {
    $inputBarProgress.value = $video.currentTime
})
$inputBarProgress.addEventListener('input', () => {
    $video.currentTime = $inputBarProgress.value
})
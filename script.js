const memes = [
    {
        image: 'meme1.jpg',
        caption: 'When you realize it\'s Monday...'
    },
    {
        image: 'meme2.jpg',
        caption: 'When you finish your homework...'
    },
    {
        image: 'meme3.jpg',
        caption: 'When you find money in your pocket...'
    }
];

let currentMemeIndex = 0;

const memeImage = document.getElementById('meme-image');
const memeCaption = document.getElementById('meme-caption');
const nextMemeButton = document.getElementById('nextMemeButton');

nextMemeButton.addEventListener('click', () => {
    currentMemeIndex = (currentMemeIndex + 1) % memes.length;
    updateMeme();
});

function updateMeme() {
    memeImage.src = memes[currentMemeIndex].image;
    memeCaption.textContent = memes[currentMemeIndex].caption;
}

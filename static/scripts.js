// we will have a form that takes input and check if this input is a song name in our sample if it is
// we show the hidden div and show the mp3 player of this original song and the one generated with AI
function setSongDetails(genre, song, originalSrc, melonedSrc) {
    
    var original = document.getElementById('originalSong');
    var meloned = document.getElementById('MelonedSong');
    original.src = originalSrc;
    meloned.src = melonedSrc;

    var audioPlayer = document.getElementById('audioPlayer1');
    audioPlayer.load();
    var audioPlayer2 = document.getElementById('audioPlayer2');
    audioPlayer2.load();
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    var genre = document.getElementById('GenreSelect').value;
    var song = document.getElementById('SongSelect').value;

    switch (genre) {
        case '1':
            switch (song) {
                case '1':
                    setSongDetails(genre, song, "../static/sounds/anlamazdin.mp3", "../static/sounds/anlamazdin-rock.wav");
                    break;
                case '2':
                    setSongDetails(genre, song, "../static/sounds/bach.mp3", "../static/sounds/bach-rock.wav");
                    break;
                case '3':
                    setSongDetails(genre, song, "../static/sounds/jojos.mp3", "../static/sounds/jojos-rock.wav");
                    break;
                case '4':
                    setSongDetails(genre, song, "../static/sounds/titanic.mp3", "../static/sounds/titanic-rock.wav");
                    break;
            }
            break;
        case '2':
            switch (song) {
                case '1':
                    setSongDetails(genre, song, "../static/sounds/anlamazdin.mp3", "../static/sounds/anlamazdin-pop.wav");
                    break;
                case '2':
                    setSongDetails(genre, song, "../static/sounds/bach.mp3", "../static/sounds/bach-pop.wav");
                    break;
                case '3':
                    setSongDetails(genre, song, "../static/sounds/jojos.mp3", "../static/sounds/jojos-pop.wav");
                    break;
                case '4':
                    setSongDetails(genre, song, "../static/sounds/titanic.mp3", "../static/sounds/titanic-pop.wav");
                    break;
            }
            break;
        case '3':
            switch (song) {
                case '1':
                    setSongDetails(genre, song, "../static/sounds/anlamazdin.mp3", "../static/sounds/anlamazdin-hiphop.wav");
                    break;
                case '2':
                    setSongDetails(genre, song, "../static/sounds/bach.mp3", "../static/sounds/bach-hiphop.wav");
                    break;
                case '3':
                    setSongDetails(genre, song, "../static/sounds/jojos.mp3", "../static/sounds/jojos-hiphop.wav");
                    break;
                case '4':
                    setSongDetails(genre, song, "../static/sounds/titanic.mp3", "../static/sounds/titanic-hiphop.wav");
                    break;
            }
            break;
    }
}

// Attach the event listener to the form
var form = document.getElementById('songForm');
form.addEventListener('submit', submitForm);

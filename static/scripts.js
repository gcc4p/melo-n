// we will have a form that takes input and check if this input is a song name in our sample if it is
// we show the hidden div and show the mp3 player of this original song and the one generated with AI
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the value of the genre select
    var genre = document.getElementById('GenreSelect').value;
    
    // Get the value of the song select
    var song = document.getElementById('SongSelect').value;
    if(genre == 1 && song == 2){
        document.getElementById('')
    }
    // Do something with the values, e.g., log to console or send to server
    console.log("Selected genre: ", genre);
    console.log("Selected song: ", song);
    var original = document.getElementById('originalSong');
    var meloned = document.getElementById('melonedsong');
    original.src ="../static/sounds/audio_example.mp3";
    var audioPlayer = document.getElementById('audioPlayer1');
    audioPlayer.load();
    // For example, to send this data to a server, you might use:
    // fetch('/submit-form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ genre: genre, song: song }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  }
  
  // Attach the event listener to the form
  var form = document.getElementById('songForm');
  form.addEventListener('submit', submitForm);
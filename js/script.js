


//VIDEO KNAPPER KONTROL
<script>

        const playPauseBtn = document.querySelectorAll('.playpause');
        const stopBtn = document.querySelectorAll('.stop');
        const rwdBtn = document.querySelectorAll('.rwd');
        const fwdBtn = document.querySelectorAll('.fwd');
        const timeLabel = document.querySelectorAll('.time');
        console.log(playPauseBtn);
        const player = document.querySelectorAll('video');

        for(let i = 0; i < playPauseBtn.length; i++) {
           playPauseBtn[i].addEventListener("click", function() {
            if(player[i].paused) {
                player[i].play();
                playPauseBtn[i].innerHTML = "<i class='fas fa-pause'></i>";
            } else {
                player[i].pause();
                playPauseBtn[i].innerHTML = "<i class='fas fa-play'></i>";
            }
           })
           
           stopBtn[i].addEventListener("click", function() {
                player[i].pause();
                player[i].currentTime = 0;
                playPauseBtn[i].innerHTML = "<i class='fas fa-play'></i>";
           });

           rwdBtn[i].addEventListener("click", function() {
               player[i].currentTime -= 3;
           });

            fwdBtn[i].addEventListener("click", function() {
                player[i].currentTime += 3;
                if(player[i].currentTime >= player[i].duration || player[i].paused) {
                    player[i].pause();
                    player[i].currentTime = 0;
                    playPauseBtn[i].innerHTML = "<i class='fas fa-play'></i>";
                }
            });

            player[i].addEventListener("timeupdate", function() {
                let minutes = Math.floor(player[i].currentTime / 60);
                let seconds = Math.floor(player[i].currentTime - minutes * 60);
                let minuteValue;
                let secondValue;

                if (minutes<10) {
                    minuteValue = "0" + minutes;
                } else {
                    minuteValue = minutes;
                }

                if (seconds<10) {
                    secondValue = "0" + seconds;
                } else {
                    secondValue = seconds;
                }

                mediaTime = minuteValue + ":" + secondValue;
                timeLabel[i].innerHTML = mediaTime;
            });

        }

    </script>
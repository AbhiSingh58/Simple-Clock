   function showtime() {
            let date = new Date()
            let session = "AM"
            let ho = date.getHours() 
            let min =date.getMinutes()
            let sec=date.getSeconds()

            if (ho == 0) {

                ho = 12;


            }
            if (ho > 12) {
                ho= ho- 12
                session = "PM"

            }
            if (ho<10){
                ho="0" + ho
            }
            if (min<10){
                min="0" + min
            }
            if (sec<10){
                sec="0" + sec
            }
            let time = ho + " : " + min + " : " + sec + " " + session 
            document.getElementById("time").innerHTML = time;
            document.getElementById('time').innerText=time;

        }
        setInterval(showtime, 1000);

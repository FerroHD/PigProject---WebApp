(function($) {
    "use strict"; // Start of use strict

    var socket = io(); //load socket.io-client and connect to the host that serves the page

    window.addEventListener("load", function() { //when page loads
        var lightbox = document.getElementById("light");
        lightbox.addEventListener("change", function() { //add event listener for when checkbox changes
            socket.emit("light", Number(this.checked)); //send button status to server (as 1 or 0)
            console.log("button changed to " + this.checked);
        });
    });
    socket.on('light', function(data) { //get button status from client
        document.getElementById("light").checked = data; //change checkbox according to push button on Raspberry Pi
        socket.emit("light", data); //send push button status to back to server
    });
    console.log("dom-events listening...");

})(jQuery); // End of use strict
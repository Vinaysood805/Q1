//Using the image displayed in index.html, create the following using JavaScript. 
//When the user hovers over the image displayed, the image changes to a img2.jpg

function onHover()
    {
        document.querySelector("img").setAttribute("src", "images/img2.jpg");
        h1 = document.createElement("h1");
        h1.textContent = "Good Luck On Your Final Exam!";
        div = document.querySelector("div");
        div.appendChild(h1);
        document.body.style.background = "white";
    }

    function offHover()
    {
        document.querySelector("img").setAttribute("src", "images/img1.jpg");
        h1.textContent = "";
        document.body.style.background = "#C0DE25";

    }

//When the user hovers over the image displayed, a new div is added to the page. Inside the div, there is an H1 that says “Good Luck On Your Final Exam!”.
//When the user hovers away from the image, the background colour changes to #C0DE25 and the H1 disappears. 

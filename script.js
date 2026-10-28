


const BIRTHDAY_DATE = "2026-08-27";




const memories = {
    1: {
        photo: "photo2.jpeg",
        title: "Our First Memory 💕",
        message:
            "May God always give you everything you want. ❤️"
    },

    2: {
        photo: "photo3.jpeg",
        title: "Another Beautiful Moment 💗",
        message:
            "If you got a little smile on your face, that's a precious thanks to me for my work. 🌸💗"
    },

    3: {
        photo: "photo1.jpeg",
        title: "One More Memory 💖",
        message:
            "And lastly, I wish God always blesses you. Never stop smiling. ✨"
    }
};




let clickedBalloons = new Set();



function checkDate() {
    const enteredDate =
        document.getElementById("dateInput").value;

    if (enteredDate === BIRTHDAY_DATE) {
        document.getElementById("firstPage")
            .style.display = "none";

        document.getElementById("birthdayPage")
            .style.display = "flex";

        createHearts();
    }

    else if (enteredDate === "") {
        alert("Enter the date first, beautiful 💕");
    }

    else {
        alert("Hmm... that's not the right date 👀💕");
    }
}




function showMemoryPage() {
    document.getElementById("birthdayPage")
        .style.display = "none";

    document.getElementById("photoPage")
        .style.display = "none";

    document.getElementById("finalPage")
        .style.display = "none";

    document.getElementById("memoryPage")
        .style.display = "block";
}




function showPhoto(number) {
    if (clickedBalloons.has(number)) {
        return;
    }

    clickedBalloons.add(number);

    document.getElementById("balloon" + number)
        .classList.add("clicked");

    const memory = memories[number];

    document.getElementById("memoryPhoto")
        .src = memory.photo;

    document.getElementById("photoTitle")
        .innerText = memory.title;

    document.getElementById("photoMessage")
        .innerText = memory.message;

    document.getElementById("memoryPage")
        .style.display = "none";

    document.getElementById("photoPage")
        .style.display = "flex";

    if (clickedBalloons.size === 3) {
        document.getElementById("lastButton")
            .style.display = "inline-block";
    }
}



function showFinalPage() {
    document.getElementById("memoryPage")
        .style.display = "none";

    document.getElementById("photoPage")
        .style.display = "none";

    document.getElementById("finalPage")
        .style.display = "flex";
}




function createHearts() {
    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"
    ];

    for (let i = 0; i < 30; i++) {
        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 5) + "s";

        heart.style.animationDelay =
            Math.random() * 4 + "s";

        document.body.appendChild(heart);
    }
}

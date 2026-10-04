// ==============================
// GET HTML ELEMENTS
// ==============================

const openingPage = document.getElementById("openingPage");
const openingYesBtn = document.getElementById("openingYesBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");
const step6 = document.getElementById("step6");

const gameComplete = document.getElementById("gameComplete");
const finalQuestion = document.getElementById("finalQuestion");
const finalLetter = document.getElementById("finalLetter");

const startStoryBtn = document.getElementById("startStoryBtn");

const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryDate = document.getElementById("memoryDate");
const memoryText = document.getElementById("memoryText");
const memoryNextBtn = document.getElementById("memoryNextBtn");


// ==============================
// MUSIC
// ==============================

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");

song1.volume = 0.65;
song2.volume = 0.65;
song3.volume = 0.65;
song4.volume = 0.65;


function stopAllSongs() {
    song1.pause();
    song2.pause();
    song3.pause();
    song4.pause();
}


function playSong1() {
    stopAllSongs();
    song1.currentTime = 0;

    song1.play().catch(function(error) {
        console.log("Song 1 could not play:", error);
    });
}


function playSong2() {
    stopAllSongs();
    song2.currentTime = 0;

    song2.play().catch(function(error) {
        console.log("Song 2 could not play:", error);
    });
}


function playSong3() {
    stopAllSongs();
    song3.currentTime = 0;

    song3.play().catch(function(error) {
        console.log("Song 3 could not play:", error);
    });
}


function playSong4() {
    stopAllSongs();
    song4.currentTime = 0;

    song4.play().catch(function(error) {
        console.log("Song 4 could not play:", error);
    });
}


// ==============================
// OPENING PAGE
// ==============================

openingYesBtn.addEventListener("click", function() {

    playSong1();

    openingPage.classList.remove("active");
    step1.classList.add("active");

});


// ==============================
// STEP 1 - DO YOU LOVE ME?
// ==============================

noBtn.addEventListener("mouseenter", function() {

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});


yesBtn.addEventListener("click", function() {

    step1.classList.remove("active");
    step2.classList.add("active");

});


// ==============================
// STEP 2 - OUR STORY
// ==============================

startStoryBtn.addEventListener("click", function() {

    playSong2();

    step2.classList.remove("active");
    step3.classList.add("active");

});


// ==============================
// MEMORIES
// ==============================

const memories = [

    {
        title: "When We First Started Talking",
        date: "15th April 2026",
        text: "I added you randomly, we started talking. You used to call me bhaiya 😭 lol.",
        image: ""
    },

    {
        title: "When We Confessed",
        date: "14th May 2026",
        text: "I told you I like you, and we started dating/being in an official relationship",
        image: ""
    },

    {
        title: "Our First Monthiversary",
        date: "14th June 2026",
        text: "Hehe our first monthiversary. We celebrated on a video call, and did a lot of fun.",
        image: ""
    },

    {
        title: "Our First Online Fun Activity - Clay Date",
        date: "14th June 2026",
        text: "We did it on our first monthiversary. I clearly won😛",
        image: "images/claydate.jpeg"
    },

    {
        title: "So many more to come...hopefully within the next 2 weeks itself haha.",
        date: "Would be fun doing Dandiya together, ain't it?",
        text: "Bolo aa jaun kya😈",
        image: ""
    }

];


let currentMemory = 0;


function showMemory() {

    const memory = memories[currentMemory];

    memoryTitle.textContent = memory.title;
    memoryDate.textContent = memory.date;
    memoryText.textContent = memory.text;

    if (memory.image !== "") {

        memoryImage.src = memory.image;
        memoryImage.style.display = "block";

    } else {

        memoryImage.style.display = "none";

    }

}


showMemory();


// ==============================
// MEMORY IMAGE POPUP
// ==============================

const imageModal = document.createElement("div");

imageModal.id = "imageModal";


const imageModalContent = document.createElement("div");

imageModalContent.className = "imageModalContent";


const closeImageModalButton = document.createElement("button");

closeImageModalButton.id = "closeImageModal";
closeImageModalButton.textContent = "×";


const largeMemoryImageElement = document.createElement("img");

largeMemoryImageElement.id = "largeMemoryImage";
largeMemoryImageElement.src = "";
largeMemoryImageElement.alt = "Memory";


imageModalContent.appendChild(closeImageModalButton);
imageModalContent.appendChild(largeMemoryImageElement);

imageModal.appendChild(imageModalContent);

document.body.appendChild(imageModal);


const largeMemoryImage =
    document.getElementById("largeMemoryImage");

const closeImageModal =
    document.getElementById("closeImageModal");


memoryImage.addEventListener("click", function() {

    if (memoryImage.style.display !== "none") {

        largeMemoryImage.src = memoryImage.src;

        imageModal.classList.add("show");

    }

});


closeImageModal.addEventListener("click", function() {

    imageModal.classList.remove("show");

});


imageModal.addEventListener("click", function(event) {

    if (event.target === imageModal) {

        imageModal.classList.remove("show");

    }

});


// ==============================
// NEXT MEMORY
// ==============================

memoryNextBtn.addEventListener("click", function() {

    currentMemory++;

    if (currentMemory < memories.length) {

        showMemory();

    } else {

        step3.classList.remove("active");
        step4.classList.add("active");

    }

});


// ==============================
// THINGS I LOVE ABOUT YOU
// ==============================

const loveReasons = [

    "I love how cute you are, and yet never find yourself cute enough lol.",

    "I love when I annoy you with your stickers, and then tumhe manata bhi hu.",

    "I love how despite all the troubles, you never lost hope in us.",

    "I love your cute little smile when you're shy hehe.",

    "I love every moment of ours, which we shared so far, whether positive or negative.",

    "I love when the world annoys you, and you come running to me like my small little girl🥹.",

    "I love your singing voice (manchillddddddd, why you always comin' runnin' to me 😆.",

    "I love how hot you're😭"

];


const loveHearts =
    document.querySelectorAll(".loveHeart");


const loveModal =
    document.getElementById("loveModal");


const loveModalText =
    document.getElementById("loveModalText");


const closeLoveModal =
    document.getElementById("closeLoveModal");


loveHearts.forEach(function(heart) {

    heart.addEventListener("click", function() {

        const index =
            heart.getAttribute("data-index");

        loveModalText.textContent =
            loveReasons[index];

        loveModal.classList.add("show");

    });

});


closeLoveModal.addEventListener("click", function() {

    loveModal.classList.remove("show");

});


loveModal.addEventListener("click", function(event) {

    if (event.target === loveModal) {

        loveModal.classList.remove("show");

    }

});


// ==============================
// LOVE SECTION -> SCRAPBOOK
// ==============================

const loveNextBtn =
    document.getElementById("loveNextBtn");


loveNextBtn.addEventListener("click", function() {

    step4.classList.remove("active");

    step5.classList.add("active");

    playSong3();

});


// ==============================
// SCRAPBOOK / PHOTO GALLERY
// ==============================

const galleryPhotos = [

    {
        image: "images/photo1.jpg",
        caption: "SHE'S SO BEAUTIFUL OMFGGGGG."
    },

    {
        image: "images/photo2.jpg",
        caption: "Your post-facial look, made me fall in love all over again."
    },

    {
        image: "images/photo3.jpg",
        caption: "I was making you a sick insta edit for you to put on your story lmao."
    },

    {
        image: "images/photo4.jpg",
        caption: "Most candid pic of yours, pretty all along."
    },

    {
        image: "images/photo5.jpg",
        caption: "Chhoti Aditri is the cutest ngl"
    },

    {
        image: "images/photo6.jpg",
        caption: "MY GIRL JUST TURNED 18 YAYYYYY (and she's lookin'smoking hot OMG)"
    }

];


const photoGallery =
    document.getElementById("photoGallery");


const photoModal =
    document.getElementById("photoModal");


const largePhoto =
    document.getElementById("largePhoto");


const photoCaption =
    document.getElementById("photoCaption");


const closePhotoModal =
    document.getElementById("closePhotoModal");


galleryPhotos.forEach(function(photo, index) {

    const photoCard =
        document.createElement("div");

    photoCard.className = "photoCard";


    const photoImage =
        document.createElement("img");

    photoImage.src = photo.image;

    photoImage.alt =
        "Our photo " + (index + 1);


    const photoText =
        document.createElement("p");

    photoText.textContent =
        photo.caption;


    photoCard.appendChild(photoImage);

    photoCard.appendChild(photoText);

    photoGallery.appendChild(photoCard);


    photoCard.addEventListener("click", function() {

        largePhoto.src = photo.image;

        photoCaption.textContent =
            photo.caption;

        photoModal.classList.add("show");

    });

});


closePhotoModal.addEventListener("click", function() {

    photoModal.classList.remove("show");

});


photoModal.addEventListener("click", function(event) {

    if (event.target === photoModal) {

        photoModal.classList.remove("show");

    }

});


// ==============================
// SCRAPBOOK -> HEART GAME
// ==============================

const galleryNextBtn =
    document.getElementById("galleryNextBtn");


galleryNextBtn.addEventListener("click", function() {

    step5.classList.remove("active");

    stopAllSongs();

    startGame();

});


// ==============================
// HEART CATCHING GAME
// ==============================

const gameArea =
    document.getElementById("gameArea");


const catchHeart =
    document.getElementById("catchHeart");


const heartCounter =
    document.getElementById("heartCounter");


let heartsCaught = 0;


function startGame() {

    heartsCaught = 0;

    heartCounter.textContent = "0 / 10";

    step6.classList.add("active");

    moveHeart();

}


function moveHeart() {

    const areaWidth =
        gameArea.clientWidth;

    const areaHeight =
        gameArea.clientHeight;

    const heartWidth =
        catchHeart.offsetWidth;

    const heartHeight =
        catchHeart.offsetHeight;


    const maxX =
        Math.max(
            0,
            areaWidth - heartWidth - 10
        );


    const maxY =
        Math.max(
            0,
            areaHeight - heartHeight - 10
        );


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    catchHeart.style.left =
        randomX + "px";


    catchHeart.style.top =
        randomY + "px";

}


catchHeart.addEventListener("click", function() {

    heartsCaught++;

    heartCounter.textContent =
        heartsCaught + " / 10";


    if (heartsCaught >= 10) {

        step6.classList.remove("active");

        gameComplete.classList.add("active");

    } else {

        moveHeart();

    }

});


// ==============================
// GAME COMPLETE -> FINAL QUESTION
// ==============================

const gameNextBtn =
    document.getElementById("gameNextBtn");


gameNextBtn.addEventListener("click", function() {

    gameComplete.classList.remove("active");

    finalQuestion.classList.add("active");

    playSong4();

});


// ==============================
// FINAL QUESTION - NO BUTTON
// ==============================

const finalNoBtn =
    document.getElementById("finalNoBtn");


finalNoBtn.addEventListener("mouseenter", function() {

    const maxX =
        window.innerWidth -
        finalNoBtn.offsetWidth;


    const maxY =
        window.innerHeight -
        finalNoBtn.offsetHeight;


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    finalNoBtn.style.position = "fixed";

    finalNoBtn.style.left =
        randomX + "px";

    finalNoBtn.style.top =
        randomY + "px";

});


// ==============================
// FINAL QUESTION - YES
// ==============================

const finalYesBtn =
    document.getElementById("finalYesBtn");


finalYesBtn.addEventListener("click", function() {

    createHeartExplosion();


    setTimeout(function() {

        finalQuestion.classList.remove("active");

        finalLetter.classList.add("active");

        // Song 4 continues.
        // It is NOT restarted.

    }, 1500);

});


// ==============================
// HEART EXPLOSION
// ==============================

const heartExplosion =
    document.getElementById("heartExplosion");


function createHeartExplosion() {

    const numberOfHearts = 80;


    for (
        let i = 0;
        i < numberOfHearts;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "explosionHeart";


        heart.textContent = "❤️";


        const angle =
            Math.random() * Math.PI * 2;


        const distance =
            200 + Math.random() * 500;


        const x =
            Math.cos(angle) * distance;


        const y =
            Math.sin(angle) * distance;


        heart.style.left = "50%";

        heart.style.top = "50%";


        heart.style.setProperty(
            "--x",
            x + "px"
        );


        heart.style.setProperty(
            "--y",
            y + "px"
        );


        heart.style.fontSize =
            20 + Math.random() * 35 + "px";


        heartExplosion.appendChild(heart);


        setTimeout(function() {

            heart.remove();

        }, 1600);

    }

}


// ==============================
// ESCAPE KEY CLOSES POPUPS
// ==============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        imageModal.classList.remove("show");

        loveModal.classList.remove("show");

        photoModal.classList.remove("show");

    }

});
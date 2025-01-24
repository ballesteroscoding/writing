const incorrectTexts = [
    "the pain now is tolerable",
    "determinated",
    "supine position",
    "a carer attend him",
    "founded",
    "suffers a audition problem",
    "an history",
    "peniciline",
    "althought",
    "reported a lost of confidence",
    "reported dicrease of confidence",
    "being educated advantages exercise programms",
    "a increase in patient´s frailty",
    "esteroideal",
    "daily live",
    "he has agreed to get the visit of carer",
    "he insists continue living",
    "attend .....",
    "agreed ....",
    "loss .....",
    "increase/decrease ....",
    "educated ....",
    "insists .... + VERB (TO/-ING)",
    "responsive ----",
    "habilities",
    "a shoulder brace 4 hours per day",
    "chronic pain on the right shoulder",
    "refering",
    "taking physiotherapy",
    "an ache / ache",
    "a pain/ pain",
    "a tender/ tender",
    "fell from the stairs",
    "bruise in/on",
    "pain in/on",
    "non-alcoholic",
    "drink water",
    "presented with complaint of headache",
    "he reported he had",
    "examination revealed a lumbar lordosis",
    "bad sleep",
    "on 2008",
    "he suffer from a poor",
    "retturn to home",
    "in adition",
    "Mr X medical history",
    "is wored",
    "previous ....",
    "was under \"meals on wheels\" service",
    "recommendations of daily light exercise",
    ",however,/;however,",
    "signs of bruise",
    "is widow",
    "oxygen supply will be provided",
    "lyfe style",
    "for an ongoing care",
    "Mr X has a lack of family support",
    "since her retirement",
    "adaptacioning issues",
    "ocasional",
    "Please note that is important to monitor her adherence",
    "as well as encourage her to do exercise",
    "her bowel movement is now normal",
    "oxygen saturation",
    "1 litre per minute",
    "who has a history of type 1 diabetes mellitus since she was 7 years",
    "last episode occurred",
    "On assesment today, she reported not compliance with the diet either medication.",
    "strugeling",
    "glucemic control",
    "Please note that a follow-up visit is scheduled in a month.",
    "recommendations....",
    "aditionaly",
    "elegible",
    "long term physiotherapy",
    "a good progress",
    "a terrible pain",
    "omeprazol",
    "symbastatine",
    "wolferine",
    "clorpidrogrel",
    "hydroclorotiazid",
    "metaprolol",
    "cyprofloxacine",
    "dexametasone",
    "metotrexate",
    "excess of sweating"
];


const correctTexts = [
    "the pain is tolerable now",
    "determined",
    "a supine position",
    "a carer attends to him",
    "found",
    "suffers from an audition problem",
    "a history",
    "penicillin",
    "although",
    "reported a lost of confidence",
    "reported a decrease in confidence",
    "being educated on the advantages of exercise programs",
    "a increase in the patient´s frailty",
    "steroidal",
    "daily life",
    "he has agreed to carers visiting three times a day",
    "he insists on continuing to live",
    "attend to",
    "agreed to",
    "loss of",
    "increase/decrease in",
    "educated on",
    "insist on + verb -ing",
    "responsive to",
    "ability",
    "a shoulder brace for 4 hours per day",
    "chronic pain in the right shoulder",
    "referring- to refer",
    "undergoing/receiving physiotherapy",
    "an ache",
    "pain",
    "a tender",
    "fell down the stairs",
    "bruise on",
    "pain in",
    "non-drinker",
    "increase her fluid intake",
    "presented with complaints of headache",
    "he reported that he had",
    "examination revealed lumbar lordosis",
    "poor sleep",
    "in 2008",
    "he suffers from poor",
    "return home (es un idiom)",
    "in addition",
    "Mr X´s medical history",
    "is worn",
    "previous to",
    "was under the \"meals on wheels\" service",
    "daily light exercise recommendations",
    ";however,",
    "signs of bruising",
    "is a widow",
    "an oxygen supply will be provided",
    "lifestyle",
    "for ongoing care",
    "Mr X lacks family support",
    "since retiring",
    "adjustment/adaptational issues",
    "occasional",
    "Please note that it is important to monitor her adherence",
    "as well as encourage her exercise",
    "her bowel movements are now normal",
    "oxygen saturation level",
    "1 liter per minute",
    "who has had a history of type 1 diabetes mellitus since she was 7 years",
    "the last episode occurred",
    "On assessment today, she reported not compliance with the diet or medication.",
    "struggling",
    "glycemic control",
    "Please note that a follow-up visit is scheduling in a month.",
    "recommendations for",
    "additionally",
    "eligible",
    "long-term physiotherapy",
    "good progress",
    "terrible pain",
    "omeprazole",
    "simbastatin",
    "warfarin",
    "clopidogrel",
    "hydrochlorothiazide",
    "metoprolol",
    "ciprofloxacin",
    "dexamethasone",
    "methotrexate",
    "excessive sweating"
];

window.onload = function() {
    updateCard();
}

const card = document.querySelector(".card");
card.addEventListener("click", flipCard);

const listenButton = document.getElementById("listen-button");
listenButton.addEventListener("click", readText);

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", nextCard);

function readText() {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance();
        msg.lang = "en-US";
        if (card.classList.contains("is-flipped")) {
            msg.text = document.getElementById("correct-text").innerText;
            window.speechSynthesis.speak(msg);
        }
        // else {
        //     msg.lang = "en-GB";
        //     msg.text = document.getElementById("correct-text").innerText;
        //     window.speechSynthesis.speak(msg);
        // }
    }
    else {
        alert("Sorry, your browser does not support text to speech!");
    }
}

function flipCard() {
    //adds and removes class
    card.classList.toggle('is-flipped'); 
}

function nextCard() {
    if (card.classList.contains("is-flipped")) {
        flipCard();
        listenButton.disabled = true;
        nextButton.disabled = true;
        setTimeout(updateCard, 1000);
    }
    else {
        updateCard(); 
    }
}   

function updateCard() {
    // console.log(incorrectTexts.length);
    // console.log(correctTexts.length);
    const i = Math.floor(Math.random()*incorrectTexts.length);
    document.getElementById("incorrect-text").innerText = incorrectTexts[i];
    document.getElementById("correct-text").innerText = correctTexts[i];;
    listenButton.disabled = false;
    nextButton.disabled = false;
}
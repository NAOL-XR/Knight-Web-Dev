let bookingData = {};
const openLetterButton = document.getElementById("openLetterButton");

openLetterButton.addEventListener("click", function () {
    openLetterButton.textContent = "Opening...";

    setTimeout(() => {
        document.querySelector(".opening").innerHTML = `
            <div class="wax-seal">⚔️</div>

            <p class="eyebrow">To my Lady</p>

            <h1>My Lady,</h1>

            <p class="intro">
                I have carried a question in my heart<br>
                for longer than I intended...
            </p>

            <button id="continueButton">
                Continue reading →
            </button>
        `;
    }, 700);
});
document.addEventListener("click", function (event) {

    if (event.target.id === "continueButton") {

        document.querySelector(".opening").innerHTML = `
            <div class="wax-seal">⚔️</div>

            <p class="eyebrow">A Question From Your Knight</p>

            <h1>My Lady...</h1>

            <p class="intro">
                Would you grant me<br>
                the honor of a date?
            </p>

            <div class="answer-buttons">
                <button id="yesButton" class="yes-button">
                    YES ❤️
                </button>

                <button id="noButton" class="no-button">
                    NO
                </button>
            </div>
        `;

        setupAnswerButtons();
    }

});


function setupAnswerButtons() {

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    yesButton.addEventListener("click", function () {

        document.querySelector(".opening").innerHTML = `
            <div class="wax-seal">⚔️</div>

            <p class="eyebrow">A Most Welcome Answer</p>

            <h1>Then it is settled.</h1>

            <p class="intro">
                You have made this knight<br>
                a fortunate man. ❤️
            </p>

            <button id="dateButton">
                Choose Our Day →
            </button>
        `;

        setupDateButton();
    });


    noButton.addEventListener("mouseenter", function () {

        const container = document.querySelector(".opening");

        const maxX = container.clientWidth - noButton.offsetWidth - 80;
        const maxY = container.clientHeight - noButton.offsetHeight - 80;

        const x = Math.random() * maxX - maxX / 2;
        const y = Math.random() * maxY - maxY / 2;

        noButton.style.transform =
            `translate(${x}px, ${y}px)`;
    });


    noButton.addEventListener("touchstart", function (event) {

        event.preventDefault();

        const container = document.querySelector(".opening");

        const maxX = container.clientWidth - noButton.offsetWidth - 80;
        const maxY = container.clientHeight - noButton.offsetHeight - 80;

        const x = Math.random() * maxX - maxX / 2;
        const y = Math.random() * maxY - maxY / 2;

        noButton.style.transform =
            `translate(${x}px, ${y}px)`;
    });

}


function setupDateButton() {

    const dateButton = document.getElementById("dateButton");

    dateButton.addEventListener("click", function () {

        document.querySelector(".opening").innerHTML = `
            <div class="wax-seal">⚔️</div>

            <p class="eyebrow">The Day of Our Meeting</p>

            <h1>Choose the Date</h1>

            <p class="intro">
                My Lady,<br>
                on what day shall fate bring us together?
            </p>

            <input
                type="date"
                id="datePicker"
            >

            <button id="timeButton">
                Choose the Hour →
            </button>
        `;

        setupTimeButton();
    });

}
function setupTimeButton() {

    const timeButton = document.getElementById("timeButton");

    timeButton.addEventListener("click", function () {

        const selectedDate = document.getElementById("datePicker").value;

        if (!selectedDate) {
            alert("Please choose a date first.");
            return;
        }

        document.querySelector(".opening").innerHTML = `
            <div class="wax-seal">⚔️</div>

            <p class="eyebrow">The Hour of Our Meeting</p>

            <h1>Choose the Time</h1>

            <p class="intro">
                And at what hour shall I come,<br>
                my Lady?
            </p>

            <input
                type="time"
                id="timePicker"
                step="60"
            >

            <button id="dateTypeButton">
                Continue →
            </button>
        `;

        setupDateTypeButton(selectedDate);
    });
}


function setupDateTypeButton(selectedDate) {

    const dateTypeButton =
        document.getElementById("dateTypeButton");

    dateTypeButton.addEventListener("click", function () {

        const selectedTime =
            document.getElementById("timePicker").value;

        if (!selectedTime) {
            alert("Please choose an exact time first.");
            return;
        }

        document.querySelector(".opening").innerHTML = `
            <div class="wax-seal">⚔️</div>

            <p class="eyebrow">The Invitation</p>

            <h1>Our First Meeting</h1>

            <p class="intro">
                How shall our first meeting be remembered?
            </p>

            <div class="date-type-buttons">

                <button class="date-type" data-type="A Meal Together">
                    🍽️<br>
                    A Meal Together
                </button>

                <button class="date-type" data-type="Watch the Sunset">
                    🌅<br>
                    Watch the Sunset
                </button>

                <button class="date-type" data-type="A Quiet Conversation">
                    🕯️<br>
                    A Quiet Conversation
                </button>

            </div>
        `;

        setupDateTypeChoices(
            selectedDate,
            selectedTime
        );
    });
}


function setupDateTypeChoices(selectedDate, selectedTime) {

    const choices =
        document.querySelectorAll(".date-type");

    choices.forEach(function (choice) {

        choice.addEventListener("click", function () {

            const selectedType =
                choice.dataset.type;

            document.querySelector(".opening").innerHTML = `
                <div class="wax-seal">⚔️</div>

                <p class="eyebrow">
                    The Details Are Chosen
                </p>

                <h1>It Is Settled.</h1>

                <p class="intro">
                    ${selectedDate}<br>
                    at ${selectedTime}<br><br>
                    ${selectedType}
                </p>

                <button id="nameButton">
                    Continue, My Lady →
                </button>
            `;

            setupNameButton(
                selectedDate,
                selectedTime,
                selectedType
            );
        });
    });
}
function setupNameButton(
    selectedDate,
    selectedTime,
    selectedType
) {

    const nameButton =
        document.getElementById("nameButton");

    nameButton.addEventListener("click", function () {

        document.querySelector(".opening").innerHTML = `
            <div class="wax-seal">⚔️</div>

            <p class="eyebrow">
                One Final Detail
            </p>

            <h1>My Lady...</h1>

            <p class="intro">
                Before I seal this letter,<br>
                may I know your name?
            </p>

            <input
                type="text"
                id="ladyName"
                placeholder="Write your name here..."
                maxlength="30"
                autocomplete="off"
            >

            <button id="sealButton">
                Seal the Letter 🔴
            </button>
        `;

        setupSealButton(
            selectedDate,
            selectedTime,
            selectedType
        );
    });
}


function setupSealButton(
    selectedDate,
    selectedTime,
    selectedType
) {

    const sealButton =
        document.getElementById("sealButton");

    sealButton.addEventListener("click", function () {

        const ladyName =
            document.getElementById("ladyName").value.trim();

        if (!ladyName) {
            alert("Please write your name first, my Lady.");
            return;
        }

        showFinalLetter(
            ladyName,
            selectedDate,
            selectedTime,
            selectedType
        );
    });
}
function showFinalLetter(
    ladyName,
    selectedDate,
    selectedTime,
    selectedType
) {
    bookingData = {
        ladyName: ladyName,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
        selectedType: selectedType
    };
    document.querySelector(".opening").innerHTML = `
        <div class="final-letter">

            <div class="wax-seal final-seal">⚔️</div>

            <p class="eyebrow">
                The Letter Is Sealed
            </p>

            <p class="letter-to">
                To ${ladyName},
            </p>

            <p class="final-text">
                My Lady,
            </p>

            <p class="final-text">
                It is settled.
                On <strong>${selectedDate}</strong>,
                at <strong>${selectedTime}</strong>,
                I shall have the honor of meeting you for
                <strong>${selectedType}</strong>.
            </p>

            <p class="final-text">
                Until that hour,
                I shall keep this promise close to my heart.
            </p>

            <p class="signature">
                Yours truly,<br>
                A hopeful knight ⚔️
            </p>

            <p class="postscript">
                P.S. — Do not make your knight wait too long. ❤️
            </p>

            <button id="finishButton">
                Seal & Send the Letter 💌
            </button>

        </div>
    `;

}

function showKnightWaiting(
    ladyName,
    selectedDate,
    selectedTime,
    selectedType
) {
    document.querySelector(".opening").innerHTML = `
        <div class="waiting-scene">

            <p class="eyebrow">
                The Letter Has Been Sent
            </p>

            

            <h1>Until We Meet</h1>

<p class="intro">
    ${ladyName},<br><br>
    the day is chosen,<br>
    the hour is known,<br>
    and our little story has begun.
</p>

<p class="waiting-message">
    Until ${selectedDate} at ${selectedTime},
    this knight shall wait beneath the evening sky.
</p>

        <div class="waiting-details">
    <span>💌 ${selectedType}</span>
    <span>📅 ${selectedDate}</span>
    <span>🕰️ ${selectedTime}</span>
</div>    
<p class="signature">
    — Yours truly,<br>
    Your Knight ⚔️
</p>

<p class="postscript">
    Until that moment... I shall be waiting. ❤️
</p>
            

        </div>
    `;
}
document.addEventListener("click", function (event) {

    if (event.target.id === "finishButton") {

        showKnightWaiting(
            bookingData.ladyName,
            bookingData.selectedDate,
            bookingData.selectedTime,
            bookingData.selectedType
        );

        fetch("https://romantic-notification.myromanticweb.workers.dev/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: bookingData.ladyName,
                date: bookingData.selectedDate,
                time: bookingData.selectedTime,
                dateType: bookingData.selectedType
            })
        }).catch(function (error) {
            console.error("Notification failed:", error);
        });

    }

});
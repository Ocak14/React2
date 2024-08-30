const apiUrl = 'https://980b3dafd6342058.mokky.dev/users';

function createCard(users) {
    const card = document.createElement("div");
    card.className = "card";

    const userName = document.createElement("h3");
    userName.textContent = users.name;
    card.appendChild(userName);

    const userEmail = document.createElement("p");
    userEmail.textContent = `Email: ${users.email}`;
    card.appendChild(userEmail);

    const userAge = document.createElement("p")
    userAge.textContent = `Age: ${users.age}`;
    card.appendChild(userAge);

    const userNumber = document.createElement("p");
    userNumber.textContent = `Number: ${users.number}`;
    card.appendChild(userNumber);

    if (users.image) {
        const userImage = document.createElement("img");
        userImage.src = users.image;
        userImage.alt = `${users.name}'s Image`
        card.appendChild(userImage);
    }

    return card;
}

function displayUsers() {
    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(users => {
            const container = document.getElementById("cards-container");
            container.innerHTML = "";
            users.forEach(user => {
                const card = createCard(user);
                container.appendChild(card);
            });
        })
        .catch(err => {
            console.log("We have a problem with the fetch part:", err);
        });
}

displayUsers();

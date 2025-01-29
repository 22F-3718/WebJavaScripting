const peopleData = [
    {
        Name: "Hasnain",
        Age: 21,
        CGPA: 3.14,
        Marital_Status: "Single",
        Country: "Pakistan",
        Favorite_Color: "Blue",
        Hobbies: "Reading, Coding, Gaming"
    },
    {
        Name: "Sarah",
        Age: 24,
        CGPA: 3.8,
        Marital_Status: "Married",
        Country: "United States",
        Favorite_Color: "Red",
        Hobbies: "Painting, Hiking"
    },
    {
        Name: "John",
        Age: 30,
        CGPA: 3.5,
        Marital_Status: "Single",
        Country: "United Kingdom",
        Favorite_Color: "Green",
        Hobbies: "Photography, Traveling"
    },
    {
        Name: "Maria",
        Age: 27,
        CGPA: 3.9,
        Marital_Status: "Married",
        Country: "Canada",
        Favorite_Color: "Purple",
        Hobbies: "Cooking, Yoga"
    }
];

function displayPeopleData() {
    const tableBody = document.getElementById("peopleDataTable").querySelector("tbody");
    tableBody.innerHTML = "";

    peopleData.forEach(person => {
        const row = document.createElement("tr");

        Object.values(person).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    document.getElementById("peopleDataTable").style.display = "table";
}

document.getElementById("showDataButton").addEventListener("click", displayPeopleData);

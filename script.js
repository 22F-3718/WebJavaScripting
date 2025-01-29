
const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "India", "Brazil", "China"];

function displayCountryList() {
    const countryListElement = document.getElementById("countryList");

    countryListElement.innerHTML = "";

    countries.forEach(country => {
        const listItem = document.createElement("li");
        listItem.textContent = country;
        countryListElement.appendChild(listItem);
    });
}

document.getElementById("showListButton").addEventListener("click", displayCountryList);

const myData = {
    Name: " Hasnain",
    Age: 21,
    CGPA: 3.14,
    Marital_Status: " Single"
};

function displayData() {
    const dataList = document.getElementById("listOfData");

    dataList.innerHTML = "";

    for (const key in myData) {
        const dataItem = document.createElement("li");
        dataItem.textContent = `${key}:${myData[key]}`;
        dataList.appendChild(dataItem);
    }
}

document.getElementById("submitButton").addEventListener("click", displayData);
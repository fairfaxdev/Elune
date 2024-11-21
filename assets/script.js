// IP API
const ip4 = "https://api.ipify.org";
const ip6 = "https://api6.ipify.org";
const ip64 = "https://api64.ipify.org";

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${ip4}?format=json`)
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            const ipDisplayElement = document.querySelector(".printip");
            ipDisplayElement.textContent = data.ip;
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
});
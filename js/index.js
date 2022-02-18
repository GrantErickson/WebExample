document.addEventListener("DOMContentLoaded", function (event) {
    main();
});

function main() {
    document.querySelector("p").addEventListener("click", () => {
        alert("Paragraph");
    });
}

document.querySelector("p").addEventListener("click", () => {
    alert("Paragraph");
});


var punchline;
function h1Click(value = "default") {
    alert(`Test: ${punchline}`);
}

axios.get('https://v2.jokeapi.dev/joke/Programming')
    .then((response) => {
        // handle success
        //console.log(response.data.setup);
        //console.log(response.data.delivery);
        punchline = response.data.delivery;
        document.querySelector("p.punchline").innerText = response.data.setup;
    })
    .catch((error) => {
        // handle error
        console.log(error);
    });

// Get the weather
const lat = 47.65814877019067,  // Catalyst Building
    lon = -117.40208908465422,
    apiKey = 'e44ff6715c0c7c9bf43ce3bfe74fdb6f';
axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then((response) => {
        // handle success
        console.log(response.data);
        let img = document.querySelector('#weather .icon');
        img.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
        let text = document.querySelector('#weather .description');
        text.innerText = response.data.weather[0].description;
    })
    .catch((error) => {
        // handle error
        console.log(error);
    });

function toggleMenu() {
    let element = document.querySelector('.menu');

    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}
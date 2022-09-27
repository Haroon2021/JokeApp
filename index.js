let jokeapp = {
    fetch: function (joketype) {
        fetch(
            "https://official-joke-api.appspot.com/jokes/" + joketype + "/random"
        )
        .then((response) => {
            if (!response.ok) {
                alert("Invalid Entry");
          throw new Error("Invalid Entry");
            }
           return response.json();
        })
        .then((data) => this.displayJoke(data));
    },
    displayJoke: function(data) {
        const setup = data[0].setup;
       const punchline = data[0].punchline;
       console.log(setup)
       document.querySelector(".setup").innerText = "Setup: " + setup;
    document.querySelector(".punchline").innerText = "Punchline: " + punchline;
    },
    type: function () {
        this.fetch(document.querySelector(".search-joke").value);
      },
};
document.querySelector(".search button").addEventListener("click", function () {
    jokeapp.type();
  });
  document.querySelector(".search-joke").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        jokeapp.type();
      }
  });
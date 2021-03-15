$(document).ready(function () {
  // alert('f')
  console.log("l");
  $("#btn1").click(function (e) {
    e.preventDefault();

    $(".lp").css("display", "block");

    var userinpt = document.getElementById("inpt1").value;

    // remove whitespace from the input
    const searchQuery = userinpt.trim();
    const searchResults = document.querySelector(".js-search-results");
    // Clear the previous results for new search
    searchResults.innerHTML = "";
    // console.log(searchQuery);

    try {
      const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.query.searchinfo.totalhits === 0) {
            alert("Sorry No Results Found! Try a different search string");
          } else {
            data.query.search.forEach((x) => {
              const url = `https://en.wikipedia.org/?curid=${x.pageid}`;
              // console.log(url);
              $(".js-search-results").append(`<div class="result-item m-3">
                      <h4 class="result-title">
                        <a href="${url}" target="_blank" rel="noopener">${x.title}</a>
                      </h4>
                      <a href="${url}" class="result-link" target="_blank" rel="noopener"><b class="text-success">${url}</b></a>
                      <span class="result-snippet text-secondary">${x.snippet}</span><br>
                    </div>`);
              $(".lp").css("display", "none");
            });
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      console.info("dummy");
    }

    // console.log(userinpt)
    $("#inpt1").val("");
  });
});

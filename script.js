const NewsAccordion = document.getElementById("NewsAccordion")
let apiKey = "361ec4baed3a4174971094e9d0d49e16"
const xhr = new XMLHttpRequest();
 
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);
// xhr.getResponseHeader("Content-type", "application/json");
xhr.send();
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        console.log(articles)
        let newsHtml ="";
        articles.forEach(function(element, index) {
                    //  console.log(element,index)
            // console.log(articles[news]);
            let news = `<div class="card" >

                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News :</b> ${index+1} ${element["title"]}
                        </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                    data-parent="#NewsAccordion">
                    <div class="card-body">
                         ${element["description"]}.<a href="${element["url"]}" target ="_blank"> Read More</a>
                    </div>
                </div>
             </div>`
             newsHtml +=news;
         });
        NewsAccordion.innerHTML =newsHtml;
    } else {
        console.log("some err occured")
    }
}
 

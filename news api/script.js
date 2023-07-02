let url="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
let response=fetch(url);
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests.articles)
    ihtml=""
    for (item in contests.articles) {
        console.log(contests.articles[item]);

        ihtml+=`
        <div class="card mx-2 my-2" style="width: 22rem;">
            <img src="${contests.articles[item].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contests.articles[item].title}</h5>
                <p><b>Published At :</b> ${contests.articles[item].publishedAt}</p>
                <p><b>Author : </b>${contests.articles[item].author}</p>
                <p class="card-text">${contests.articles[item].content}</p>
                <p class="card-text">${contests.articles[item].description}</p>
                <a href="${contests.articles[item].url}" class="btn btn-primary">Read More....</a>
            </div>
      </div>
        `
    }
    CardContainer.innerHTML=ihtml
})


searchForm = document.querySelector("#searchForm")

function createCard(data)
{
	console.log(data)
	card = document.createElement("div");
	card.setAttribute("class","card mx-auto movie_cards")
	card.setAttribute("style","width: 25rem;")
	img = document.createElement("IMG")
	img.setAttribute("src",data.Poster)
	img.setAttribute("class","card-img-top")
	card.appendChild(img)  
	card_body = document.createElement("div");
	card_body.setAttribute("class", "card-body");

	title = document.createElement("h5");
	card_body.appendChild(title);
	title.setAttribute("class","card-title")
	title.innerText = data.Title

	year = document.createElement("p");
	card_body.appendChild(year);
	year.setAttribute("class","card-text")
	year.innerText = data.Year

	id = document.createElement("p");
	card_body.appendChild(id);
	id.setAttribute("class","card-text")
	id.innerText = data.imdbID

	card.appendChild(card_body)


	return card 

}

function createMovieCards(data){
	if(!data){
		//do error handling
		console.log("do error handling here")
		return
	}
	// cards=[]
	for (i = 0; i < data.length; i++) {
		card = createCard(data[i])  
		document.body.appendChild(card)
	}
	console.log(data)
}

function onSearchSubmit(event){
	event.preventDefault()
	searchText = document.querySelector("#search").value
	//take the searchText and make a request to omdb api

	axios.get("http://www.omdbapi.com/?s=" + searchText + "&apikey=2c9f0b30&plot=full")
	.then(result => {
		//create dynaic card based on results
		createMovieCards(result.data.Search)

	})
	.catch(err => console.log(error))


	
} 

searchForm.addEventListener("submit", onSearchSubmit)
 


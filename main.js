$.ajax('https://data.nashville.gov/resource/xakp-ess3.json')
.done((response) => {
    dataBuilder(response);
}).fail((err) => {
    console.error(err);
});

const dataBuilder= (artworks) => {
    let domString = '';
    artworks.forEach((artwork) => {
        domString += `<div id="" class="card-loc location p-3 m-3 art" style="width: 21.5rem;">
                        <img class="card-img-top" src="${artwork.photo_link}" alt="Card image cap" width="325px" height="250px">
                        <div class="card-body">
                            <h5 class="card-title">${artwork.title}</h5>
                            <h6 class="card-title">${artwork.type}</h6>
                    
                        </div>
                    </div>`
    });
    $('#artwork').append(domString);
}

// // Load locations
// const loadDogData = () => {
//     return new Promise((resolve, reject) => {
//         $.get('http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true')
//             .done((data) => {
//                 // const dogData = data.locations.filter(location => location.movie_id == movieId);
//                 resolve(dogData);
//             })
//             .fail((error) => {
//                 reject(error);
//             })
//     })
// }

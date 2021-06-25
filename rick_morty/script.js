async function getDatosPersonaje(){

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const characters = await res.json();


    const aleatorio = Math.floor(Math.random() * characters.info.count +1);
    const res2 = await fetch (`https://rickandmortyapi.com/api/character/${aleatorio}`)
    const character = await res2.json();
    
    const image = character.image
    const name = character.name
    const n_episodes = character.episode.length

    const url_first_episode = character.episode[0]


    const res3 = await fetch(url_first_episode)
    const first_episode = await res3.json();


    const name_episode = first_episode.name
    const date = first_episode.air_date
    const epi = first_episode.episode

    console.log(image,name,n_episodes,name_episode,date,epi);

    return [image,name,n_episodes,name_episode,date,epi];


}

document.querySelector("#randomBtn").addEventListener("click",()=>{
    getDatosPersonaje()
    .then(datos => {

        document.querySelector("#character").innerHTML = `
        
        <article class="card">
            

            <h3 class="card__name">${datos[1]}</h3>

            <figure class="card__img">
                <img src="${datos[0]}" alt="${datos[1]}" class="card__img__image"> 
                <figcaption class="card__img__caption">${datos[1]}</figcaption>
            </figure>
            <div class="card__wrapper">
                <p class="card__episodeName"><span>Episodio: </span>${datos[3]}</p>
                <p class="card__nEpisodes"><span>Episodios en los que aparece: </span>${datos[2]}</p>
                <p class="card__dateEpisode"><span>Fecha de emisión: </span>${datos[4]}</p>
                <p class="card__epi"><span>Primera aparición: </span>${datos[5]}</p>

            </div>
            

        </article>
        
        `
    })



})



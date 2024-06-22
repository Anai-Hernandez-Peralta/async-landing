const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCNjHgaLpdy1IMNK57pYiKiQ&part=snippet%2Cid&order=date&maxResults=24';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '235a8fb54emsh201700163c7de6fp15c1e7jsnec16b6cbec66',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-[#102C57">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(20, 24).join('') /*-> sirve para mostrar solo unos cuantos elementos de los que se obutvieron en total*/}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

/*
Usamos este recurso para consumir la API de youtube: https://rapidapi.com/hub
*/

/*
    1. Creamos un repositorio en github y lo clonamos.
    2. En nuestra terminal ubicados en el proyecto usamos el comando npm init -y.
    3. Para desplegar nuestro proyecto nos dirigimos al apartado de configuracion en nuestro repositorio del proyecto, enseguida nos dirigimos a pages.
    4. En nuestra terminal ubicados en nuestro proyecto ocupamos el comando *npm install gh-pages --save-dev*.
    5. En nuestro archivo package.json agregamos un nuevo script:
    "nombreScript": "gh-pages -d carpetaConArchivosADesplegar" -> "deploy": "gh-pages -d src". La carpeta debe ser la que contenga nuestro index.html.
    6. Enseguida subimos todos nuestros cambios al respositorio de github.
    7. Despues ejecutamos el comando anteriormente creado: npm run comando -> npm run deploy.
    8. Por último, en github pages en la parte de source indicamos que la branch será gh-pages y usaremos root.
*/
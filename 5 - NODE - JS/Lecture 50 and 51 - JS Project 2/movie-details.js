
const movieDetail = document.querySelector("#movie-detail");
const params = new URLSearchParams(location.search);
const imdbID = params.get("id");

const NO_POSTER = "https://placehold.co/400x600/18181b/a1a1aa?text=No+Poster";

if (imdbID) {
    searchMovie(imdbID.trim());
} else {
    movieDetail.innerHTML = ` <div class="text-center py-20">
    <p class="text-zinc-400 text-lg mb-4">No Movie Selected.</p>
    <a href="index.html#search" class="text-red-500 hover:underline">Return to Search</a>
</div> `;
}

async function searchMovie(imdbID) {
    movieDetail.innerHTML = `<div class="flex justify-center py-20">
    <span class="loader"></span>
</div>`;

    try {
        let response = await fetch(`https://www.omdbapi.com/?&apikey=81dbdd6e&i=${imdbID}&plot=full`);
        let data = await response.json();

        if (data.Response === "True") {
            displayMovies(data);
        } else {
            movieDetail.innerHTML = `<div class="text-center py-20">
    <p class="text-red-400 text-xl font-semibold mb-2">${data.Error || 'Movie not founf.'}</p>
    <a href="index.html" class="text-zinc-400 hover:text-white-underline">Back to search</a>
</div>`;
        }
    } catch (error) {
        movieDetail.innerHTML = `<div class="text-center py-20">
    <p class="text-red-400 text-lg">Error loading movie details. Please try again.</p>
</div>`;
    }
}

function displayMovies(data) {
    document.title = `${data.title} - MovieHub`;

    const poster = (data.Poster && data.Poster !== "N/A") ? data.Poster : NO_POSTER;

    movieDetail.innerHTML = `<div class="grid-cols-1 lg:grid-cols-3 gap-8 bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 rounded-2xl">
    <div class="flex justify-center">
        <img src="${poster}" alt="${data.Title}"
            class="w-full max-w-sm rounded-xl object-cover shadow-2xl border border-zinc-800">
    </div>
</div>
<div class="lg:col-span-2 space-2 space-y-5">
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white">${data.Title}</h1>
    <section class="flex flex-wrap items-center gap-2.5 text-sm">
        <span
            class="bg-zinc-800 border border-zinc-700 px-3 y-1 rounded-md text-zinc-300 font-medium">${data.Released}</span>
        <span
            class="bg-zinc-800 border border-zinc-700 px-3 y-1 rounded-md text-zinc-300 font-medium">${data.Rated}</span>
        <span
            class="bg-zinc-800 border border-zinc-700 px-3 y-1 rounded-md text-zinc-300 font-medium">${data.Runtime}</span>
        <span
            class="bg-zinc-800 border border-zinc-700 px-3 y-1 rounded-md text-zinc-300 font-medium">${data.Genre}</span>
        <span
            class="bg-zinc-800 border border-zinc-700 px-3 y-1 rounded-md text-zinc-300 font-medium">${data.imdbRating}/10</span>
    </section>
    <div class="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-4">
        <h2 class="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">Plot Overview</h2>
        <p class="text-zinc-300 leading-relaxed">${data.Plot}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <section class="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-3.5">
            <span class="block text-xs uppercase text-zinc-500 font-medium mb-1">Director</span>
            <span class="text-zinc-200 font-semibold">${data.Director}</span>
        </section>
        <section class="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-3.5">
            <span class="block text-xs uppercase text-zinc-500 font-medium mb-1">Writer</span>
            <span class="text-zinc-200 font-semibold">${data.Writer}</span>
        </section>
        <section class="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-3.5">
            <span class="block text-xs uppercase text-zinc-500 font-medium mb-1">Actors</span>
            <span class="text-zinc-200 font-semibold">${data.Actors}</span>
        </section>
        <section class="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-3.5">
            <span class="block text-xs uppercase text-zinc-500 font-medium mb-1">Language</span>
            <span class="text-zinc-200 font-semibold">${data.Language}</span>
        </section>
        <section class="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-3.5">
            <span class="block text-xs uppercase text-zinc-500 font-medium mb-1">Country</span>
            <span class="text-zinc-200 font-semibold">${data.Country}</span>
        </section>
    </div>
    <div class="pt-2">
        <a href="https://www.imdb.com/title/${data.imdbID}" target="_blank" rel="noopener moreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition">
            <span>View on IMDB</span>
            <span>&rarr;</span>
        </a>
    </div>
</div>
</div> `;
}
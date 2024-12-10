const movies = {
    happy: [
        {
            title: "Good Will Hunting",
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/6/2/1/51621-good-will-hunting-0-2000-0-3000-crop.jpg?v=acb4766abd",
            rating: "8.3",
            summary: "Will Hunting, a janitor at MIT, has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
            watch: "Amazon Prime"
        },
        {
            title: "Coco",
            img: "https://a.ltrbxd.com/resized/sm/upload/3p/mh/wq/v9/6Ryitt95xrO8KXuqRGm1fUuNwqF-0-2000-0-3000-crop.jpg?v=2a90bd6512",
            rating: "8.4",
            summary: "Miguel, a young boy, embarks on a journey to the Land of the Dead to find his great-great-grandfather, a famous musician.",
            watch: "Disney+"
        },
        {
            title: "Interstellar",
            img: "https://a.ltrbxd.com/resized/film-poster/1/1/7/6/2/1/117621-interstellar-0-2000-0-3000-crop.jpg?v=7ad89e6666",
            rating: "8.6",
            summary: "A group of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
            watch: "HBO Max"
        },
        {
            title: "Suzume",
            img: "https://a.ltrbxd.com/resized/film-poster/8/2/2/2/8/1/822281-suzume-0-2000-0-3000-crop.jpg?v=fadaf47b7f",
            rating: "7.8",
            summary: "Suzume, a 17-year-old girl, meets a mysterious young man who leads her on a journey to close mysterious doors around Japan.",
            watch: "Netflix"
        },
        {
            title: "Chef",
            img: "https://a.ltrbxd.com/resized/film-poster/1/5/1/3/0/9/151309-chef-0-2000-0-3000-crop.jpg?v=e8ec38c88e",
            rating: "7.3",
            summary: "A talented chef starts a food truck to reclaim his love for cooking and connect with his son.",
            watch: "Netflix"
        },
        {
            title: "Spirited Away",
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/9/2/1/51921-spirited-away-0-2000-0-3000-crop.jpg?v=a3ad463c55",
            rating: "8.6",
            summary: "A young girl becomes trapped in a mysterious, magical world and must find her way back to reality.",
            watch: "HBO Max"
        }        
    ],
    sad: [
        {
            title: "The Green Mile",
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/6/1/3/51613-the-green-mile-0-2000-0-3000-crop.jpg?v=fff3d0bd1f",
            rating: "8.6",
            summary: "The lives of guards on Death Row are affected by one of their charges: a man with a mysterious gift.",
            watch: "Amazon Prime"
        },
        {
            title: "Schindler's List",
            img: "https://a.ltrbxd.com/resized/sm/upload/bz/1x/em/jr/yPisjyLweCl1tbgwgtzBCNCBle-0-2000-0-3000-crop.jpg?v=ca5215c5a9",
            rating: "9.0",
            summary: "In German-occupied Poland, Oskar Schindler saves hundreds of Jews from the Holocaust.",
            watch: "Netflix"
        },
        {
            title: "Requiem for a Dream",
            img: "https://a.ltrbxd.com/resized/sm/upload/lv/4b/f2/zj/muym4jTjdLx7E6as09d1wlC3sOB-0-2000-0-3000-crop.jpg?v=b4d5a4aa37",
            rating: "8.3",
            summary: "The lives of four drug addicts who have their lives pulled apart by addiction and their pursuit of their individual dreams.",
            watch: "Amazon Prime"
        },
        {
            title: "The Pianist",
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/6/7/2/51672-the-pianist-0-2000-0-3000-crop.jpg?v=3eee5ac018",
            rating: "8.5",
            summary: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
            watch: "HBO Max"
        },
        {
            title: "A Beautiful Mind",
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/6/4/8/51648-a-beautiful-mind-0-2000-0-3000-crop.jpg?v=790ccfb890",
            rating: "8.2",
            summary: "The story of John Nash, a brilliant but asocial mathematician, and his struggles with schizophrenia.",
            watch: "Amazon Prime"
        },
        {
            title: "Life is Beautiful",
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/4/8/7/51487-life-is-beautiful-0-2000-0-3000-crop.jpg?v=90ed0e667e",
            rating: "8.6",
            summary: "A Jewish man uses his imagination to protect his son from the horrors of the Holocaust.",
            watch: "Netflix"
        }        
    ],
    excited: [
        {
            title: "Inception",
            img: "https://a.ltrbxd.com/resized/sm/upload/sv/95/s9/4j/inception-0-1000-0-1500-crop.jpg?v=30d7224316",
            rating: "8.8",
            summary: "A thief who steals secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
            watch: "Netflix"
        },
        {
            title: "Kill Bill: Vol. 1",
            img: "https://a.ltrbxd.com/resized/sm/upload/sw/w2/ep/v4/9O50TVszkz0dcP5g6Ej33UhR7vw-0-1000-0-1500-crop.jpg?v=5a65f5202f",
            rating: "8.1",
            summary: "A former assassin seeks revenge on the team of assassins who betrayed her, leading to a showdown with her former mentor.",
            watch: "Amazon Prime"
        },
        {
            title: "Mad Max: Fury Road",
            img: "https://a.ltrbxd.com/resized/film-poster/6/2/7/8/0/62780-mad-max-fury-road-0-1000-0-1500-crop.jpg?v=37c5424b1f",
            rating: "8.1",
            summary: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a drifter named Max.",
            watch: "HBO Max"
        },
        {
            title: "Spider-Man: Across the Spider-Verse",
            img: "https://a.ltrbxd.com/resized/film-poster/4/9/7/6/3/1/497631-spider-man-across-the-spider-verse-0-1000-0-1500-crop.jpg?v=f2acbf1b8a",
            rating: "8.9",
            summary: "Miles Morales embarks on a journey across the multiverse, meeting other Spider-People while facing a new villain.",
            watch: "Netflix"
        },
        {
            title: "The Nice Guys",
            img: "https://a.ltrbxd.com/resized/film-poster/2/1/6/3/0/1/216301-the-nice-guys-0-1000-0-1500-crop.jpg?v=40616daa2c",
            rating: "7.4",
            summary: "In 1970s Los Angeles, a private eye and a tough enforcer must team up to solve the mystery of a missing girl and a murdered adult film star.",
            watch: "Amazon Prime"
        },
        {
            title: "Baby Driver",
            img: "https://a.ltrbxd.com/resized/film-poster/2/6/8/9/5/0/268950-baby-driver-0-1000-0-1500-crop.jpg?v=61304ddfc8",
            rating: "7.6",
            summary: "A talented getaway driver is forced into a heist that goes wrong, leading to a deadly collision of loyalty and betrayal.",
            watch: "Netflix"
        }
        
    ],
    funny: [
        {
            title: "The Wolf of Wall Street",
            img: "https://a.ltrbxd.com/resized/film-poster/8/6/1/1/4/86114-the-wolf-of-wall-street-0-1000-0-1500-crop.jpg?v=9fd1891260",
            rating: "8.2",
            summary: "Based on the true story of Jordan Belfort, this film chronicles his rise and fall on Wall Street, filled with excess, greed, and corruption.",
            watch: "Amazon Prime"
        },
        {
            title: "War Dogs",
            img: "https://a.ltrbxd.com/resized/sm/upload/7b/d2/2z/ef/aqhAqttDq7zgsTaBHtCD8wmTk6k-0-1000-0-1500-crop.jpg?v=b1d4ca3acb",
            rating: "7.1",
            summary: "Two young men from Miami become arms dealers and profit from selling weapons to the U.S. government, facing dangerous consequences.",
            watch: "HBO Max"
        },
        {
            title: "Kiss Kiss Bang Bang",
            img: "https://a.ltrbxd.com/resized/sm/upload/ek/qa/d5/cb/18GHWx66uADdY7GM9NL8WRY5GSw-0-1000-0-1500-crop.jpg?v=cc723e4c2b",
            rating: "7.5",
            summary: "A petty thief posing as an actor is caught up in a murder investigation in Hollywood, leading to hilarious and dangerous situations.",
            watch: "Amazon Prime"
        },
        {
            title: "Superbad",
            img: "https://a.ltrbxd.com/resized/film-poster/4/7/7/7/6/47776-superbad-0-1000-0-1500-crop.jpg?v=b43686efcb",
            rating: "8.0",
            summary: "Two high school friends try to enjoy their last days of school while navigating a series of hilarious and awkward situations.",
            watch: "Netflix"
        },
        {
            title: "The Hangover",
            img: "https://a.ltrbxd.com/resized/film-poster/4/0/1/0/0/40100-the-hangover-0-1000-0-1500-crop.jpg?v=6464871bf5",
            rating: "7.7",
            summary: "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night, and the groom is missing. They must retrace their steps to find him.",
            watch: "HBO Max"
        },   
        {
            title: "Ted",
            img: "https://a.ltrbxd.com/resized/sm/upload/ow/bs/pe/yv/carghLovNNSEphT9UZXTJ74I7lE-0-1000-0-1500-crop.jpg?v=8568f99d56",
            rating: "6.9",
            summary: "A man must deal with his childhood teddy bear, which has come to life and is causing trouble in his adult life.",
            watch: "Netflix"
        }        
    ],
    romantic: [
        {
            title: "Titanic", 
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/5/2/4/51524-titanic-0-2000-0-3000-crop.jpg?v=7517ea94ce", 
            rating: "7.8", 
            summary: "A young couple from different social backgrounds fall in love aboard the ill-fated RMS Titanic, resulting in a story of love, loss, and survival.", 
            watch: "Netflix"
        },
        { 
            title: "La La Land", 
            img: "https://a.ltrbxd.com/resized/film-poster/2/4/0/3/4/4/240344-la-la-land-0-2000-0-3000-crop.jpg?v=053670ff84", 
            rating: "8.0", 
            summary: "A jazz musician and an aspiring actress fall in love but struggle to maintain their relationship while chasing their dreams in Los Angeles.", 
            watch: "Netflix" 
        },
        { 
            title: "Your Name", 
            img: "https://a.ltrbxd.com/resized/sm/upload/md/ku/l7/m5/xq1Ugd62d23K2knRUx6xxuALTZB-0-2000-0-3000-crop.jpg?v=443be7928f", 
            rating: "8.4", 
            summary: "Two teenagers, a boy and a girl, swap bodies and begin to form a mysterious connection despite living in different parts of Japan.", 
            watch: "Netflix" 
        },
        {
            title: "Before Sunrise", 
            img: "https://a.ltrbxd.com/resized/film-poster/5/1/9/7/4/51974-before-sunrise-0-2000-0-3000-crop.jpg?v=006e8fedea", 
            rating: "8.1", 
            summary: "A young American and a French woman meet on a train in Europe and spend a night in Vienna, sparking a deep connection and an unforgettable night of conversation and exploration.", 
            watch: "Amazon Prime"
        },        
        {
            title: "How to Lose a Guy in 10 Days", 
            img: "https://a.ltrbxd.com/resized/sm/upload/t0/2v/iy/9c/aiB7u6xZ9RWeDTQ7c92J8AoiHj3-0-2000-0-3000-crop.jpg?v=422ef264f8", 
            rating: "6.8", 
            summary: "Andie, a journalist, tries to make a man fall in love with her and then deliberately push him away to write a piece on the subject. However, she unknowingly falls in love with him.", 
            watch: "Amazon Prime"
        },
        { 
            title: "The Notebook", 
            img: "https://a.ltrbxd.com/resized/film-poster/4/5/6/6/7/45667-the-notebook-0-2000-0-3000-crop.jpg?v=d867e84f30", 
            rating: "7.8", 
            summary: "A young couple falls in love and endures the challenges of life and time, their love story being remembered by one of them in their later years.", 
            watch: "HBO Max" 
        }
        
    ],
    popular: [
        { 
            title: "Avatar: The Way of Water", 
            img: "https://a.ltrbxd.com/resized/film-poster/6/3/0/5/8/63058-avatar-the-way-of-water-0-2000-0-3000-crop.jpg?v=cc3269e69d", 
            rating: "7.8", 
            summary: "Jake Sully and Neytiri have formed a family, but when trouble arises, they must find a new home.", 
            watch: "Disney+"
        },
        { 
            title: "Top Gun: Maverick", 
            img: "https://a.ltrbxd.com/resized/film-poster/2/9/3/4/6/5/293465-top-gun-maverick-0-2000-0-3000-crop.jpg?v=9f8af0f61b", 
            rating: "8.3", 
            summary: "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is called back to Top Gun to train a new generation of pilots.", 
            watch: "Amazon Prime" 
        },
        { 
            title: "Avengers: Endgame", 
            img: "https://a.ltrbxd.com/resized/film-poster/2/2/6/6/6/0/226660-avengers-endgame-0-2000-0-3000-crop.jpg?v=250ab286a3", 
            rating: "8.4", 
            summary: "After the devastating events of Infinity War, the Avengers must reunite and use all their resources to reverse the damage caused by Thanos and save the universe.", 
            watch: "Disney+" 
        },
        { 
            title: "Dune", 
            img: "https://a.ltrbxd.com/resized/sm/upload/nx/8b/vs/gc/cDbNAY0KM84cxXhmj8f0dLWza3t-0-2000-0-3000-crop.jpg?v=49eed12751", 
            rating: "8.1", 
            summary: "A noble family becomes embroiled in a war for control of the galaxy’s most valuable asset while its heir becomes troubled by visions of a dark future.", 
            watch: "HBO Max" 
        },        
        { 
            title: "Mission: Impossible – Dead Reckoning", 
            img: "https://a.ltrbxd.com/resized/film-poster/5/0/3/4/0/2/503402-mission-impossible-dead-reckoning-part-one-0-2000-0-3000-crop.jpg?v=34b8b35ec9", 
            rating: "7.8", 
            summary: "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens humanity before it falls into the wrong hands.", 
            watch: "Paramount+" 
        },
        { 
            title: "Demon Slayer: Mugen Train", 
            img: "https://a.ltrbxd.com/resized/film-poster/5/6/1/5/2/1/561521-demon-slayer-mugen-train-0-2000-0-3000-crop.jpg?v=a3674f3d47", 
            rating: "8.4", 
            summary: "Tanjiro Kamado and his comrades embark on a new mission aboard the Mugen Train, where they face terrifying demons in a race against time.", 
            watch: "Funimation" 
        }
        
    ]
};

function recommendMovies(mood) {
    const recommendationsDiv = document.getElementById("recommendations");
    const selectedMovies = movies[mood];

    if (selectedMovies) {
        recommendationsDiv.innerHTML = "";
        selectedMovies.forEach((movie, index) => {
            recommendationsDiv.innerHTML += `
                <div class="movie" onclick="showMovieDetails(${index}, '${mood}')">
                    <img src="${movie.img}" alt="${movie.title}">
                    <span class="movie-title">${movie.title}</span>
                </div>
            `;
        });
    } else {
        recommendationsDiv.innerHTML = "";
    }
}

function showMovieDetails(index, mood) {
    const movie = movies[mood][index];
    const movieDetailsDiv = document.createElement('div');
    movieDetailsDiv.className = 'movie-details';

    movieDetailsDiv.innerHTML = `
        <h2 style="color:red;">${movie.title}</h2>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p><strong>Summary:</strong> ${movie.summary}</p>
        <p><strong>Watch on:</strong> <span style="color:red;">${movie.watch}</span></p>
    `;

    const recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.appendChild(movieDetailsDiv);

    // Auto-scroll to the movie details section
    movieDetailsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add event listeners to the buttons
document.getElementById('happyBtn').addEventListener('click', () => recommendMovies('happy'));
document.getElementById('sadBtn').addEventListener('click', () => recommendMovies('sad'));
document.getElementById('excitedBtn').addEventListener('click', () => recommendMovies('excited'));
document.getElementById('funnyBtn').addEventListener('click', () => recommendMovies('funny'));
document.getElementById('romanticBtn').addEventListener('click', () => recommendMovies('romantic'));
document.getElementById('popularBtn').addEventListener('click', () => recommendMovies('popular'));

// Trigger the "popular" section to be opened on page load
document.addEventListener('DOMContentLoaded', () => recommendMovies('popular'));

let lastScrollTop = 0; // Track the last scroll position
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down - hide navbar
        navbar.style.top = "-65px"; // Adjust this value to match your navbar height
    } else {
        // Scrolling up - show navbar
        navbar.style.top = "0";
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

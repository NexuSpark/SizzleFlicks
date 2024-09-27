document.addEventListener("DOMContentLoaded", () => {
    const moviesElement = document.getElementById('movies');
    const ageElement = document.getElementById('age');
    const genreElement = document.getElementById('genre');
    const formElement = document.getElementById('form');

    formElement.addEventListener('submit', recommend);
    function scifi(age) {
        let recomendations = [];
        if (age < 12) {
            recomendations.push("WALL-E (2008)");
            recomendations.push("Big Hero 6 (2014)");
            recomendations.push("Zathura: A Space Adventure (2005)");
        } else if (age < 18) {
            recomendations.push("The Martian (2015)");
            recomendations.push("Interstellar (2014)");
            recomendations.push("Ender's Game (2013)");
        } else if (age < 35) {
            recomendations.push("Inception (2010)");
            recomendations.push("Blade Runner 2049 (2017)");
            recomendations.push("Ex Machina (2014)");
        } else {
            recomendations.push("2001: A Space Odyssey (1968)");
            recomendations.push("The Day the Earth Stood Still (1951)");
            recomendations.push("The Matrix (1999)");
        }
        return recomendations;
    }

    function fantasy(age) {
        let recomendations = [];
        if (age < 12) {
            recomendations.push("Harry Potter and the Sorcerer's Stone (2001)");
            recomendations.push("The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005)");
            recomendations.push("The Wizard of Oz (1939)");
        } else if (age < 18) {
            recomendations.push("Pan's Labyrinth (2006)");
            recomendations.push("Stardust (2007)");
            recomendations.push("The Golden Compass (2007)");
        } else if (age < 35) {
            recomendations.push("The Shape of Water (2017)");
            recomendations.push("Labyrinth (1986)");
            recomendations.push("What We Do in the Shadows (2014)");
        } else {
            recomendations.push("The Princess Bride (1987)");
            recomendations.push("The NeverEnding Story (1984)");
            recomendations.push("The Secret of NIMH (1982)");
        }
        return recomendations;
    }

    function horror(age) {
        let recomendations = [];
        if (age < 12) {
            recomendations.push("Coraline (2009)");
            recomendations.push("Monster House (2006)");
            recomendations.push("The Addams Family (1991)");
        } else if (age < 18) {
            recomendations.push("A Quiet Place (2018)");
            recomendations.push("Scary Stories to Tell in the Dark (2019)");
            recomendations.push("Happy Death Day (2017)");
        } else if (age < 35) {
            recomendations.push("Get Out (2017)");
            recomendations.push("Hereditary (2018)");
            recomendations.push("Midsommar (2019)");
        } else {
            recomendations.push("The Shining (1980)");
            recomendations.push("Psycho (1960)");
            recomendations.push("Rosemary's Baby (1968)");
        }
        return recomendations;
    }

    function animation(age) {
        let recomendations = [];
        if (age < 12) {
            recomendations.push("Inside Out (2015)");
            recomendations.push("The Incredibles (2004)");
            recomendations.push("Toy Story (1995)");
        } else if (age < 18) {
            recomendations.push("Spider-Man: Into the Spider-Verse (2018)");
            recomendations.push("Coraline (2009)");
            recomendations.push("The Nightmare Before Christmas (1993)");
        } else if (age < 35) {
            recomendations.push("Waking Life (2001)");
            recomendations.push("Persepolis (2007)");
            recomendations.push("Anomalisa (2015)");
        } else {
            recomendations.push("Akira (1988)");
            recomendations.push("Fritz the Cat (1972)");
            recomendations.push("Ghost in the Shell (1995)");
        }
        return recomendations;
    }

    function recommend(event) {
        event.preventDefault();
        const age = ageElement.value;
        const genre = genreElement.value;
        let movies;
        switch (genre) {
            case 'scifi':
                movies = scifi(age);
                break;
            case 'fantasy':
                movies = fantasy(age);
                break;
            case 'horror':
                movies = horror(age);
                break;
            case 'animation':
                movies = animation(age);
                break;
            default:
                movies = scifi(age);
                break;
        }
        moviesElement.innerHTML = movies.map(movie => `<li>${movie}</li>`).join('');
    }
})
    

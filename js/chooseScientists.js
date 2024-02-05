// -------------------------------------------масив вчених------------------------------------
const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

// -------------------------------------------функція для виведення на сторінку------------------------------------


let scientistsCont = document.querySelector(".scientists-container");
let filters = document.querySelector(".filters");


function scientistsAdd(scientists, scientistsCont) {
    scientistsCont.innerHTML = '';
    
    

    scientists.forEach(scientist => {
        let scientistDiv = document.createElement("div"); 
        scientistDiv.classList.add("scientist");

        let scientistName = document.createElement("p");
        scientistName.textContent = scientist.name + " " + scientist.surname;
        scientistDiv.appendChild(scientistName);

        let scientistYear = document.createElement("p");
        scientistYear.textContent = scientist.born + "-" + scientist.dead;
        scientistDiv.appendChild(scientistYear);

        scientistsCont.appendChild(scientistDiv); 
    });
};

scientistsAdd(scientists, scientistsCont);

// -------------------------------------------фільтрація------------------------------------
// ---1---
let nineteenthCenturyScientists = scientists.filter(scientist => {
  return scientist.born >= 1800 && scientist.born <= 1899;
});

// ---2---
let sortScientistsAlphabetically = scientists.slice().sort((a, b) => a.name.localeCompare(b.name));

// ---3---
let sortScientistsByYears = scientists.slice().sort((a, b) => {
    const yearsOfLifeA = a.dead - a.born;
    const yearsOfLifeB = b.dead - b.born;
    return yearsOfLifeA - yearsOfLifeB;
});

// ---4---
let youngestScientist = [];
youngestScientist.push(scientists.find(scientist => {
    return scientist.born === Math.max(...scientists.map(s => s.born));
}));

// ---5---
let AlbertEinshtein = [];
AlbertEinshtein.push(scientists.find((scientist) => scientist.name == "Albert"));

// ---6---
let surnameWithC = scientists.filter(scientists => {
    return scientists.surname.charAt(0) == "C";
});

// ---7---
let namesWithoutA = scientists.filter(scientists => {
    return scientists.name.charAt(0) !== "A";
});

// ---8---
let oldestScientist = [];
oldestScientist.push(scientists.find(scientist => {
    return scientist.born === Math.min(...scientists.map(s => s.born));
}));

let youngestAndOldest = youngestScientist.concat(oldestScientist);

// ---9---
let withSameLetters = scientists.filter(scientists => {
    return scientists.name.charAt(0) === scientists.surname.charAt(0);
});

// -------------------------------------------виведення відфільтрованого масиву------------------------------------


filters.addEventListener('click', function(event) {
    if (event.target.classList.contains('filter')) {
        const action = event.target.getAttribute('data-action');
        
        switch(action) {
            case 'filter1':
                scientistsAdd(nineteenthCenturyScientists, scientistsCont);
                break;
            
            case 'filter2':
                scientistsAdd(sortScientistsAlphabetically, scientistsCont);
                break;
            
            case 'filter3':
                scientistsAdd(sortScientistsByYears, scientistsCont);
                break;
            
            case 'filter4':
                scientistsAdd(youngestScientist, scientistsCont);
                break;
            
            case 'filter5':
                scientistsAdd(AlbertEinshtein, scientistsCont);
                break;
            
            case 'filter6':
                scientistsAdd(surnameWithC, scientistsCont);
                break;
            
            case 'filter7':
                scientistsAdd(namesWithoutA, scientistsCont);
                break;
            
            case 'filter8':
                scientistsAdd(youngestAndOldest, scientistsCont);
                break;
            
            case 'filter9':
                scientistsAdd(withSameLetters, scientistsCont);
                break;
            
            default:
                break;
        }
    }
});
const print = (x) => {console.log(x)};
const t = document.querySelector("#portfolioTitle");
const a = document.querySelectorAll(".title.centered")[1];

///-------------------------------------------------------------------------------

const inViewport = (element) => {
    const {top, l, bottom, r} = element.getBoundingClientRect();
    
    const h =  window.innerHeight;
    //console.log(top * 2 - bottom, bottom);

    if(top * 2 - bottom < 0) return false;
    if(bottom > h) return false;
    return true;
};

/* MANAGE ANIMATIONS */

let titleQueries = {queries: ["#portfolioTitle", "#contactTitle", "hehe"]};

const runThroughQueries = (array, classToAdd) => {
    let queriesToRemove = [];

    for(let i = 0; i < array.queries.length; i++){
        query = array.queries[i];
        title = document.querySelector(query);

        if(title == null)
        {
            console.error("Invalid CSS query: " + query);
            queriesToRemove.unshift(i);
            continue;
        }
        else if(inViewport(title))
        {
            title.classList.add(classToAdd);
            queriesToRemove.unshift(i);
        }
    }

    queriesToRemove.forEach(index => {
        array.queries.splice(index, 1);
    });
};

runThroughQueries(titleQueries, "titleAnimation");

document.addEventListener("scroll", (e) => {
    runThroughQueries(titleQueries, "titleAnimation");
});
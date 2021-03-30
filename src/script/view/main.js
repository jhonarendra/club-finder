const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    const onButtonSearchClicked = async() => { // kalau async await pake 'async', kalau .then() .catch() gak perlu
        // let dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value);

        // bisa ini
        // DataSource.searchClub(searchElement.value)
        // .then(renderResult)
        // .catch(fallbackResult)

        // atau async await
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch(message){
            fallbackResult(message)
        }

    };

    const renderResult = results => {
        // console.log('call renderResult')
        clubListElement.innerHTML = "";
        results.forEach(club => {
            const {name, fanArt, description} = club
            // let name = club.name;
            // var fanArt = club.fanArt;
            // var description = club.description;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            clubElement.innerHTML = `
                <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
        })
    };

    const fallbackResult = message => {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
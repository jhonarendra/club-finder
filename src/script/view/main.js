import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

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
        } catch(msg){
            console.log(msg)
            fallbackResult(msg)
        }

    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message)
    };

    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
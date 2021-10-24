import '../component/club-list.js';
import '../component/search-bar.js';
import '../component/spinner-loader.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");
    const spinnerLoaderElement = document.querySelector("spinner-loader");

    const onButtonSearchClicked = async() => {
        // kalau async await pake 'async', kalau .then() .catch() gak perlu
        // let dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value);

        // bisa ini
        // DataSource.searchClub(searchElement.value)
        // .then(renderResult)
        // .catch(fallbackResult)

        renderLoader(true)
        renderResult([])

        // atau async await
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderLoader(false)
            renderResult(result)
        } catch(msg){
            console.log(msg)
            renderLoader(false)
            fallbackResult(msg)
        }

    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const renderLoader = val => {
        spinnerLoaderElement.showSpinner = val;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message)
    };

    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
function searchDrinks() {
    const searchText = document.getElementById('search-field').value;

    toggleSpinner('block')
    toggleSearchResults('none');
    if (searchText.length != 0) {
        toggleSpinner('block')
        toggleSearchResults('none');
        loadDrinks(searchText);
        document.getElementById('search-field').value = '';
    }


}

const toggleSpinner = displayStyle => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = displayStyle;
}
const toggleSearchResults = displayStyle => {
    const spinner = document.getElementById('drinks');
    spinner.style.display = displayStyle;
}

const loadDrinks = async searchText => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

    const res = await fetch(url)
    const data = await res.json()
    displayDrinks(data.drinks);
}

const displayDrinks = drinks => {
    console.log(drinks);
    const drinkContainer = document.getElementById('drinks');
    drinkContainer.textContent = '';
    drinks?.forEach(drink => {
        console.log(drink);
        const div = document.createElement('div');

        // optional chaining for a property
        div.innerHTML = `
        <h2>${drink.strDrink}</h2>
        <h4>${drink.strIngredient5 ? drink.strIngredient3 : ''} </h4>
        <img width="200px" src="${drink.strDrinkThumb}" alt="">
        `


        drinkContainer.appendChild(div);
    });
    toggleSpinner('none')
    toggleSearchResults('block')

}
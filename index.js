$(document).ready(() => {
    const DRINK_API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    $("#drinkImageWrapper").hide();

    window.getDrink = async () => {
        const drinkName = $("#drinkName").val().trim();

        if (!drinkName) {
            $(".drink-details").html("Please enter a drink name.");
            $("#drinkImageWrapper").hide();
            return;
        }

        try {
            const response = await fetch(`${DRINK_API_URL}${drinkName}`);
            const data = await response.json();
            renderDrink(data.drinks?.[0]);
        } catch (error) {
            $(".drink-details").html(`Sorry! Could not load ${error}`);
            $("#drinkImageWrapper").hide();
        }
    }

    const renderDrink = (drink) => {
        if (drink) {
            $("#drinkTitle").text(drink.strDrink);
            $("#drinkImage").attr("src", drink.strDrinkThumb);
            $("#drinkInstructions").text(drink.strInstructions);
            $("#drinkImageWrapper").show();
            $(".drink-details").show();
        } else {
            $(".drink-details").html("Drink not found.");
            $("#drinkImageWrapper").hide();
        }
    }
});

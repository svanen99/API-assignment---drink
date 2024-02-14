$(document).ready(() => {
    const DRINK_API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    $("#drinkImageWrapper").hide();

    window.getDrink = async () => {
        const drinkName = $("#drinkName").val().trim();

        $(".error").text("");

        if (!drinkName) {
            $(".error").text("Please enter a drink name.");
            $(".drink-info-container").hide();
            return;
        }

        try {
            const response = await fetch(`${DRINK_API_URL}${drinkName}`);
            const data = await response.json();

            if (!data.drinks) {
                throw new Error("Drink not found.");
            }

            renderDrink(data.drinks[0]);
        } catch (error) {
            $(".error").text(`Try again? ${error.message} :/`);
            $(".drink-info-container").hide();
        }
    };

    const renderDrink = (drink) => {
        if (drink) {
            $("#drinkTitle").text(drink.strDrink);
            $("#drinkImage").attr("src", drink.strDrinkThumb);
            $("#drinkInstructions").text(drink.strInstructions);
            $("#drinkImageWrapper").show();
            $(".drink-info-container").show();
        } else {
            $(".error").text("Drink not found, you could try again?:)");
            $(".drink-info-container").hide();
        }
    };
});

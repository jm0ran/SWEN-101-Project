storedData = new PersistantData()
storedData.load()

function makeBody(location){
    return `
        <span id="mainBodyHeader">
            <h1>
                ${location.name}
            </h1>
        </span>
        <span id="mainBodyContent">
            <span id="mainCard">
                <span id="leftCard">
                    <img src="${location.image}"/>
                </span>
                <span id="rightCard">
                    <!-- Location Description -->
                    <span id="locationInfoContainer">
                        <span id="locationName">
                            ${location.name}
                        </span>
                        <br>
                        <span id="locationLocation">
                            <image src="assets/icons/building.svg"/>
                            ${location.location}
                        </span>
                        <br>
                        <span id="locationHours">
                            <b>Hours:</b>
                            <br>
                            Sunday: Closed
                            <br>
                            Monday: 7:30 AM – 7:30 PM
                            <br>
                            Tuesday: 7:30 AM – 7:30 PM
                            <br>
                            Wednesday: 7:30 AM – 7:30 PM
                            <br>
                            Thursday: 7:30 AM – 7:30 PM
                            <br>
                            Friday: 7:30 AM – 3:00 PM
                            <br>
                            Saturday: Closed
                        </span>
                    </span>
                </span>
            </span>
            <br>
            <span id="locationDescription">
                Take control and design your sandwich, pizza, panini, or wrap. Ctrl Alt Deli offers a variety of signature breakfast and lunch sandwiches, pizzas, paninis, and wraps. They also offer several grab-and-go options such as bagels, baked goods, pastries, fresh fruit, and salad.
            </span>
            <!-- Below will be the menu section -->
            <br>
            <span id="menuHeader">
                Menu
            </span>
            <span id="menuButtons">
                <button class="menuButton">
                    Full Menu
                </button>
                <button class="menuButton">
                    Protein
                </button>
                <button class="menuButton">
                    Vegetarian
                </button>
                <button class="menuButton">
                    Low Calorie
                </button>
            </span>
            <br>
            <span class="foodContent">
                <span class="foodItem">
                    <span class="leftFoodCard">
                        <span class="foodImageContainer">
                            <img src="assets/foods/fries.jpeg"/>
                        </span> 
                    </span>
                    <span class="rightFoodCard">
                        <span class="foodInfoContainer">
                            <span class="foodName">Fries</span>
                            <br>
                            <span class="foodPrice">$3.50</span>
                            <br>
                            <span class="foodCalories">320</span>
                        </span>
                    </span>
                </span>
            </span>
        </span>
        
    `
}

function main(){
    mainBody = document.getElementById("mainBody")
    pointLocation = storedData.getLocation()
    mainBody.innerHTML = makeBody(pointLocation)
}
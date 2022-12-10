/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let daysSelected = 0;
let elementsClicked = 1;
let dailyRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let dayBtns = document.querySelectorAll("li");

for (const btn of dayBtns) {
    btn.addEventListener("click", function addClicked() {
        if (btn.classList.contains("clicked")) {
            elementsClicked = elementsClicked - 1;
            daysSelected = daysSelected - 1;
        }
        btn.classList.add("clicked");
        elementsClicked++;
        daysSelected++;
    })
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearBtn = document.getElementById("clear-button");

clearBtn.addEventListener("click", function clear() {
    let clickedElements = document.querySelectorAll(".clicked");

    clickedElements.forEach(element => {
        element.classList.remove("clicked");
        document.getElementById("full").classList.add("clicked");
        daysSelected = 0;
        elementsClicked = 1;
    })
})




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let halfDayBtn = document.getElementById("half");
let fullDayBtn = document.getElementById("full")

halfDayBtn.addEventListener("click", function selectHalf() {
    dailyRate = 20;
    halfDayBtn.classList.add("clicked")
    fullDayBtn.classList.remove("clicked")
})



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayBtn.addEventListener("click", function selectHalf() {
    dailyRate = 35;
    fullDayBtn.classList.add("clicked")
    halfDayBtn.classList.remove("clicked")
})



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value



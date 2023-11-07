const CounterValue = document.querySelector('[data-find="CounterValue"]');
const AddButton = document.getElementById("AddButton");
const ResetButton = document.getElementById("ResetButton");

console.log (AddButton.dataset);

const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;
CounterValue.innerText = counter;

AddButton.addEventListener('click', function () {

    counter = counter + parseInt(AddButton.dataset.pools);
    CounterValue.innerText = counter;
});

ResetButton.addEventListener('click', function () {

    counter = COUNTER_INITIAL_VALUE;
    CounterValue.innerText = counter;
});

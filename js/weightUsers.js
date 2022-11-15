const weightedList = [];

const weightPlus = (btn) => {
    // add row to list by name
    weightedList.push(btn.value);

    // increment counter
    // change to: const count = btn.parent('.counter-wrapper').child('.counter').innerHTML;
    const count = btn.innerHTML;

    btn.innerHTML(count + 1);
};

const weightMinus = (btn) => {
    // if only 1 - do not let remove - maybe disable minus button?
    
    const num = weightedList.filter((v) => (v === btn.value)).length;
    
    if (num > 1) {
        weightedList.splice(weightedList.indexOf(btn.value), 1);

        // decrement counter
        // change to: const count = btn.parent('.counter-wrapper').child('.counter').innerHTML;
        const count = btn.innerHTML;

        btn.innerHTML(count - 1);
    }
};

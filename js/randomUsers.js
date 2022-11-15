
const wait = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const loopUsers = () => {
    weightedList.forEach(name => {
        document.getElementById('random-name').innerHTML(name);
    });
};

const randomMinus = (name) => {
    const num = weightedList.filter((v) => (v === name)).length;

    if (num === 1) {
        document.getElementById(name).remove();
    }

    weightedList.splice(weightedList.indexOf(name), 1);

    if (weightedList.length === 0) {
        document.getElementById('user-list').innerHTML('End of Round');
        init();
    }
};

const randomUsers = async () => {
    const user = weightedList[Math.floor(Math.random()*weightedList.length)];

    while(await wait(3000)){ // 3 seconds
        loopUsers();
    }

    document.getElementById('random-name').innerHTML(user);

    randomMinus(user);

    return user;
};

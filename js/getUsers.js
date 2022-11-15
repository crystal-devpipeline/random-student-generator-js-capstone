const getUsers = async () => {
    const body = {
        method: "POST",
        headers:  {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "Crystal@devpipeline.com",
            password: "Unic0rn$"
        }),
    };
    try {
        const fetchResponse = await fetch(
            "https://devpipeline-mock-api.herokuapp.com/api/auth/login",
            body
        );
        const data = await fetchResponse.json();
        // console.log(data);

        data.users.forEach(element => {
            const row = element.first_name + " " + element.last_name;
            weightedList.push(row);
            console.log('added:', row);
        });
        // console.log(weightedList);

        return data;
    }   catch (err) {
        console.log("Error", err);
        return err;
    }
}

const loadUsers = function() {
    const div = document.getElementById('user-list');
    let html = '';
    weightedList.forEach(name => {
        html += `<div class="user-row" id="`+name+`">`+name+`: `
            `<div class="counter-wrapper">`
                `<div class="counter">1</div>`
                `<div class="weight">`
                    `<button class="minus" value="`+name+`" onclick="weightMinus(this)" />`
                    `<button class="plus" value="`+name+`" onclick="weightPlus(this)" />`
                `</div>`
            `</div>`
        `</div>`;
    });
    div.innerHTML = html;

    // enable "random" button here
}

const init = async () => {
    await getUsers();
    await loadUsers();
}

init();

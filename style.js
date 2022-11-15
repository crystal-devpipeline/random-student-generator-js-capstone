getUsers = async () => {
    const body = {
        method: "POST",
        headers:  {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "Crystal@devpipeline.com",
            passwords: "*********"
        }),
    };
    try {
        const fetchResponse = await fetch(
            "https://devpipeline-mock-api.herokuapp.com/api/auth/login",
            body

        );
        const data = await fetchResponse.json();
        console.log(data);
        return data;
    }   catch (err) {
        console.log("Error");
        console.log(err)
        return err;

    }

}
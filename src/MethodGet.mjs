import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

//GET Requests


//JSON Response
// app.get("/", (req, res) => {
//     res.status(200).send({ msg: "Server is running" });
// });

//Array of objects
app.get('/api/users', (req, res) => {
    res.send([{
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    },
    {
        name: "Jane Doe",
        age: 25,
        email: "jane.doe@example.com"
    }])
});

//Route Parameters
app.get('/api/users/:id', (req, res) => {

    //logs whats id is requested
    console.log(req.params)

    //Converts string id to int
    const parsedId = parseInt(req.params.id)

    //IF parsedId is not a number
    if (isNaN(parsedId)) {
        return res.status(400).send({ msg: "Invalid ID" })
    };

    //Finds user by id
    const findUser = mockusers.find((user) => {
        return user.id === parsedId
    })

    //IF user not found
    if (!findUser) {
        return res.status(404).send({ msg: "User not found" })
    }

    res.send(findUser)

});

//Query Parameters
app.get('/api/users', (req, res) => {
    console.log(req.query);

    //Destructures filter and value from req.query
    const { query: { filter, value } } = req;

    //If no filter or value is provided (or undefined), return all users
    if (!filter && !value) return res.send(mockusers);

    //If filter and value are provided, return filtered users
    if (filter && value) {
        return res.send(
            mockusers.filter((user) => {
                return user[filter].includes(value)
            })
        )
    }
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
import express from "express";

const app = express();

const mockusers = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 25,
        email: "jane.doe@example.com"
    },
    {
        id: 3,
        name: "John Nope",
        age: 30,
        email: "john.nope@example.com"
    },
    {
        id: 4,
        name: "Jane Nope",
        age: 25,
        email: "jane.nope@example.com"
    },
    {
        id: 5,
        name: "river",
        age: 21,
        email: "rivergirl@gmail.com"
    },
    {
        id: 7,
        name: "lake",
        age: 22,
        email: "lakegirl@gmail.com"
    },
    {
        id: 8,
        name: "ocean",
        age: 23,
        email: "oceangirl@gmail.com"
    },
    {
        id: 9,
        name: "mountain",
        age: 24,
        email: "mountaingirl@gmail.com"
    },
    {
        id: 10,
        name: "valley",
        age: 25,
        email: "valleygirl@gmail.com"
    }
]
const PORT = process.env.PORT || 3000;

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



app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); 
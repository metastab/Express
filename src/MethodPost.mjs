import express from "express";

const app = express();  //parses incoming request bodies in a middleware before your handlers, available under the req.body property.

app.use(express.json());

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

//Post Request
app.post("/api/users", (req, res) => {
    console.log(req.body);

    res.send(200);

});
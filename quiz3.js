const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)

    let result = login(req.body.username, req.body.password)
    res.send(result)
  })



app.get('/', (req, res) => {
  res.send('Hello UTeM!')
})

app.get('/bye', (req, res) => {
    res.send('Bye Bye UTeM !')
  })

app.post('/register', (req, res) => {
    console.log(req.body)

    let result = register(req.body.username, req.body.password,
       req.body.name, req.body.email)
    res.send(result)
    //res.send('Account Create!')
  })  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let dbUsers = 
[
    {
        Username : "Bazli",
        Password : "bazli35",
        name : "bazli",
        email : "bazlinazri35@gmail.com"
    },

    {
        Username : "Ali",
        Password : "1234",
        name : "ALi",
        email : "ali@gmail.com"
    },

    {
        Username : "abu",
        Password : "12345",
        name : "Abu",
        email : "abu88@gmail.com"
    }
]

function login(reqUsername, reqPassword)
{
    let matchuser = dbUsers.find(
        x => x.Username == reqUsername)

        if(!matchuser)return "User not found !"
        if (matchuser.Password == reqPassword)
        {
            return matchuser
        }
        else
        {
            return "Invalid password"
        }
    //console.log(matchuser)
}

//try to log in
//console.log(login ("Bazli","bazli35"))

function register(reqUsername, reqPassword, reqName, reqEmail)
{
    dbUsers.push
    (
        {
            Username: reqUsername,
            Password: reqPassword,
            name: reqName,
            email: reqEmail
        }
    )
}

//register("BOSSKU", "bossku123", "Malu Apa Bossku", "bossku35@gmail.com")
//console.log(login("BOSSKU", "bossku123"))
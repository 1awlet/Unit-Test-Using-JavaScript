const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const users = [
    {
        id: 1,
        username: 'admin',
        passwordHash: '$OXbN0NS6.rig6WShgn6hd2' 
        
    }
];

router.post('/login', function(req, res) {
    const { username, password } = req.body;

  // Input validation
     if (!isUsernameValid(username)) {
     return res.status(400).json({ error: "Invalid username" });
    }

    if (!isPasswordValid(password)) {
    return res.status(400).json({ error: "Invalid password" });
}
    const user = users.find((user) => user.username === username);

  
    const  doesPasswordMatch = bcrypt.compareSync(password, user.passwordHash);
   
    if (!doesPasswordMatch || !user ) {
        return res.status(401).json({ error: 'unauthorized user' });
    }

    // Clear password hash from response
    const { passwordHash, ...userWithoutPassword } = user;

    // Return user information without password hash
    res.json(userWithoutPassword);

})


router.get('/', function(req, res) {
   

    // If authorized, return the current user information
    res.json({
        username: "admin",
        email: "admin@example.com",
        role: "admin"
    });
});



function isUsernameValid(username) {
    //this regular expression is provided in the book 5.2.2
    const validAlphabets= /^[A-Za-z][0-9]+$/;;
    return validAlphabets.test(username);
}


function isPasswordValid(password) {
    return password.length >= 8 && password.length <= 18;
}
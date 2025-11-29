// Direct object reference vulnerability example
const express = require('express');
const app = express();

// Simulated database of user files
const userFiles = {
    'user1': ['file1.txt', 'file2.txt'],
    'user2': ['file3.txt', 'file4.txt']
};

// Middleware to simulate user authentication
app.use((req, res, next) => {
    req.user = 'user1'; // Simulating that 'user1' is logged in
    next();
});

// Vulnerable endpoint allowing direct object reference
app.get('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    const user = req.user;

    // Check if the requested file belongs to the authenticated user
    if (userFiles[user] && userFiles[user].includes(filename)) {
        res.send(`Serving file: ${filename}`);
    } else {
        res.status(403).send('Access denied');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
}); 
// Secure version using indirect references
const expressSecure = require('express');
const appSecure = expressSecure();

// Simulated database of user files with indirect references
const userFilesSecure = {
    'user1': { 'file1': 'file1.txt', 'file2': 'file2.txt' },
    'user2': { 'file3': 'file3.txt', 'file4': 'file4.txt' }
};

// Middleware to simulate user authentication
appSecure.use((req, res, next) => {
    req.user = 'user1'; // Simulating that 'user1' is logged in
    next();
});

// Secure endpoint using indirect object reference
appSecure.get('/files/:fileId', (req, res) => {
    const fileId = req.params.fileId;
    const user = req.user;

    // Check if the requested file ID belongs to the authenticated user
    if (userFilesSecure[user] && userFilesSecure[user][fileId]) {
        res.send(`Serving file: ${userFilesSecure[user][fileId]}`);
    } else {
        res.status(403).send('Access denied');
    }
});

// Start the secure server
appSecure.listen(4000, () => {
    console.log('Secure server running on http://localhost:4000');
}); 
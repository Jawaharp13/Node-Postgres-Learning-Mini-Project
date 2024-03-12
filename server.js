const express = require("express");
const app = express();
const PORT = 5000;
const studentRoutes = require('./src/student/routes')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/api/v1/students', studentRoutes)

app.listen(PORT, () => {
    console.log(`The app is listening at ${PORT}`);
});

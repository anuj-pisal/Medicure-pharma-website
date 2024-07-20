require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const router = require("./routes/router");
require(`./db/config`);

app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs");

app.use(express.json());
app.use(cors());
app.use(router);
app.use('/uploads', express.static('./uploads'));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
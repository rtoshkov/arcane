const express = require('express');
const mongoose = require('mongoose');
const DATABASE = `mongodb://127.0.0.1/arcane`;
// const DATABASE_CLOUD = `mongodb+srv://rtoshkov:%23Sm1l3t1m3@cluster0.463zs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const cors = require('./middleware/cors.js');
const attachToken = require('./middleware/attachToken.js');

const figuresController = require('./controllers/figures.js');
const usersController = require('./controllers/users.js');

launch()

async function launch() {
    try {
        await mongoose.connect(DATABASE, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log('Database connected');
    } catch (err) {
        console.error('Connection to Database failed');
        process.exit(1);
    }
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(attachToken());

app.use('/figures', figuresController);
app.use('/users', usersController);

app.get('/', (req, res) => res.json({message: 'ArcaneBG API'}))
app.listen(3030, () => console.log('REST SERVICE running on port 3030'));
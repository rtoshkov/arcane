const express = require('express');
const mongoose = require('mongoose');
const DATABASE = `mongodb://127.0.0.1/arcane`;
const cors = require('./middleware/cors.js');

const figuresController = require('./controllers/figures.js');

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

app.use('/figures', figuresController);

app.get('/', (req, res) => res.json({message: 'ArcaneBG API'}))
app.listen(3030, () => console.log('REST SERVICE running on port 3030'));
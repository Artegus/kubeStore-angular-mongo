const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const routerLogin = require('./routes/login');
const routerCubes = require('./routes/cubes');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 2525;
const dbRetryTime = process.env.db_retry_time || 2000;
const mongoUri = "mongodb://localhost:27017/dweb";

let db = mongoose.connection;

// JWT
function generateAccessToken(username) {
  return jwt.sign(username, 'test', { expiresIn: '240s' })
}
// JWT



let connectWithRetry = function () {
  return mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auth: { authSource: "admin" },
    user: "root",
    pass: "example",
  });
};

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connectWithRetry();

db.on('error', () => {
  setTimeout(() => {
    console.log('Fallo en la conexión a la BBD. Se reintenta.');
    connectWithRetry();
  }, dbRetryTime);
});

db.on('connected', () => {
  app.use(routerCubes);

  app.use((req, res, next) => {
    res.status(404);

    if (req.accepts('html')) {
      res.render('404', { url: '404.html' });
      return;
    }
  })

  // Sin base de datos

  app.post('/login', (req, res) => {
    if (!(req.body.username === 'oscar' && req.body.password === '1234')) {
      res.status(401).send({ error: 'usuario o contraseña inválidos' })
      return
    }
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
  });


  //app.user(routerLogin);
  app.listen(port, () => console.log(`Todo OK. Servidor escuchando en ${port}!`))
});

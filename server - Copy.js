/*
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const path = require('path')
// Imports and port
const express = require('express')
const app = express()

const port = 5000
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

// initializing the user
const initializePassport = require('./passport-config')
initializePassport(
    passport, 
    username => users.find(user => user.username === username), 
    id => users.find(user => user.id === id)
)

const users = [{id: '1723134077097', 
    username: 'test',
    password: '$2b$10$KD5X1TTMpqyr2z9hqKUDl.s5BAFlDj0NoJpyYwIuIloPWN/EpCx6S'
}]

//static elemets
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Renders
app.get('', checkAuthenticated, (req, res) => {
    res.render('login')
})

app.get('/menu', (req, res) => {
    res.render('menu')
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login')
})

app.get('/cardgame', (req, res) => {
    res.render('index')
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/menu',
    failureRedirect: '/login',
    failureFlash: true
}
))

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

// check authentication
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('hello from checkAuthenticated 1')
        return next()
        //res.redirect('/menu')
    }

    console.log('hello from checkAuthenticated 2')
    res.redirect('/login')
    //next()
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('hello from checkNotAuthenticated 1')
        return res.redirect('/menu')
    }

    console.log('hello from checkNotAuthenticated 2')
    //res.redirect('/login')
    next()
}

// Listens on port
app.listen(port, () => console.info(`Listening on port ${port}`))
*/
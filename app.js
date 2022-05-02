const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
const { extname } = require('path')

const port = 3000


app.engine('hbs', exhbs({extname: '.hbs'}))
app.set('view engine', 'hbs')


app.listen(port, () => {
  console.info(`Server is listening on port:${port}`)
})

module.exports = app
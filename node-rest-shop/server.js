const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
  res.status(200).json({
    message: 'It works'
  })
})

app.listen(PORT, function() {
  console.log("You are listening to Port: " + PORT);
})

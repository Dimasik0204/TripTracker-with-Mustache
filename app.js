const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')


app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


let trips = []

app.get ('/yourTrip', (req, res) =>{
    res.render ('yourTrip', {allTrips: trips})
})

app.post ('/yourTrip/nextTrip', (req, res) =>{
    let trip = {destination:req.body.destinationName, departure: req.body.departureName, return: req.body.returnName, image: req.body.imageName}
    trips.push(trip)
    res.render ('yourTrip', {allTrips: trips})
    //res.send ('Your trip has been added!')

})








app.listen(8080, () => {
    console.log('Server is running...')
})
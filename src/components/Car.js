import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
// import cars from '../cars.json' // remove this

const Car = (props) => {
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const car = props.cars.find(c => c.id == id)
    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.Name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car
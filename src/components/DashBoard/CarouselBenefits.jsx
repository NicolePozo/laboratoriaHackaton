import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Grid from '@mui/material/Grid'

export default function CarouselBenefits() {
    const allBenefits = [
        {
            name: 'Matrimonio',
            description: 'Bono por Matrimonio Unión civil $100.000 bruto',
        },
        {
            name: 'Cumpleaños',
            description: 'Si tu cumpleaños cae fin de semana o feriado, puedes tomar la tarde dentro del mes',
        },
        {
            name: 'Nacimiento',
            description: 'Bono por Nacimiento de un hijo $100.000 bruto',
        },
    ];

    return (
        <Carousel>
            {allBenefits.map((benefit, i) => (
                <ArrayBenefit key={i} {...benefit} />
            ))}
        </Carousel>
    );
}

const ArrayBenefit = ({name, description}) => {
    return (
        <React.Fragment>
            <h3>{name}</h3>
            <p>{description}</p>
            <Button variant="contained" color="primary" size ="small">ver más</Button>
            
        </React.Fragment>
    );
};
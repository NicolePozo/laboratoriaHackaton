import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system';
import matri from '../../assest/matri.jpg';
/* import { styled } from '@mui/styles'; */
/* 
const MyBox = styled(Box)({
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    
  }); */


export default function CarouselBenefits() {
   
    const allBenefits = [
        {
            name: 'Matrimonio',
            description: 'Bono por Matrimonio Unión civil $100.000 bruto',
            image:"https://st.depositphotos.com/3281181/4475/i/600/depositphotos_44759419-stock-photo-wedding-couple-holding-hands.jpg",
        },
        {
            name: 'Cumpleaños',
            description: 'Si tu cumpleaños cae fin de semana o feriado, puedes tomar la tarde dentro del mes',
            image:"",
        },
        {
            name: 'Nacimiento',
            description: 'Bono por Nacimiento de un hijo $100.000 bruto',
            image:"",
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

const ArrayBenefit = ({name, description, image}) => {
   /*  const classes =useStyles(); */
    return (
        <React.Fragment>
            {/* <img> {image} </img>  */}
            <h4 style={{color: "#f5f5f5"}}>{name}</h4>
            <p style={{color: "#f5f5f5"}}>{description}</p>
            <Box  sx={{display: "flex", alignSelf:"flex-end"}}>
            <Button variant="contained" size ="small" style={{background: 'linear-gradient(to right bottom, #f5f5f5)'}} >ver más</Button>
            </Box>
        </React.Fragment>
    );
};
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Obuna() {
    return (
        <>
            <Grid container
                direction="row"
                display="flex"
                justifyContent="center">
                <Grid item xs={10}>
                    <Typography component="div" sx={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                        <Grid item xs={5}>
                            <Card style={{ width: '32rem' }}>
                                <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=7fa87f33cc204751130a75e916de92f7-5658161-images-thumbs&n=13" />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontSize: "98px"}}>Подписка на рассылку акций!</p>
                            <p style={{fontSize:"48px"}}>
                                Подпишитесь на рассылку, чтобы узнавать о всех акциях первым
                            </p>
                            <Typography component="div" style={{background: "#F7355D", paddingLeft:"50", borderRadius: "16px"}}>
                                <h1 style={{marginLeft: "50px"}}>Скидка 10%</h1>
                                <p style={{marginLeft: "50px"}}>на первую покупку за подписку</p>
                                <input placeholder="+998" style={{marginLeft: "50px",borderRadius: "16px", border: "none", height: "50px"}}></input>
                                <Button variant="outline" style={{marginLeft: "20px", background: "#E7E7E7", borderRadius: "16px", marginBottom: "10px"}}>подписаться</Button>
                            </Typography>
                        </Grid>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

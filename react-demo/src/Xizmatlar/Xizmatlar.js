import { Grid, Typography } from '@mui/material';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Xizmatlar() {
    return (
        <>
        <h1 style={{textAlign: "center", marginTop: "30px"}}>Наши преимущества</h1>
            <Grid container
                direction="row"
                justifyContent="center">
                <Grid item xs={10}>
                <Typography component="div" sx={{ display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=7eeead5ca37e0575485fb6870679b460-4019165-images-thumbs&n=13" />
                        <Card.Body>
                            <h1>Акции и подарки</h1>
                            <Card.Text>
                            Постоянные акции, бонусы и скидки. Покупайте технику Apple по самым выгодным ценам
                            </Card.Text>
                            <Button variant="outline-primary">подробнее</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" style={{height: "100"}} src="https://sun9-81.userapi.com/s/v1/ig2/uY_iEj7jsGqqYlHOICMUWxHnRQsGxU7GEFhyK7XGnJ8MkyhFHdIL0TTiQ9lnsaEPs20qoUgewlGu9LhfFrwXCoR6.jpg?size=100x100&quality=96&crop=135,135,808,808&ava=1" />
                        <Card.Body>
                            <h1>Доставим за 3 часа</h1>
                            <Card.Text>
                            Быстрая и бесплатная доставка по Москве. Доставим за 3 часа в день заказа. 
                            </Card.Text>
                            <Button variant="outline-primary">подробнее</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=5e46776fe829a395ca2bb5f6bcc82873_sr-5665308-images-thumbs&n=13" />
                        <Card.Body>
                            <h1>Удобные способы оплаты</h1>
                            <Card.Text>
                            Наличными или картой при получении, оплата .
                            </Card.Text>
                            <Button variant="outline-primary">подробнее</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=415af97527c312bdbf16cf1f37398535_sr-6343405-images-thumbs&n=13" />
                        <Card.Body>
                            <h1>Покупка в кредит</h1>
                            <Card.Text>
                            Получите самое выгодное кредитное предложение от более чем 30 ведущих банков страны
                            </Card.Text>
                            <Button variant="outline-primary">подробнее</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=29b49a1df330fd5ea3a70e1870f9f28f_sr-5275502-images-thumbs&n=13" />
                        <Card.Body>
                            <h1>Гарантия</h1>
                            <Card.Text>
                            Все товары, представленные в нашем сайте, имеют гарантию от нашего магазина или компании Apple и в магазине.
                            </Card.Text>
                            <Button variant="outline-primary" style={{alignItems: "end", textAlign: "end"}}>подробнее</Button>
                        </Card.Body>
                    </Card>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

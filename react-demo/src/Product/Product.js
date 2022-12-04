import * as React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Product() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={10}>
                    <Splide options={{ rewind: true }} aria-label="Пример React Splide">
                        <SplideSlide>
                            <Typography component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />B корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                            </Typography>
                        </SplideSlide>


                        <SplideSlide>
                            <Typography component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>

                            </Typography>
                        </SplideSlide>


                        <SplideSlide>
                            <Typography component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>
                                <Card >
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iPhone 14 Pro Max
                                        </Typography>
                                        <CardMedia
                                            width="100%"
                                            component="img"
                                            height="140"
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBFE7k17gDZyrHkZujy1ztMrkSPgT4CPffA&usqp=CAU'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography variant="h7" fontWeight="500" color="dark">
                                                Гарантия 1 год
                                            </Typography>
                                            <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                                                137 900 ₽
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Stack direction="row" >
                                            <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />в корзину</Button>
                                        </Stack>
                                    </CardActions>
                                </Card>

                            </Typography>
                        </SplideSlide>

                    </Splide>
                </Grid>
            </Grid>
        </>
    )
}
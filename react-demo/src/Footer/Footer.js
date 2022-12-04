import { Grid, Typography } from '@mui/material';
import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
    return (
        <>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={10}>
                    <Typography component="div" sx={{ display: "flex", marginBottom: "30px", background: "#F9F9F9", color: "#fff" }}>

                    <Grid item xs={2.3}>
                        <Typography component="div" sx={{ background: "#00011", alignItems: "start", color: "blue", fontSize: "20px" }}>
                            <AppleIcon style={{ fontSize: "50px" }} />
                        </Typography>
                        <p style={{ color: "#878787", fontSize: "16px", marginTop: "27px" }}>© 2013-2022</p>
                        <p style={{ color: "#878787", fontSize: "16px", marginTop: "-20px" }}>Продажа iPhone в МСК</p>
                        <p style={{ color: "#B7B7B7", fontSize: "14px", marginTop: "24px" }}>*Сайт не является публичной оффертой. Вся информация, указанная на сайте носит информационный характер.</p>
                    </Grid>
                    <Grid item xs={3.7} style={{marginLeft: "20px"}}>
                        <Typography component="div" sx={{ background: "#00011", alignItems: "center", color: "blue", fontSize: "20px" }}>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Гарантия</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Политика возврата</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Кредит</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Доставка и оплата</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Отзывы</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Контакты</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Политика конфеденциальности</p>
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={2} >
                        <Typography component="div" sx={{ background: "#00011", alignItems: "center", color: "blue", fontSize: "20px" }}>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>iPhone</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>iPad</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Macbook и iMac</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Watch</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Аксессуары</p>
                        <p style={{ color: "#100E0E", fontSize: "16px" }}>Акции</p>
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={4} >
                        <Typography component="div" sx={{ background: "#00011", alignItems: "center", color: "blue", fontSize: "20px" }}>
                        <h1 style={{color: "#100E0E", fontSize: "40px"}}>+998 (90) 316 07 19</h1>
                        <p style={{ color: "#706E6E", fontSize: "14px" }}>Бесплатная консультация <br></br>
                        С 10:00 до 21:00, без выходных</p>
                        <p style={{ fontSize: "20px" }}>Заказать звонок <TelegramIcon style={{color: "#26A4E4"}}/> <InstagramIcon style={{color: "black"}}/></p>
                        <p style={{ color: "#100E0E", fontWeight: "500px", fontSize: "16px" }}>Москва,  ул Барклая 8</p>
                        </Typography>
                        
                    </Grid>


                    

                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

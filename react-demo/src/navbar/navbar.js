import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Autocomplete, Grid } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
  import AppleIcon from '@mui/icons-material/Apple';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import WatchIcon from '@mui/icons-material/Watch';
import HeadsetIcon from '@mui/icons-material/Headset';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

export default function Navbar() {

  const top100Films = [
    { label: 'Андижан' },
    { label: 'Бухара' },
    { label: 'Джизак' },
    { label: 'Кашкадарья' },
    { label: 'Навоий' },
    { label: "Наманган" },
    { label: 'Самарканд' },
    { label: 'Сырдарья' },
    { label: 'Сурхандарья' },
    { label: 'Ташкент' },
    { label: 'Фергана' },
    { label: "Хорезм" },
  ];

  return (
    <>
      <Typography component="div" sx={{ display: "flex", marginBottom: "30px", background: "#F9F9F9", alignItems: "center", color: "#fff" }}>
        <Grid container
          direction="row"
          justifyContent="space-between"
          background="#F9F9F9">
          <Grid item xs={10}>
            <Typography component="div" sx={{ display: "flex", alignItems: "center", padding: "0 20px", color: "#fff" }}>
              <Typography variant="h6" sx={{ fontSize: "24px", color: "black" }}>
                Ваш город:
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300, border: "none", }}
                renderInput={(params) => <TextField {...params} label="Область" />}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container
          direction="row"
          justifyContent="end"
          background="#F9F9F9">
          <Grid item xs={2} >
            <Button color="inherit" sx={{ fontSize: "15px", color: "#26A4E4" }}><TelegramIcon /></Button>
            <Button color="inherit" sx={{ fontSize: "15px", color: "black" }}><InstagramIcon /></Button>
          </Grid>
        </Grid>
      </Typography>


      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={10}>
          <Grid container
            direction="row"
            justifyContent="start">
            <Grid item xs={0.5}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "start",  color: "#fff" }}>
                <Typography variant="h6" display="flex" justifyContent="center" sx={{ flexGrow: 1, fontSize: "24px", padding: 0, color: "#0071E4" }}>
                  <AppleIcon />
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  Весь каталог
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ fontSize: "24px", padding: 0, color: "black" }}>
                  <Button style={{ alignItems: "center", background: "#FDEFBF", border: "none", borderRadius: "15px", padding: "5px 10px" }} sx={{}}><LocalFireDepartmentIcon style={{ fontSize: "18px", color: "Orange" }} />Акция</Button>
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  Гарантия
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  Политика возврата
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  Кредит
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  Доставка и оплата
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  Отзывы
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  Контакты
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography component="div" sx={{ display: "flex", background: "#00011", alignItems: "center", padding: "0 20px", color: "#fff" }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "18px", paddingTop: "5px", color: "black" }}>
                  +998(90)3160719
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      <Typography component="div" sx={{ display: "flex", marginBottom: "30px", alignItems: "center" }}>
        <Grid container
          direction="row"
          justifyContent="center"
          marginTop="20px">
          <Grid item xs={10.3}>
            <Typography component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "52px" }}>
              <Button style={{
                background: "#0071E4", color: "#fff", border: "none", 
                paddingRight: 35, alignItems: "center", paddingTop: 10, paddingBottom: 10, borderRadius: "16px"
              }}>
                <MoreVertSharpIcon style={{ fontSize: "20px" }} />Каталог</Button>

              <div style={{ display: "flex" }}>
                <input placeholder="Поиск по каталогу товаров" style={{ width: "1000px" }} />
                <SearchSharpIcon sx={{
                  background: "#f48e00",
                  width: "42px",
                  height: "43px",
                  color: "white",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  cursor: "pointer"
                }} />
              </div>
              <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center" }}>
                <FavoriteBorderSharpIcon sx={{
                  cursor: "pointer",
                  width: "42px",
                  height: "30px",
                  margin: "auto"
                }} />
                <Typography component="h6" sx={{ fontSize: "15px" }}></Typography>
              </Typography>
              <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center" }}>
                <MultipleStopIcon sx={{
                  cursor: "pointer",
                  width: "42px",
                  height: "30px",
                  margin: "auto"
                }} />
                <Typography component="h6" sx={{ fontSize: "15px" }}></Typography>
              </Typography>
              <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center" }}>
                <Button style={{
                  background: "#52D116", color: "#fff", border: "none", paddingLeft: 22,
                  paddingRight: 35, alignItems: "center", paddingTop: 10, paddingBottom: 10, borderRadius: "16px"
                }}>
                  <ShoppingBagIcon style={{ fontSize: "20px" }} />
                  корзинa</Button>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Typography>


      <Grid container
        direction="row"
        justifyContent="center">
        <Grid item xs={10}>
          <Typography component="div" sx={{ display: "flex", marginBottom: "30px", alignItems: "center" }} >
            <Grid container
              direction="row"
              justifyContent="start"
              marginTop="20px">
              <Grid item xs={12}>
                <Typography component="div" sx={{ display: "flex", background: "#00011",  color: "#fff" }}>
                  <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center", color: "black" }}>
                    <PhoneIphoneIcon sx={{
                      cursor: "pointer",
                      width: "62px",
                      height: "40px",
                      margin: "auto",
                      marginLeft: "-20px"
                    }} />
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "20px", paddingTop: "5px", color: "black" }}>
                    iPhone
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              marginTop="20px">
              <Grid item xs={12}>
                <Typography component="div" sx={{ display: "flex", background: "#00011", padding: "0 20px", color: "#fff" }}>
                  <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center", color: "black" }}>
                    <TabletIcon sx={{
                      cursor: "pointer",
                      width: "62px",
                      height: "40px",
                      margin: "auto"
                    }} />
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "20px", paddingTop: "5px", color: "black" }}>
                    ipad
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              marginTop="20px">
              <Grid item xs={12}>
                <Typography component="div" sx={{ display: "flex", background: "#00011", padding: "0 20px", color: "#fff" }}>
                  <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center", color: "black" }}>
                    <LaptopIcon sx={{
                      cursor: "pointer",
                      width: "62px",
                      height: "40px",
                      margin: "auto"
                    }} />
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "20px", paddingTop: "5px", color: "black" }}>
                    Macbook 
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              marginTop="20px">
              <Grid item xs={12}>
                <Typography component="div" sx={{ display: "flex", background: "#00011", padding: "0 20px", color: "#fff" }}>
                  <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center", color: "black" }}>
                    <WatchIcon sx={{
                      cursor: "pointer",
                      width: "62px",
                      height: "40px",
                      margin: "auto"
                    }} />
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "20px", paddingTop: "5px", color: "black" }}>
                    Watch
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              marginTop="20px">
              <Grid item xs={12}>
                <Typography component="div" sx={{ display: "flex", background: "#00011", padding: "0 20px", color: "#fff" }}>
                  <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center", color: "black" }}>
                    <HeadsetIcon sx={{
                      cursor: "pointer",
                      width: "62px",
                      height: "40px",
                      margin: "auto"
                    }} />
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "20px", paddingTop: "5px", color: "black" }}>
                    Гаджеты
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              marginTop="20px">
              <Grid item xs={12}>
                <Typography component="div" sx={{ display: "flex", background: "#00011", padding: "0 20px", color: "#fff" }}>
                  <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center", color: "black" }}>
                    <MobileFriendlyIcon sx={{
                      cursor: "pointer",
                      width: "62px",
                      height: "40px",
                      margin: "auto"
                    }} />
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "20px", paddingTop: "5px", color: "black" }}>
                    Аксессуары
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              marginTop="20px">
              <Grid item xs={12}>
                <Button style={{
                  background: "#5E556B", color: "#fff", border: "none", paddingLeft: 12,
                  paddingRight: 35, alignItems: "center", paddingTop: 20, paddingBottom: 20, borderRadius: "16px", textAlign: "center"
                }}>iPhone 14 Pro</Button>
              </Grid>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
import './InfoBox.css';
import Card from '@mui/material/Card';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({info}) {
    const HOT_URL = "https://img.freepik.com/free-photo/tree_1127-3028.jpg?semt=ais_hybridhttps://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";
    const RAINY_URL = "https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg";
    return(
        <div className="infoBox">
            <h3 className='header-info'> Weather Report </h3>
            <div className="dispWeatherCard">
                <Card className='Card-Disp' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={
                                info.humidity > 80? RAINY_URL : info.temp > 22? HOT_URL : COLD_URL
                            }
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city} &nbsp;
                                {info.humidity > 80? <ThunderstormIcon/> : info.temp > 22? <WbSunnyIcon/> : <AcUnitIcon/>}
                            </Typography>
                            <Typography className='descriptions' component={"span"} variant="body2" sx={{ color: 'text.secondary' }}>
                                <p><i class="fa-solid fa-temperature-three-quarters"></i> Temperature =  {info.temp}&deg;C</p>
                                <p><i class="fa-solid fa-droplet"></i> Humidity = {info.humidity} </p>
                                <p><i class="fa-solid fa-temperature-arrow-down"></i> Minimum Temperature = {info.minTemp}&deg;C</p>
                                <p><i class="fa-solid fa-temperature-arrow-up"></i> Maximum Temperature = {info.minTemp}&deg;C</p>
                                <p><i class="fa-solid fa-cloud-meatball"></i>The weather is described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}
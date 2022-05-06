import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import {Mousewheel, Pagination} from "swiper";
import item1 from '../assets/img/item1.png';
import item2 from '../assets/img/item2.png';
import item3 from '../assets/img/item3.png';
import item4 from '../assets/img/item4.png';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    ({
        mainPostContent: {
            maxWidth: '1920px',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
        },
        mainImg: {
            maxWidth: '200px',
            maxHeight: '450px',
            marginLeft: '350px',
            marginTop: '192px',
        },
        step: {
            background: '#FEE040',
            display: 'flex',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '23px',
            alignItems: 'center',
            width: '75px',
            margin: '0 auto'
        },
        textWithStep: {
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '34px',
            marginLeft: '20px',
            marginTop: '20px'
        },
        underMainText: {
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '28px',
            marginTop: '28px',
            letterSpacing: '-0.5px',
            color: '#333333',
            opacity: "0.7",
        }
    })
);

const IMAGES = [
    item1,
    item2,
    item3,
    item4,

];

export default function StepTwo() {
    const classes = useStyles();
    return (

        <div>

            <div className={classes.mainPostContent}>
                <div style={{marginTop: '46px', textAlign: 'center'}}>
                    <div className={classes.step}>ШАГ №2.</div>
                    <div className={classes.textWithStep}>Детальное инструментальное обследование</div>
                    <div className={classes.underMainText}>Мы понимаем насколько важны сроки и сколько может стоить день
                        задержки. Поэтому Вы никогда <br/>
                        не услышите от нас слов “надо подождать пару дней, пока освободится арендное оборудование” <br/>
                        - мы укомплектованы всем необходимым
                    </div>
                </div>
                <Swiper
                    mousewheel={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Mousewheel]}
                    className="mySwiper"
                >
                    {IMAGES.map((image, i) => (
                        <SwiperSlide key={i} className={classes.mainImg}>
                            <img src={image}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
}

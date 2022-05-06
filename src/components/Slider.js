import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import {Mousewheel, Pagination} from "swiper";
import background from "../assets/img/bgOnSlider.png";
import picture1 from '../assets/img/picture1.png';
import picture2 from '../assets/img/picture2.png';
import picture3 from '../assets/img/picture3.png';
import picture4 from '../assets/img/picture4.png';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    ({
        backGround: {
            maxWidth: '1920px',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            height: '700px',
        },
        mask: {
            padding: '10px 0px 0px',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(0, 78, 134, 0.8) 0%, rgba(10, 65, 104, 0.8) 100%)'
        },
        mainImg: {
            width: '400px',
            height: '250px',
            marginLeft: '250px',
            marginTop: '34px',
        },
        mainText: {
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "16px",
            letterSpacing: "20px",
            textTransform: "uppercase",
            color: "#FEE040",
            textAlign: 'center',
            marginTop: '100px'
        },
        underMainText: {
            fontWeight: "800",
            fontSize: "32px",
            lineHeight: "42px",
            letterSpacing: "-0.5px",
            color: "#FFFFFF",
            textAlign: 'center',
            marginTop:'20px'
        }
    })
);

const IMAGES = [
    picture1,
    picture2,
    picture3,
    picture4,
];

export default function Slider() {
    const classes = useStyles();
    return (

        <div className={classes.backGround}
             style={{
                 backgroundImage:
                     `url(${background})`,
             }}>
            <div className={classes.mask}>
                <div className={classes.mainText}>Услуги</div>
                <div className={classes.underMainText}>Выполняем как комплексное обследование, так и отдельные виды
                    работ
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

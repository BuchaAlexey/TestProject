import React from 'react';
import smartSensor from '../assets/img/smartSensor.png';
import {makeStyles} from '@material-ui/core/styles';
import {ReactComponent as CheckMark} from '../assets/svg/checkmark.svg';

const useStyles = makeStyles((theme) => ({
    boldTextFirst: {
        fontWeight: '800',
        fontSize: '31px',
        lineHeight: '42px',
        maxWidth: '460px',
    },
    firstText: {
        FontSize: '18px',
        LineHeight: '28px',
        maxWidth: '460px',
        color: '#707070',
    },
    boldTextSecond: {
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '34px',
    },
    secondText: {
        FontSize: '18px',
        LineHeight: '26px',
        Align: 'Left'
    },
    fullContent: {
        display: 'flex',
        boxSizing: 'border-box',
        maxWidth: '1920px',
        justifyContent: 'space-between',
        margin: 'auto',
        marginTop: '100px',
    },
    itemList: {
        listStyleType: 'none',
        fontSize: '18px',
        lineHeight: '26px',
    }
}));

function AboutUs() {
    const classes = useStyles();
    return (
        <div className={classes.fullContent}>
            <div style={{marginLeft: '250px'}}>
                <h1 className={classes.boldTextFirst}>Мы работаем быстро
                    и наши отчеты проходят согласование с первого раза</h1>
                <div className={classes.firstText}>
                    Над вашим объектом работает целая команда:
                    3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных
                    работ
                </div>
            </div>
            <div>
                <img src={smartSensor} width='300px' height='295px'/>
            </div>
            <div style={{marginRight: '250px'}}>
                <h1 className={classes.boldTextSecond}>Вы и Ваши архитекторы получаете:</h1>

                <li className={classes.itemList}>
                    <div style={{display: 'flex', padding: '5px'}}>
                        <CheckMark/>
                        <div style={{marginLeft: '5px', opacity: '70%'}}> Отчет на который на 100% можно положиться
                        </div>
                    </div>
                </li>
                <li className={classes.itemList}>
                    <div style={{display: 'flex', padding: '5px',}}>
                        <CheckMark/>
                        <div style={{marginLeft: '5px', opacity: '70%'}}>Экономию времени и прогнозируемость сроков
                        </div>
                    </div>
                </li>
                <li className={classes.itemList}>
                    <div style={{display: 'flex', padding: '5px'}}>
                        <CheckMark/>
                        <div style={{marginLeft: '5px', opacity: '70%'}}> Предварительные результаты сразу на месте
                        </div>
                    </div>
                </li>

            </div>
        </div>
    );
}

export default AboutUs;

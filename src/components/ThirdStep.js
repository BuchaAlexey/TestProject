import {makeStyles} from "@material-ui/core/styles";
import Workers from '../assets/img/workers.jpg';
import {ReactComponent as CheckMark} from "../assets/svg/checkmark.svg";
import React from "react";

const useStyles = makeStyles((theme) =>
    ({
        img: {
            marginTop: '70px',
            width: '1920px',
            display: 'flex',
            justifyContent: 'center'
        },
        step: {
            background: '#FEE040',
            display: 'flex',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '23px',
            alignItems: 'center',
        },
        textWithStep: {
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '34px',
            marginLeft: '20px',
        },
        task: {
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#505050',
            marginLeft: '17px'
        },

        mainFeaturesPost: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            maxWidth: '1920px',
            background: '#FFFFFF',
            margin: '0 auto',
            marginTop: '100px'
        },
        mainText: {
            fontWeight: '900',
            fontSize: '64px',
            lineHeight: '77px',
            color: '#373947',
            width: '540px',
        },
        secondText: {
            fontSize: '17px',
            lineHeight: '27px',
            color: '#000000',
            width: '540px',
        },
        mainBlock: {
            display: 'flex',
            flexDirection: 'column',
            width: '540px',
            flex: 'none',
            alignItems: 'center',
        },
        aboutAlexey: {
            marginLeft: '70px',
            marginTop: '21px',
            fontWeight: '700',
            fontSize: "16px",
            lineHeight: "26px",
        },
        underStepText: {
            marginTop: '25px',
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "26px",
            color: "#707070",
            letterSpacing: '-0.5px',
        },
        itemList: {
            listStyleType: 'none',
            fontSize: '18px',
            lineHeight: '26px',
        }
    })
);

function ThirdStep() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.mainFeaturesPost}>

                <div style={{display: "flex", flexDirection: 'column', marginLeft: '70px'}}>
                    <div style={{display: 'flex'}}>
                        <div className={classes.step}>ШАГ №3.</div>
                        <div className={classes.textWithStep}>Обработка полученных данных</div>
                    </div>
                    <div className={classes.underStepText}>
                        Детальный отчет с <span style={{textDecoration: 'underline'}}> <a href="#">результатами обследования </a> </span>
                        Вы получите через 7 дней. И на его основании сможете определить судьбу объекта и прогнозировать
                        затраты

                    </div>
                    <div>
                        <div style={{marginRight: '250px'}}>
                            <li className={classes.itemList}>
                                <div style={{display: 'flex', padding: '5px'}}>
                                    <CheckMark/>
                                    <div style={{marginLeft: '5px', opacity: '70%'}}> Мы оценим техническое состояние
                                        объекта и присвоим ему категорию
                                    </div>
                                </div>
                            </li>
                            <li className={classes.itemList}>
                                <div style={{display: 'flex', padding: '5px',}}>
                                    <CheckMark/>
                                    <div style={{marginLeft: '5px', opacity: '70%'}}>Объясним причины появления дефектов
                                        и повреждений
                                        в конструкциях
                                    </div>
                                </div>
                            </li>
                            <li className={classes.itemList}>
                                <div style={{display: 'flex', padding: '5px'}}>
                                    <CheckMark/>
                                    <div style={{marginLeft: '5px', opacity: '70%'}}> Сформируем техзадание на
                                        проектирование мероприятий <br/>
                                        по восстановлению, усилению или ремонту конструкций, <br/> оборудования и сетей
                                    </div>
                                </div>
                            </li>

                        </div>
                    </div>
                </div>
                <div className={classes.imgClass}>
                    <img src={Workers} width='960px'/>
                </div>
            </div>
        </div>

    );
}

export default ThirdStep;
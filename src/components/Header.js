import React from 'react';
import background from '../assets/img/background.png';
import {makeStyles} from '@material-ui/core/styles';
import {ReactComponent as Logo} from '../assets/svg/logo.svg';
import {ReactComponent as Mail} from '../assets/svg/mail.svg';
import {ReactComponent as Phone} from '../assets/svg/phone.svg';
import {ReactComponent as Burger} from '../assets/svg/burger.svg';
import Video from '../assets/img/video.png';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    ({
        mainFeaturesPost: {
            maxWidth: '1920px',
            maxHeight: '770px',
            margin: 'auto',
            display: 'flex',
            width: '100%'
        },

        mainFeaturesPostContent: {
            fontWeight: '800',
            fontSize: '42px',
            lineHeight: '51px',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        mainFooter: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#8A91A5',
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)'
        },
        mask: {
            padding: '10px 0px 0px',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(0, 78, 134, 0.8) 0%, rgba(10, 65, 104, 0.8) 100%)'
        },
        line: {
            width: '1920px',
            height: '0px',
            left: '0px',
            top: '70px',
            opacity: '0.2',
            border: '1px solid #FFFFFF',
        },
        mail: {
            color: '#FEE040',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '12px',
        },
        headerTextContent: {
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '12px',
            color: '#FFFFFF'
        },
        phone: {
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FFFFFF'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-around',
            height: '80px',
            alignItems: 'center'
        },
        mainHeaderStyle: {
            justifyContent: 'space-between',
            textAlign: 'center',
            alignItems: 'center',

        },
        verticalLine: {
            width: '820px',
            opacity: '0.2',
            transform: 'rotate(90deg)',
            background: '#FFFFFF',
            top: '80px',
            borderLeft: '1px solid #FFFFF'
        },
        firstBlock: {
            width: '480px',
            marginLeft: '250px',
            borderLeft: '1px solid rgba(255, 255, 255, .2)',
            borderRight: '1px solid rgba(255, 255, 255, .2)',
            height: '670px'

        },
        secondBlock: {
            width: '460px',
            height: '670px',
            borderLeft: '1px solid rgba(255, 255, 255, .2)',
            borderRight: '1px solid rgba(255, 255, 255, .2)',
            marginRight: '250px',
        },
        mainButton: {
            marginTop: '140px',
            color: 'black',
            alignItems: 'center',
            width: '340px',
            background: '#FEE040',
            fontWeight: '800',
            fontSize: '12px',
            lineHeight: '15px',
            height: '70px',
        },
        techTask: {
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "28px",
            color: '#FFFFFF',
            marginTop: '40px',
        },
        img: {
            marginTop: '66px',
            float: 'right',
        },
        underBoldText: {
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '34px',
            color: '#FFFFFF',
            opacity: '0.7',
            float: 'right',
            marginTop: '38px'
        },
        leftSideHeader: {
            width: '480px',
            display: 'flex',
        },
        rightSideHeader: {
            display: 'flex',
            width: '460px',
            justifyContent: 'space-between',
        },
        boldText: {
            marginTop: '128px',
            overflow: 'visible',
            fontWeight: '800',
            fontSize: '42px',
            lineHeight: '51px',
            color: '#FFFFFF',
            width: '720px',
            marginLeft: '120px'

        }
    })
);

function Header() {
    const classes = useStyles();
    return (
        <div
            className={classes.mainFeaturesPost}
            style={{
                backgroundImage:
                    `url(${background})`
            }}
        >
            <div className={classes.mask}>
                <div
                    className={classes.verticalLine}
                ></div>
                <div>
                    <div className={classes.header}>
                        <div className={classes.leftSideHeader}>
                            <div>
                                <Burger/>
                            </div>
                            <div style={{marginLeft: '80px'}}>
                                <Logo/>
                            </div>
                        </div>
                        <div className={classes.rightSideHeader}>
                            <div className={classes.mainHeaderStyle}>
                                <div className={classes.headerTextContent}> Пишите нам на email</div>
                                <div className={classes.mail}><Mail/> info@diagnistics.by</div>
                            </div>
                            <div style={{marginLeft: '10px'}} className={classes.mainHeaderStyle}>
                                <div className={classes.headerTextContent}><Phone/> Есть вопросы? Звоните!</div>
                                <div className={classes.phone}>+375 (29) 456-45-45</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.line}></div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className={classes.firstBlock}>
                            <div className={classes.boldText}>
                                Независимое обследование
                                зданий и сооружений
                            </div>
                            <div className={classes.underBoldText}>
                                антенн, труб, теплосетей, канализаций <br/>
                                и других объектов строительства
                            </div>

                        </div>
                        <div className={classes.secondBlock}><Button className={classes.mainButton}>получить
                            коммерческое</Button>

                            <div className={classes.techTask}>Отправьте техзадание и получите
                                коммерческое <br/> предложение в
                                течении 15 минут на свой email <br/> или в мессенджер
                            </div>
                            <div className={classes.img}>
                                <img src={Video}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;
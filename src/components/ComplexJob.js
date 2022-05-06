import {makeStyles} from "@material-ui/core/styles";
import styles from './index.module.scss';
import JobProcess from '../assets/img/jobprocess.png';
import {ReactComponent as Picture} from '../assets/svg/picture.svg';

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
            color: "#333333,"
        },
    })
);

function ComplexJob() {
    const classes = useStyles();
    return (
        <div>
            <div className={styles['fullText']}>
                <div className={styles['complex']}>
                    Мы работаем в комплексе
                </div>
                <div className={styles['underMainText']}>
                    чтобы Вы не тратили время на поиск и организацию
                    множества подрядчиков
                </div>
            </div>
            <div className={classes.mainFeaturesPost}>
                <div className={classes.imgClass}>
                    <img src={JobProcess} width='960px'/>
                </div>
                <div style={{display: "flex", flexDirection: 'column', marginLeft: '70px'}}>
                    <div style={{display: 'flex'}}>
                        <div className={classes.step}>ШАГ №1.</div>
                        <div className={classes.textWithStep}>Подготовительные работы</div>
                    </div>
                    <div className={classes.underStepText}>
                        Мы осматриваем здание, делаем замеры и проверяем <br/> наличие визуально заметных дефектов:
                        трещин, <br/>
                        коррозии, повреждения фундамента и т.д.
                    </div>
                    <div>
                        <div style={{display: 'flex', marginTop: '32px'}}>
                            <Picture style={{
                                borderRadius: '50%',
                                border: '3px solid #C4C4C4', boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.2)'
                            }}/>
                            <div className={classes.task}>“Задача этого этапа получить максимально полное <br/>
                                представление о конструкции здания,
                                условиях <br/> его эксплуатации и возможных слабых местах“
                            </div>

                        </div>
                        <div className={classes.aboutAlexey}>
                            АЛЕКСЕЙ, обследователь и главный инженер проектов
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ComplexJob;
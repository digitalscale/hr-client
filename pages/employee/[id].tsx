import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import { Tabs, SelectMenu, Modal, Button, Card, Box} from 'bumbag';
import Tags from "../../components/Tags";

const mock = {
    id: '2234324234234',
    name: 'Газпромоский Иван Алексеевич',         
    phone: '+7 909 966 01 25',     
    email: 'test@testio.ru',         
    specialization: 'FrontEnd–разработчик',         
    gender: 'male',       
    birthDate: '14 апреля 1993',    
    area: 'Mосква',         
    salary: '220000₽',         
    educationLevel: [
        'Medium',
        'Elementary',
        'Hard'
    ],
    education: [
        {
            title: 'НИЯУ МИФИ “Автоматика и электроника физических установок”',
            year: '2019'
        },
        {
            title: 'НИЯУ МИФИ “Автоматика и электроника физических установок”',
            year: '2017'
        }
    ],    
    experience: [
        {
            title: 'ООО “Кодикс”',
            description: 'НИЯУ МИФИ “Автоматика и электроника физических установок”',
            start: '19.04.2018',
            end: '19.04.2020'
        },
        {
            title: 'ООО “ФИГМА”',
            description: null,
            start: '19.04.2018',
            end: null
        }
    ],
    languages: [
        'Англиский',
        'Японский',
        'Болгарский'
    ],       
    skills: ['React', 'JavaScript', 'Node.js'],      
    create: 'time',    
    updated: 'time'      
}

const mockRightPanel = [
    {title: 'Автоматическая оценка', score: 3},
    {title: 'Оценка hr-специалиста', score: 4},
    {title: 'Оценка Антона Бармина', score: 5},
    {title: 'Оценка Сергея Матвейкина', score: 2},
    {title: 'Оценка Романа Рытикова', score: 1},
];

const StyledPageEmployees = style.div`
    display: flex;
    width: 100%;
`


const StyledBodySelectDescription = style.div`
    width: 75%;
    margin-right:60px;
`

const StyledFirstBlockDescription = style.div`

    display: flex;

    padding-bottom: 40px;
    border-bottom: 1px solid #E0E4EA;

    h1 {
        width: max(600px);
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 37px;
        color: #12112F;

        margin-top: 69px;
    }

    .iconDowload {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: #FCFCFD;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
        border-radius: 12px;

        margin: 69px 0px 0px 47px;
        width: 74px;
        height: 74px;

        cursor: pointer;
    }

    .phoneVacation {
        margin-top: 28px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #12112F;
    }

    .emailVacation {
        margin-top: 28px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #12112F;
    }

    .scilVacation {
        display: flex;
        margin-top: 20px;

        .skill {
            font-family: Verdana;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #12112F;

            margin-right: 5px;
            opacity: 0.6;
        }

        .salary {
            font-family: Verdana;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #5454E2;
        }
    }

    .gender {
        margin-top: 8px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #12112F;
        opacity: 0.6;

        p {
            margin: 0;
        }
    }
`

const StyledSecondBlockDescription = style.div`
    margin-top: 48px;
    h3 {
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #12112F;
    }

    .jobDate {
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 22px;
        color: #12112F;
        margin:0;
    }

    .jobTitle {
        margin-top: 8px;
    }

    .jobDescription {
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #12112F;

        margin-top: 20px;
    }

    .blockJob {
        margin-bottom: 40px;
    }
`

const FirstBlockDescription = ({name, phone, email, specialization, salary, gender, birthDate, area}) => {
    const convertArray: any = mock.skills.map(item => {return { 'title': item} })
    return(
        <StyledFirstBlockDescription>
            <div>
                <h1>{name}</h1>
                <Tags defaultItems={convertArray} disabled/>
                <div className='phoneVacation'>{phone}</div>
                <div className='emailVacation'>{email}</div>
                <div className='scilVacation'>
                    <div className="skill">{specialization}</div> 
                    <div className="salary">{salary}</div>
                </div>
                <div className="gender">{gender}, {birthDate}, <p>{area}</p></div>
            </div>
            <div className="iconDowload ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L16 12H13V3H11V12H8L12 16ZM21 3H15V4.99H21V19.02H3V4.99H9V3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM12 16L16 12H13V3H11V12H8L12 16ZM21 3H15V4.99H21V19.02H3V4.99H9V3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3Z" fill="black"/>
                </svg>
                PDF
            </div>
        </StyledFirstBlockDescription>
    )
};

const SecondBlockDescription = ({experience}) => {
    return(
        <StyledSecondBlockDescription>
            <h3>Опыт</h3>
            {experience.map((item, i) => (
                <div className='blockJob' key={+i + Math.floor(Math.random() * 1000)}>
                    <h5 className='jobDate'>C {item.start} 
                        {item.end != null && ` по ${item.end}`}
                        {item.end == null && ` по настоящее время`}
                    </h5>
                    <div className="jobTitle">{item.title}</div>
                    {item.description != null && <div className='jobDescription'>{item.description}</div>}
                </div>
            ))}
        </StyledSecondBlockDescription>
    )
};

const StyledThirdBlockDescription = style.div`
    h3 {
        margin-top: 44px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #12112F;
    }

    .educationYear {
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 22px;
        color: #12112F;
    }

    .educationTitle {
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #12112F;

        margin-top: 8px;
    }

    .blockEducation {
        margin-top: 24px;
    }
`

const ThirdBlockDescription = ({ education } ) => {
    return(
        <StyledThirdBlockDescription>
            <h3>Обучение</h3>
            {education.map((item, i) => (
                <div className="blockEducation" key={+i + Math.floor(Math.random() * 1000)}>
                    <div className="educationYear">{item.year}</div>
                    <div className="educationTitle">{item.title}</div>
                </div>
            ))}
        </StyledThirdBlockDescription>
    )
};

const StyledFourthBlockDescription = style.div`
    h3 {
        margin-top: 44px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #12112F;
    }

    .blockLanguages {
        display: flex;
    }
`

const FourthBlockDescription = ({languages, educationLevel}) => {
    return(
        <StyledFourthBlockDescription>
            <h3>Языки</h3>
            {languages.map((item, i) => (
                <div className='blockLanguages' key={+i + Math.floor(Math.random() * 1000)}>
                    {item} {
                        !!educationLevel[i] && <div>{`(${educationLevel[i]})`}</div>
                    }
                </div>
            ))}
        </StyledFourthBlockDescription>
    )
};

const BodySelectDescription = ( { info } ) => {
    let gender;
    switch(info.gender) {
        case 'male':
            gender = 'Мужчина'
            break
        case 'female':
            gender = 'Женщина'
            break
    }
    return(
        <StyledBodySelectDescription>
            <FirstBlockDescription 
                name={info.name}
                phone={info.phone}
                email={info.email}
                specialization={info.specialization}
                salary={info.salary}
                gender={gender}
                birthDate={info.birthDate}
                area={info.area}
            />
            <SecondBlockDescription experience={info.experience} />
            <ThirdBlockDescription education={info.education} />
            <FourthBlockDescription languages={info.languages} educationLevel={info.educationLevel} />
        </StyledBodySelectDescription>
    )
};

const StyledLeftPanel = style.div`
    width: 25%;
    margin-top: 64px;

    .fieldWithScore {
        div {
            display: flex;
            justify-content: start;
        }
        border-bottom: 1px solid #E0E0E0;
    }

    .leftPanelTitle {
        margin-top: 20px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 14px;
        color: #12112F;
    }

    .leftPanelScore {
        margin: 4px 0px 20px 0px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 22px;
    }

    .buttonModal {
        margin-top: 32px;
        display: flex;
        justify-content: right;
    }
`

const StyledColorScore = style.div`
    color: ${props => props.color}
`

const Rigthpanel = ({ info }) => {

    const [value, setValue] = useState();
    const [getHr, setGetHr] = useState();
    const [currentInfo, setCurrentInfo] = useState(info);

    const dataRow = [
        { key: 1, label: 'Отклик', value: 'Отклик' },
        { key: 2, label: 'Интервью с HR', value: 'Интервью с HR' },
        { key: 3, label: 'Тестовое задание', value: 'Тестовое задание' },
        { key: 4, label: 'Техническое интервью', value: 'Техническое интервью' },
        { key: 4, label: 'Согласование оффера', value: 'Согласование оффера' },
        { key: 4, label: 'Анкета СБ', value: 'Анкета СБ' },
        { key: 4, label: 'Оффер', value: 'Оффер' },
        { key: 4, label: 'Предложение принято', value: 'Предложение принято' },
        { key: 1, label: 'Вышел на работу', value: 'Вышел на работу' },
        { key: 1, label: 'Испытательный срок пройден', value: 'Испытательный срок пройден' },
        { key: 1, label: 'Отказ', value: 'Отказ' },
    ];

    const sortSorce = currentInfo.map(item => {
        switch(item.score) {
            case 1: return {text: 'Однозначно нет', color: '#C83227'}
            case 2: return {text: 'Слабо', color: '#E19F41'}
            case 3: return {text: 'Рассмотреть подробнее', color: '#E19F41'}
            case 4: return {text: 'Наиболее подходящий', color: '#62AE82'}
            case 5: return {text: 'Супер-кандидат', color: '#27AE60'}
        }
    });

    console.log(getHr)

    const scoreText = [
        { key: 1, label: 'Однозначно нет', value: 'Однозначно нет' },
        { key: 2, label: 'Слабо', value: 'Слабо' },
        { key: 3, label: 'Рассмотреть подробнее', value: 'Рассмотреть подробнее' },
        { key: 4, label: 'Наиболее подходящий', value: 'Наиболее подходящий' },
        { key: 5, label: 'Супер-кандидат', value: 'Супер-кандидат' }
    ]

    function handleHr (status) {
        let array = currentInfo;
        array[1] = { title: status.label, score: status.key }
        setCurrentInfo(array);
    }

    return(
        <StyledLeftPanel>
            <div>
                <SelectMenu
                    onChange={setValue}
                    options={dataRow}
                    placeholder="Выберите процесс"
                    value={value}
                    cursor='pointer'
                />
                <div>
                    <Modal.State>
                        <Modal.Disclosure 
                            use={Button}
                            border="none" 
                            outline="none"
                            background="none"
                            margin="20px 0px 56px 0px"
                            textAlign="center"
                            fontFamily="Verdana"
                            fontStyle="normal"
                            fontWeight="normal"
                            fontSize="12px"
                            lineHeight="18px"
                            color="#5454E2"
                            borderRadius="none"
                            boxShadow="none"
                            width="100%"
                        >
                            Изменить свою оценку
                        </Modal.Disclosure>
                        <Modal>
                            <Card 
                                background="#323846" 
                                borderRadius='8px'
                                width="640px"
                                height="265px"
                            >
                                <Box 
                                    color="#E0E4EA"
                                    fontFamily="Verdana"
                                    fontStyle="normal"
                                    fontWeight="500"
                                    fontSize="24px"
                                    lineHeight="27px"
                                    margin="32px 200px 20px 32px"
                                >
                                    Изменить оценку кандидата
                                </Box>
                                <SelectMenu 
                                    onChange={setGetHr}
                                    options={scoreText}
                                    placeholder="Рассмотреть подробнее"
                                    value={getHr}
                                    cursor='pointer'
                                    width="465px"
                                    margin="0px 0px 0px 32px"
                                />
                                <Modal.Disclosure>
                                    <Button 
                                        variant="ghost" 
                                        color="#FCFCFD"
                                        margin="32px 31px 0px 182px"

                                    >Отменить</Button>
                                </Modal.Disclosure>
                                <Modal.Disclosure>
                                    <Button 
                                        palette="primary"
                                        onClick={() => handleHr(getHr)}
                                    >Изменить отценку</Button>
                                </Modal.Disclosure>
                            </Card>
                        </Modal>
                    </Modal.State>
                </div>
                {info.map((item, i) => (
                    <div className='fieldWithScore' key={+i + Math.floor(Math.random() * 1000)}>
                        <div className="leftPanelTitle">{item.title}</div>
                        <div className="leftPanelScore">{
                            <StyledColorScore color={sortSorce[i].color}>{sortSorce[i].text}</StyledColorScore>
                        }</div>
                    </div>
                ))}
            </div>
        </StyledLeftPanel>
    )
};

const PageEmployees = () => {
    return(
        <Tabs selectedId="tab1">
            <Tabs.List>
                <Tabs.Tab tabId="tab1">Описание</Tabs.Tab>
                <Tabs.Tab tabId="tab2">История</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel tabId="tab1" padding="major-2">
                <StyledPageEmployees >
                    <BodySelectDescription info={mock}/>
                    <Rigthpanel info={mockRightPanel}/>
                </StyledPageEmployees>
            </Tabs.Panel>
            <Tabs.Panel tabId="tab2" padding="major-2">
                Ведутся работы
                <img src="https://zebra-tv.ru/upload/iblock/e7e/Bober.jpg"/>
            </Tabs.Panel>
        </Tabs>
    )
};

export default PageEmployees;
import React, { useState } from 'react';
import style from 'styled-components';
import { Tabs } from 'bumbag';
import Tags from "../../components/Tags";
import Link from "next/link";

type Gender = "male" | "female"

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
    educationLevel: [],
    education: [
        {
            title: 'ООО “Кодикс”',
            description: 'НИЯУ МИФИ “Автоматика и электроника физических установок”',
            start: '19.04.2018',
            end: '19.04.2020'
        },
        {
            title: 'ООО “ФИГМА”',
            start: '19.04.2018'
        }
    ],    
    experience: [],
    languages: [],       
    skills: ['React', 'JavaScript', 'Node.js'],      
    create: 'time',    
    updated: 'time'      
}

const StyledPageEmployees = style.div`
    display: flex;
    width: 100%;
`


const StyledBodySelectDescription = style.div`
    width: 80%;
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

const StyledLeftPanel = style.div`
    width: 20%;
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

const SecondBlockDescription = () => {
    return(
        <StyledSecondBlockDescription>
            <h3>Опыт</h3>
        </StyledSecondBlockDescription>
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
            <SecondBlockDescription />
        </StyledBodySelectDescription>
    )
};

const Rigthpanel = () => {
    return(
        <StyledLeftPanel>
            test2
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
                    <Rigthpanel/>
                </StyledPageEmployees>
            </Tabs.Panel>
            <Tabs.Panel tabId="tab2" padding="major-2">
                Тут будут история действия
            </Tabs.Panel>
        </Tabs>
    )
};

export default PageEmployees;
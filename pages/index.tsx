import React, { useState } from 'react';
import style from 'styled-components';
import { Button, SelectMenu, Table } from 'bumbag';
import Link from "next/link";


const mock = [
	{
		id: '3423432424',
		title: 'React-разработчик',
		status: 'active',
		location: 'Москва',
		department: '',
		created: 25,
		updated: 26
	},
	{
		id: '3423432424',
		title: 'Golang-разработчик',
		status: 'active',
		location: 'Ростов-на-Дону',
		department: '',
		created: 25,
		updated: 26
	}
];		

const StyledHeadComponents = style.div`
	display: flex;
	justify-content: space-between;

	h1 {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 37px;
		color: #12112F;
		margin: 0;
	}
`

const StyledFilterField = style.div`
	display: flex;
	margin-top: 32px;
`

const StyledTableBlock = style.div`
	margin-top: 80px;
`

const Filter = () => {
	const [valueVacanci, setValueVacanci] = useState();
	const [valueCity, setValueCity] = useState();
	const [valueStatus, serValueStatus] = useState();

	return(
		<StyledFilterField>
			<SelectMenu
				width='50%'
				marginRight='12px'
				hasSearch
				options={[
					{ key: 1, label: 'React разработчик', value: 'react' },
					{ key: 2, label: 'Solution архитектор', value: 'solution' },
					{ key: 3, label: 'Go разработчик', value: 'go' },
					{ key: 4, label: 'Python разработчик', value: 'python' },
					{ key: 4, label: 'Python разработчик', value: 'python' }
				]}
				placeholder="Название вакансии..."
				onChange={setValueVacanci}
				value={valueVacanci}
			/>
			<SelectMenu
				hasSearch
				width='25%'
				marginRight='12px'
				options={[
					{ key: 1, label: 'Москва', value: 'moscow' },
					{ key: 2, label: 'Ростов-на-Дону', value: 'rostov' },
					{ key: 3, label: 'Рязань', value: 'razan' },
					{ key: 4, label: 'Санкт-Петербург', value: 'piter' }
				]}
				placeholder="Город..."
				onChange={setValueCity}
				value={valueCity}
			/>
			<SelectMenu
				hasSearch
				width='25%'
				options={[
					{ key: 1, label: 'Активно', value: 'activ' },
					{ key: 2, label: 'Активно', value: 'activ' },
					{ key: 3, label: 'Активно', value: 'activ' },
					{ key: 4, label: 'Активно', value: 'activ' }
				]}
				placeholder="Стутус..."
				onChange={serValueStatus}
				value={valueStatus}
			/>
		</StyledFilterField>
	)
};

const Head = () => {
	return (
		<StyledHeadComponents >
			<h1>Вакансии</h1>
			<Button palette="primary">+ Создать</Button>
		</StyledHeadComponents>
	)
};

const TableVacation = () => {
	return(
		<StyledTableBlock>
			<Table variant="minimal">
				<Table.Body>
					{mock.map(({id, title, status, location}) => {
					let carrentTextStatus;
					switch(status) {
						case 'active':
							carrentTextStatus = 'Активно'
							break
						case 'inactive': 
							carrentTextStatus = 'Не активно'
							break
						case 'draft':
							carrentTextStatus = 'Черновик'
					}
					return (
						<Table.Row key={id} borderBottom="1px solid #E0E4EA">
							<Table.Cell>{title}</Table.Cell>
							<Table.Cell>{location}</Table.Cell>
							<Table.Cell>{carrentTextStatus}</Table.Cell>
						</Table.Row>
					)})}
				</Table.Body>
				</Table>
		</StyledTableBlock>
	)
}

const Index = () => {
	return (
			<div>
				<Head />
				<Filter />
				<TableVacation />
			</div>
		);
}

export default Index;
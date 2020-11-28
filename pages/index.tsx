import React, { useState } from 'react';
import style from 'styled-components';
import { Button, SelectMenu, Table } from 'bumbag';
import Link from "next/link";


const mock = [
	{
		id: '3423432424',
		title: 'React-разработчик',
		status: 'active',
		area: 'Москва',
		department: 'отдел комуникации',
		created: '25',
		updated: '26'
	},
	{
		id: '3423432424',
		title: 'Golang-разработчик',
		status: 'active',
		area: 'Ростов-на-Дону',
		department: 'маркетинговая платформа',
		created: '25',
		updated: '26'
	},
	{
		id: '3423432424',
		title: 'Golang-разработчик',
		status: 'inactive',
		area: 'Рязань',
		department: 'маркетинговая платформа',
		created: '25',
		updated: '26'
	},
	{
		id: '3423432424',
		title: 'Golang-разработчик',
		status: 'inactive',
		area: 'Москва',
		department: 'внутренние проекты',
		created: '25',
		updated: '26'
	},
	{
		id: '3423432424',
		title: 'Golang-разработчик',
		status: 'inactive',
		area: 'Казань',
		department: 'отдел комуникации',
		created: '25',
		updated: '26'
	},
	{
		id: '3423432424',
		title: 'Golang-разработчик',
		status: 'inactive',
		area: 'Санкт-Петербург',
		department: 'отдел разработки',
		created: '25',
		updated: '26'
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

	.titleJob {
		color: #12112F
	}
	.titleJob:hover {
		color: #5454E2
	}
`

const StyledStatusText = style.div`
	color: ${props => props.color}
`

const Filter = ({ changeFilter }) => {
	const [valueVacanci, setValueVacanci] = useState('');
	const [valueCity, setValueCity] = useState('');
	const [valueStatus, serValueStatus] = useState('');

	function setFilter(e: any, type: string) {
		let key: string;
		switch(type) {
			case 'title':
				key = 'title';
				setValueVacanci(e);
				setValueCity('');
				serValueStatus('');
				break
			case 'area':
				key = 'area';
				setValueCity(e);
				setValueVacanci('');
				serValueStatus('');
				break
			case 'status':
				key = 'status';
				serValueStatus(e);
				setValueVacanci('');
				setValueCity('');
				break
		}
		changeFilter({[key]: e.label});
	}

	return(
		<StyledFilterField>
			<SelectMenu
				width='50%'
				marginRight='12px'
				hasSearch
				options={[
					{ key: 1, label: 'React-разработчик', value: 'react' },
					{ key: 2, label: 'Solution-архитектор', value: 'solution' },
					{ key: 3, label: 'Golang-разработчик', value: 'go' },
					{ key: 4, label: 'Python-разработчик', value: 'python' },
					{ key: 4, label: 'Python-разработчик', value: 'python' }
				]}
				placeholder="Название вакансии..."
				onChange={(event) => setFilter(event, 'title')}
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
				onChange={(event) => setFilter(event, 'area')}
				value={valueCity}
			/>
			<SelectMenu
				hasSearch
				width='25%'
				options={[
					{ key: 1, label: 'Активно', value: 'activ' },
					{ key: 2, label: 'Закрыто', value: 'inactive' },
					{ key: 3, label: 'Приостановлено', value: 'draft' }
				]}
				placeholder="Стутус..."
				onChange={(event) => setFilter(event, 'status')}
				value={valueStatus}
			/>
		</StyledFilterField>
	)
};

const Head = () => {
	return (
		<StyledHeadComponents >
			<h1>Вакансии</h1>
			<Link href='/new
			'>
				<Button palette="primary">+ Создать</Button>
			</Link>
		</StyledHeadComponents>
	)
};

const TableVacation = ( { sort } ) => {
	return(
		<StyledTableBlock>
			<Table variant="minimal">
				<Table.Body>
					{sort.map(({id, title, status, department, area}) => {
						let carrentTextStatus: string;
						let colorText;
						switch(status) {
							case 'active':
								carrentTextStatus = 'Активно'
								colorText = '#27AE60'
								break
							case 'inactive': 
								carrentTextStatus = 'Закрыто'
								colorText = '#27313F'
								break
							case 'draft':
								carrentTextStatus = 'Приостановлено'
								colorText = '#27313F'
						}
					return (
						<Link href={`/vacancy/${id}`} >
							<Table.Row 
								key={id} 
								borderBottom="1px solid #E0E4EA"
								cursor='pointer'
								>
								<Table.Cell
									padding="32px 0px 24px 0px"
									fontFamily='Verdana'
									fontStyle='normal'
									fontWeight='bold'
									fontSize='20px'
									lineHeight='26px'
									className='titleJob'
								>
									{title}</Table.Cell>
								<Table.Cell 
									textAlign='left'
									fontFamily='Verdana'
									fontStyle='normal'
									fontWeight='normal;font-size: 16px;line-height: 24px'
									color='#12112F'
									>
										{`${area}, ${department}`}</Table.Cell>
								<Table.Cell 
									textAlign="right"
									>
										<StyledStatusText color={colorText}>{carrentTextStatus}</StyledStatusText></Table.Cell>
							</Table.Row>
						</Link>
					)})}
				</Table.Body>
				</Table>
		</StyledTableBlock>
	)
}

const Index = () => {

	const [currentFilter, setCurrentStatus] = useState({});

	let currentLabel = currentFilter[Object.keys(currentFilter)[0]];

	switch(currentLabel) {
		case 'Активно':
			currentLabel = 'active'
			break
		case 'Закрыто': 
			currentLabel = 'inactive'
			break
		case 'Приостановлено': 
			currentLabel = 'draft'
			break
	}

	const filteredArray = mock.filter(item => item[Object.keys(currentFilter)[0]] == currentLabel);

	function changeFilter(filter) {
		setCurrentStatus(filter)
	}

	return (
			<div>
				<Head />
				<Filter changeFilter={changeFilter} />
				<TableVacation sort={filteredArray} />
			</div>
		);
}

export default Index;
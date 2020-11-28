import React, { useState } from "react";
import style from 'styled-components';
import Link from "next/link";
import LessonHeader from '../../src/components/header/LessonHeader';

import { Flex, Box } from "bumbag";
import { useGetLessonsQuery, Enum_Lesson_Status } from "graphqlTypes";

const StyledCourseList = style.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;	
`

const StyledHeader = style.div`
	width: 80%;
	margin-top: 47px;
`

const StyledCars = style.div`
	margin-top: 64px;
	width: 80%;
	cursor: pointer;

	.Card {
		border: 1px solid #CBCFD3;
	}
	
	.Card:hover {
		background: #FCFCFD;
		box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
	}
`

const StyledLinks = style.div`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	margin: 35px 62px 70px 13px;

	color: #000000;
`

const StyledStatus = style.div`
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	color: #000000;
	margin-left: 13px;

	data {
		color: #27AE60
	}
`

const StyledLoading = style.div`
	$main: #44b9fc;
	$sec:#154e7d;
	$little-cursor: white;
	#outer{
	margin: auto;
	margin-top: 15%;
	background: $main;
	height: 100px;
	width: 100px;
	border-radius: 15px;
	}
	#middle{
	height: 60px;
	width: 60px;
	margin:auto;
	position: relative;
	top:20px;
	border-radius: 50%;
	background-image: linear-gradient(150deg, transparent 50%, $sec 50%),linear-gradient(90deg, $sec 50%, $little-cursor 50%);
	-webkit-animation: rotation 1200ms infinite linear;
	transform-origin: 50% 50%;
	animation-timing-function: ease;
	}
	#inner{
	background: $main;
	height: 48px;
	width: 48px;
	margin:auto;
	position: relative;
	top:6px;
	border-radius: 50%;
	}
	@-webkit-keyframes rotation {
	from {
	-webkit-transform: rotate(270deg);
	}
	to{
	-webkit-transform: rotate(630deg);
	}
	}
`

const Loading = () => {
	return( 
		<StyledLoading>
			<div id='outer'>
				<div id='middle'>
					<div id='inner'>    
					</div>
				</div>
			</div>
		</StyledLoading>
	);
}

export default function CourseList() {
	const [choseType, setType] = useState("");
	const { data, error, loading } = useGetLessonsQuery({
		variables: {
			status: Enum_Lesson_Status[choseType],
		},
	});

	function handleClick(type: string) {
		setType(type)
	}
	
	if (error) return "ошибка";
	if (loading) return (<Loading />);
	return (
		<StyledCourseList>
			<StyledHeader>
				<LessonHeader fun={handleClick}/>
			</StyledHeader>
			<StyledCars >
				<Flex flexDirection="row" flexWrap="wrap">
					{data.lessons.map((i) => (
						<Link href={`/author/lesson/${i.id}/description`}>
							<Box width="240px" 
								height="196px" 
								margin="23px" 
								background="#FCFCFD"
								box-shadow="1px 2px 6px rgba(0, 0, 0, 0.12)"
								borderRadius="8px"
								className="Card"
							>
									<>
										<StyledLinks>
											{i.title}
										</StyledLinks>
										<StyledStatus>
											Завершить <data>{i.time}</data>		
										</StyledStatus>
									</>
							</Box>
						</Link>
					))}
				</Flex>
			</StyledCars>
		</StyledCourseList>
	);
}

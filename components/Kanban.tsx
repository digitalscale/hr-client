import React from "react";
import Board from "react-trello";
import styled from "styled-components";
import Link from "next/link";
import { Box } from "bumbag";

const Wrapper = styled.div`
  overflow: scroll;
  width: 100%;
  .react-trello-board {
    background: white;
  }
`;

const data = {
  lanes: [
    {
      id: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
      cards: [
        {
          id: "fd2deba0-314d-11eb-bfe1-2bcaa783a21c",
          title: "Матвейкин Сергей",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [
            { bgcolor: "green", color: "white", title: "Наиболее подходящий" },
          ],
        },
        {
          id: "fd2deba0-314d-11eb-bfe1-2bcwa783a21c",
          title: "Осипов Иван",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [{ bgcolor: "red", color: "white", title: "Однозначно нет" }],
        },
      ],
      title: "Отклик",
    },
    {
      id: "7ad6c370-314d-11eb-bfe1-2bcaa783g21c",
      cards: [
        {
          id: "05742540-314e-11eb-bfe1-2bcaa783a21c",
          title: "Евгений Солнцев",
          description: "Дизайнер",

          laneId: "7ad6c370-314d-11eb-bfe1-2bcaa783a21c",
        },
        {
          id: "05742540-314e-11eb-bfe1-2bcaa7m3a21c",
          title: "Роман Рытиков",
          description: "QA",
          laneId: "7ad6c370-314d-11eb-bfe1-2bcaa783a21c",
        },
        {
          id: "05742540-314e-112b-bfe1-2bcaa783a21c",
          title: "Антон Бармин",
          description: "Solution Architecter",

          laneId: "7ad6c370-314d-11eb-bfe1-2bcaa783a21c",
        },
      ],
      title: "Интервью с HR",
    },
    {
      id: "7f9d7340-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Тестовое задание",
    },
    {
      id: "874c00c0-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Техническое интервью",
    },
    {
      id: "8e5cc7a0-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Согласование оффера",
    },
    {
      id: "958bc4e0-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Анкета СБ",
    },
    {
      id: "accf1f30-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Оффер",
    },
    {
      id: "b6c46860-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Предложение принято",
    },
    {
      id: "ba461510-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Вышел на работу",
    },
    {
      id: "c21d8750-314d-11eb-bfe1-2bcaa783a21c",
      cards: [],
      title: "Испытательный срок пройден",
    },
    {
      id: "f02e96c0-314d-11eb-bfe1-2bcaa783a21c",
      cards: [
        {
          id: "e75bad80-314d-11eb-bfe1-2bcaa783a21c",
          title: "Матвейкин",
          laneId: "f02e96c0-314d-11eb-bfe1-2bcaa783a21c",
        },
      ],
      title: "Отказ",
    },
  ],
};

const Index = () => {
  return (
    <Wrapper>
      <Box>
        <Board canAddLanes onChange={console.log} data={data} />
      </Box>
    </Wrapper>
  );
};

export default Index;

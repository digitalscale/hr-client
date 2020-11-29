import React from "react";
import Board from "react-trello";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from 'next/router'
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
      id: "0",
      cards: [
        {
          id: "fd2deba0-314d-11eb-bfe1-2bcaa783a21c",
          title: "Газпромоский Иван Алексеевич",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [
            { bgcolor: "green", color: "white", title: "Наиболее подходящий" },
          ],
        },
        {
          id: "fd1deba0-314d-11eb-bfe1-2bcaa783a21c",
          title: "Чебурашкин Имануил",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [
            { bgcolor: "green", color: "white", title: "Наиболее подходящий" },
          ],
        },
        {
          id: "fd1deb20-314d-11eb-bfe1-2bcaa783a21c",
          title: "Киргизов Кирилл",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [{ bgcolor: "red", color: "white", title: "Однозначно нет" }],
        },
        {
          id: "fd1deb20-3140-11eb-bfe1-2bcaa783a21c",
          title: "Кривоухов Анатолий",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [
            { bgcolor: "green", color: "white", title: "Наиболее подходящий" },
          ],
        },
        {
          id: "ad1d0b20-3140-11eb-bfe1-2bcaa783b21c",
          title: "Зябликов Александр",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [{ bgcolor: "orange", color: "white", title: "Слабо" }],
        },
        {
          id: "ff1d0b20-3199-11eb-bfe1-2bcaa783a21c",
          title: "Тютюн Михаил",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [
            { bgcolor: "green", color: "white", title: "Наиболее подходящий" },
          ],
        },
        {
          id: "5d1d0b20-3140-11eb-bfe1-2bcaa783a21c",
          title: "Корочкин Алексей",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [
            { bgcolor: "green", color: "white", title: "Наиболее подходящий" },
          ],
        },
        {
          id: "4d1d0b20-3140-11eb-bfe1-2bcaa783a21c",
          title: "Плющев Алексей",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [
            { bgcolor: "green", color: "white", title: "Наиболее подходящий" },
          ],
        },
        {
          id: "3d1d0b20-3140-11eb-bfe1-2bcaa783a21c",
          title: "Корочкин Алексей",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [{ bgcolor: "orange", color: "white", title: "Слабо" }],
        },
        {
          id: "2d1d0b20-3140-11eb-bfe1-2bcaa783a21c",
          title: "Корочкин Алексей",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [{ bgcolor: "orange", color: "white", title: "Слабо" }],
        },
        {
          id: "1d1d0b20-3140-11eb-bfe1-2bcaa783a21c",
          title: "Корочкин Алексей",
          description: "Frontend Dev",
          laneId: "749114c0-314d-11eb-bfe1-2bcaa783a21c",
          tags: [{ bgcolor: "orange", color: "white", title: "Слабо" }],
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
      id: "1",
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
      id: "2",
      cards: [],
      title: "Тестовое задание",
    },
    {
      id: "3",
      cards: [],
      title: "Техническое интервью",
    },
    {
      id: "4",
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
  const router = useRouter();
  const handleClick = (e) => {
    
    router.push('/employee/1')
  }
  return (
    <Wrapper>
      <Box>
        <Board
          canAddLanes
          onCardClick={handleClick}
          handleDragEnd={(
            cardId,
            sourceLaneId,
            targetLaneId,
            position,
            cardDetails
          ) => {
            fetch("/api/trigger", {
              method: "POST",
              body: JSON.stringify({ targetLaneId }),
            });
          }}
          data={data}
        />
      </Box>
    </Wrapper>
  );
};

export default Index;

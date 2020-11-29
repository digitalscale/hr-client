import { Flex, Heading, SelectMenu, Card, Divider } from "bumbag";
import React, { useEffect, useState } from "react";
import { Input, InputField, Link, Text, Box, Button } from "bumbag";
import { experiencies, gbpDescription } from "../../../utils";
import { group } from "console";
import { useRouter } from "next/router";
import Tags from "../../../components/Tags";
import VacancyHeader from "../../../components/VacancyHeader";
import styled from "styled-components";

interface Skill {
  title: string;
  important?: boolean;
}

interface Request {
  vacancy?: string;
  department?: string;
  grade?: string;
  template?: string;
  skills?: Skill[];
  duties?: string[];
  requirements?: string[];
  experience: number;
  group: string;
}

interface Props {
  data: Request;
}

const SuperButton = styled.div`
cursor: pointer;
  color: #333333;
  font-weight: 500;
  font-size: 16px;
line-height: 18px;
  opacity: 0.7;
  padding: 20px;
  border-bottom: 1px solid #27313F20;
  width: 206px;
`;

const Vacancy: React.FC<Props> = ({ data }) => {
  const {
    query: { id },
  } = useRouter();
  const [state, setState] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    id &&
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/vacancies/${id}`)
        .then((r) => r.json())
        .then(console.log);
  }, [id]);

  const {
    vacancy,
    department,
    grade,
    skills,
    duties,
    requirements,
    experience,
    group,
  } = data;
  return (
    <Flex alignItems="flex-start" flexDirection="column">
      <VacancyHeader active="tab1" vacancy={vacancy} experience={experience} />
      <Flex width="100%" justifyContent="space-between">
        <Card
          padding="32px"
          boxShadow="0px 4px 24px rgba(0, 0, 0, 0.1)"
          variant="bordered"
        >
          <Flex flexDirection="column">
            {skills && (
              <Box marginBottom="32px">
                <Tags defaultItems={skills} disabled />
              </Box>
            )}

            <Heading marginTop="32px" marginBottom="20px" use="h5">
              Обязанности
            </Heading>
            <Flex flexDirection="column" paddingLeft="24px">
              {duties?.map((i) => (
                <Text marginBottom="16px" fontSize="16px">
                  {i}
                </Text>
              ))}
            </Flex>

            <Heading marginTop="32px" marginBottom="20px" use="h5">
              Требования
            </Heading>
            <Flex flexDirection="column" paddingLeft="24px">
              {requirements?.map((i) => (
                <Text marginBottom="16px" fontSize="16px">
                  {i}
                </Text>
              ))}
            </Flex>
            <Heading marginTop="32px" marginBottom="20px" use="h5">
              У нас в Газпром
            </Heading>
            <Flex flexDirection="column" paddingLeft="24px">
              {gbpDescription.map((i) => (
                <Text marginBottom="16px" fontSize="16px">
                  {i}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Card>
        <Flex margin="40px auto" flexDirection="column">
          <SuperButton>Опубликовать</SuperButton>
          <SuperButton>Редактировать</SuperButton>
          <SuperButton>Отложить</SuperButton>
          <SuperButton>Удалить</SuperButton>
        </Flex>
      </Flex>
    </Flex>
  );
};




Vacancy.getInitialProps = async ({ query: { id } }) => {
  const url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL
  console.log('!!!',url)
  const res = await fetch(`${url}/vacancies/${id}`);
  const json = await res.json();
  return { data: json };
};

export default Vacancy;

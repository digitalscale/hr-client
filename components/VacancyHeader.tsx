import { Flex, Heading, TopNav, Button, Text, Box } from "bumbag";
import React from "react";
import { Tabs } from "bumbag";
import { experiencies } from "../utils";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const LinkWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
`;

interface Props {
  vacancy: string;
  experience: number;
  active: string;
}

const VacancyHeader: React.FC<Props> = ({ active }) => {
  const {
    query: { id },
  } = useRouter();
  const req: Request = {
    vacancy: "Frontend Разработчик",
    department: "Супер департамент",
    grade: "1ый грейд",
    skills: [
      { title: "react", important: true },
      { title: "html", important: true },
      { title: "css", important: true },
      { title: "webpack", important: true },
      { title: "js", important: true },
    ],
    duties: ["duty1", "duty2", "duty3", "duty5"],
    requirements: ["duty1", "duty2", "duty3", "duty5"],
    experience: 0,
    group: "Супер группа",
  };
  const { vacancy, experience } = req;
  return (
    <Box width="100%">
      <Flex width="100%" justifyContent="space-between">
        <Heading use="h1">{vacancy}</Heading>{" "}
        <Text>
          Опыт {experiencies.find((i) => i.value === experience)?.label}
        </Text>
      </Flex>
      <Tabs  marginBottom="48px" width="100%" selectedId={active}>
        <Tabs.List>
          <Tabs.Tab marginRight="30px" width="80px" position="relative" tabId="tab1">
            <LinkWrapper>
              <Link href={`/vacancy/${id}/description`}>Описание</Link>
            </LinkWrapper>
          </Tabs.Tab>
          <Tabs.Tab width="70px" position="relative" tabId="tab2">
            <LinkWrapper>
              <Link href={`/vacancy/${id}/board`}> Отклики</Link>
            </LinkWrapper>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Box>
  );
};



export default VacancyHeader;

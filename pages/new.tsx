import { Flex, Heading, SelectMenu, Card, Divider } from "bumbag";
import React from "react";
import { vacancies } from "../utils";

const New = () => {
  const [vacancy, setVacancy] = React.useState();
  const [departament, setDepartament] = React.useState();
  return (
    <Flex>
      <Flex flex="1 1 45%" flexDirection="column">
        <Heading use="h1" marginBottom="50px">
          Новая вакансия
        </Heading>
        <SelectMenu
          hasSearch
          onChange={setVacancy}
          options={vacancies}
          placeholder="Введите название вакансии"
          value={vacancy}
        />
        <SelectMenu
          hasSearch
          onChange={setVacancy}
          options={vacancies}
          placeholder="Введите название вакансии"
          value={vacancy}
        />
      </Flex>
      <Flex flex="1 1 10%" />
      <Flex marginTop="85px" flex="1 1 45%" flexDirection="column">
        <Card boxShadow="0px 4px 24px rgba(0, 0, 0, 0.1)" variant="bordered">
          <Flex flexDirection="column">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading use="h5" marginBottom="0px">
                Описание вакансии
              </Heading>
              <SelectMenu
                hasSearch
                onChange={setVacancy}
                options={vacancies}
                placeholder="Шаблон описания"
                value={vacancy}
              />
            </Flex>
            <Divider marginTop="20px" />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default New;

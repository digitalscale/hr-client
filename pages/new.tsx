import { Flex, Heading, SelectMenu, Card, Divider } from "bumbag";
import React from "react";
import { Input, InputField, Link, Text, Box, Button } from "bumbag";
import Tags from "../components/Tags";
import { vacancies, experiencies, gbpDescription } from "../utils";
import { group } from "console";


const grades = [
  { key: 1, label: "1 грейд", value: "busines" },
  { key: 2, label: "2 грейд", value: "solution" },
  { key: 3, label: "3 грейд", value: "solution" },
  { key: 3, label: "4 грейд", value: "solution" },
  { key: 3, label: "5 грейд", value: "solution" },
  { key: 3, label: "6 грейд", value: "solution" },
  { key: 3, label: "7 грейд", value: "solution" },
  { key: 3, label: "8 грейд", value: "solution" },
  { key: 3, label: "9 грейд", value: "solution" },
  { key: 3, label: "10 грейд", value: "solution" },
];

export const departments = [
  { key: 1, label: "Управления бизнес-процессами", value: "busines" },
  { key: 2, label: "Инноваций", value: "solution" },
];

export const groups = [
  {
    key: 1,
    label: "Инновационного развития",
    value: "inovation",
  },
  {
    key: 2,
    label: "Разработки микросервисов",
    value: "micro",
  },
  {
    key: 2,
    label: "Разработки фронтенда",
    value: "front",
  },
];

const groupsDescription = {
  inovation:
    "Мы разрабатываем, внедряем и поддерживаем платформу и решения по управлению бизнес-процессами компании от заказа командировок до управления целями и бизнес-инициативами. У нас в команде есть эксперты по поддержке платформы и приложений и нам очень не хватает разработчиков.",
  micro: "Мы разрабатываем, внедряем и поддерживаем платформу и решения по управлению бизнес-процессами компании от заказа командировок до управления целями и бизнес-инициативами. У нас в команде есть эксперты по поддержке платформы и приложений и нам очень не хватает разработчиков.",
  front: "Мы разрабатываем, внедряем и поддерживаем платформу и решения по управлению бизнес-процессами компании от заказа командировок до управления целями и бизнес-инициативами. У нас в команде есть эксперты по поддержке платформы и приложений и нам очень не хватает разработчиков.",
};


const Section = ({ children, title }) => (
  <Flex marginBottom="40px" flexDirection="column">
    {title && (
      <Flex justifyContent="space-between">
        {" "}
        <Heading use="h4" marginBottom="50px">
          {title}
        </Heading>
        <Link>По умолчанию</Link>
      </Flex>
    )}
    {children}
  </Flex>
);

interface Skill {
  title: string;
  important?: boolean;
}

interface Request {
  vacancy?: string;
  department?: string;
  grade?: string;
  templateId: string;
  skills?: Skill[];
  duties?: string[];
  requirements?: string[];
  experience: string;
  group: string;
}

const New = () => {
  const [vacancy, setVacancy] = React.useState();
  const [departament, setDepartament] = React.useState();
  const [group, setGroup] = React.useState();
  const [template, setTemplate] = React.useState();
  const [experience, setExperience] = React.useState();
  const [skills, setSkills] = React.useState([]);
  const [grade, setGrade] = React.useState();
  const [duties, setDuties] = React.useState<string[]>([""]);
  const [requirements, setRequirements] = React.useState<string[]>([""]);
  console.log({
    vacancy,
    departament,
    group,
    template,
    experience,
    skills,
    grade,
    duties,
    requirements,
  });
  const filteredSkills = skills.map((i) => ({ ...i, active: false }));

  return (
    <Flex>
      <Flex flex="1 1 45%" flexDirection="column">
        <Heading use="h1" marginBottom="50px">
          Новая вакансия
        </Heading>{" "}
        <Section>
          <SelectMenu
            hasSearch
            onChange={setVacancy}
            options={vacancies}
            placeholder="Название вакансии"
            value={vacancy}
            marginBottom="30px"
          />
          <Flex marginBottom="30px">
            <SelectMenu
              flex="1 1 50%"
              hasSearch
              onChange={setDepartament}
              options={departments}
              placeholder="Департамент"
              value={departament}
              marginRight="20px"
            />
            <SelectMenu
              flex="1 1 50%"
              hasSearch
              onChange={setGroup}
              options={groups}
              placeholder="Отдел"
              value={group}
            />
          </Flex>
        </Section>
        <Section title="Навыки">
          <Flex marginBottom="30px">
            <SelectMenu
              flex="1 1 50%"
              hasSearch
              onChange={setExperience}
              options={experiencies}
              placeholder="Опыт работы"
              value={experience}
              marginRight="20px"
            />
            <SelectMenu
              flex="1 1 50%"
              hasSearch
              onChange={setGrade}
              options={grades}
              placeholder="Грейд"
              value={grade}
            />
          </Flex>
          <Tags
            defaultItems={[
              {
                title: "React",
              },
              {
                title: "Webpack",
              },
              {
                title: "Sass",
              },
            ]}
            onChange={setSkills}
          />
        </Section>
        <Section title="Обязанности">
          <Flex flexDirection="column" marginBottom="30px">
            {duties.map((i, index) => (
              <Input
                key={index}
                marginBottom="16px"
                onChange={({ target: { value } }) =>
                  setDuties((prev) => {
                    const copy = [...prev];
                    copy[index] = value;
                    return copy;
                  })
                }
                value={duties[index]}
                placeholder="Обязанность"
              />
            ))}
          </Flex>
          <Link
            marginTop="-20px"
            onClick={() =>
              setDuties((prev) => {
                return [...prev, ""];
              })
            }
          >
            Добавить еще
          </Link>
        </Section>
        <Section title="Требования">
          <Flex flexDirection="column" marginBottom="30px">
            {requirements.map((i, index) => (
              <Input
                key={index}
                marginBottom="16px"
                onChange={({ target: { value } }) =>
                  setRequirements((prev) => {
                    const copy = [...prev];
                    copy[index] = value;
                    return copy;
                  })
                }
                value={requirements[index]}
                placeholder="Требование"
              />
            ))}
          </Flex>
          <Link
            marginTop="-20px"
            onClick={() =>
              setRequirements((prev) => {
                return [...prev, ""];
              })
            }
          >
            Добавить еще
          </Link>
        </Section>
      </Flex>
      <Flex flex="1 1 10%" />
      <Flex flex="1 1 45%" alignItems="flex-end" flexDirection="column">
        <Button palette="primary" marginBottom="35px">
          {" "}
          Сохранить
        </Button>
        <Card
          padding="32px"
          boxShadow="0px 4px 24px rgba(0, 0, 0, 0.1)"
          variant="bordered"
        >
          <Flex flexDirection="column">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading use="h5" marginBottom="0px">
                Описание вакансии
              </Heading>
              <SelectMenu
                hasSearch
                onChange={setTemplate}
                options={vacancies}
                placeholder="Шаблоны"
                value={template}
              />
            </Flex>
            <Divider marginTop="20px" marginBottom="30px" />
            <Heading marginBottom="8px" use="h4">
              {vacancy && vacancy.label}
            </Heading>
            {experience && (
              <Text marginBottom="16px" fontSize="14px">
                Опыт {experience?.label}
              </Text>
            )}
            {skills && (
              <Box marginBottom="32px">
                <Tags
                  defaultItems={filteredSkills.filter((i) => i.important)}
                  disabled
                />
              </Box>
            )}
            {group && (
              <Text marginBottom="32px" fontSize="16px">
                {groupsDescription[group.value]}
              </Text>
            )}
            <Heading marginBottom="20px" use="h5">
              Ключевые навыки
            </Heading>
            <Flex flexDirection="column" paddingLeft="24px">
              <Text marginBottom="16px" fontSize="16px">
                Иметь реальный опыт работы как {vacancy && vacancy.label}{" "}
                {experience?.label}
              </Text>
              {skills
                .filter((i) => i.important)
                .map((i) => (
                  <Text marginBottom="16px" fontSize="16px">
                    {i.title}
                  </Text>
                ))}
            </Flex>
            <Heading marginTop="32px" marginBottom="20px" use="h5">
              Желаемые навыки
            </Heading>
            <Flex flexDirection="column" paddingLeft="24px">
              {skills
                .filter((i) => i.active && !i.important)
                .map((i) => (
                  <Text marginBottom="16px" fontSize="16px">
                    {i.title}
                  </Text>
                ))}
            </Flex>
            <Heading marginTop="32px" marginBottom="20px" use="h5">
              Обязанности
            </Heading>
            <Flex flexDirection="column" paddingLeft="24px">
              {duties.map((i) => (
                <Text marginBottom="16px" fontSize="16px">
                  {i}
                </Text>
              ))}
            </Flex>

            <Heading marginTop="32px" marginBottom="20px" use="h5">
              Требования
            </Heading>
            <Flex flexDirection="column" paddingLeft="24px">
              {requirements.map((i) => (
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
      </Flex>
    </Flex>
  );
};

export default New;

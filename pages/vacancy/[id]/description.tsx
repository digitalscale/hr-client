import { Flex, Heading, SelectMenu, Card, Divider } from "bumbag";
import React from "react";
import { Input, InputField, Link, Text, Box, Button } from "bumbag";
import { experiencies, gbpDescription } from "../../../utils";
import { group } from "console";
import Tags from "../../../components/Tags";

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

const Vacancy = () => {
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
  const {
    vacancy,
    department,
    grade,
    skills,
    duties,
    requirements,
    experience,
    group,
  } = req;
  console.log(experiencies.find((i)=>i.value === experience)?.label)
  return (
    <Card
      padding="32px"
      boxShadow="0px 4px 24px rgba(0, 0, 0, 0.1)"
      variant="bordered"
    >
      <Flex flexDirection="column">
        
        <Heading marginBottom="8px" use="h4">
          {vacancy}
        </Heading>
        {typeof experience === 'number' && (
          <Text marginBottom="16px" fontSize="14px">
            Опыт {experiencies.find((i)=>i.value === experience)?.label}
          </Text>
        )}
        {skills && (
          <Box marginBottom="32px">
            <Tags
              defaultItems={skills}
              disabled
            />
          </Box>
        )}
        
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
  );
};

export default Vacancy;

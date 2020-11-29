import { Flex, Heading, SelectMenu, Card, Divider } from "bumbag";
import React from "react";
import { Input, InputField, Link, Text, Box, Button } from "bumbag";
import { experiencies, gbpDescription } from "../../../utils";
import { group } from "console";
import Tags from "../../../components/Tags";
import Kanban from "../../../components/Kanban";
import VacancyHeader from "../../../components/VacancyHeader";

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

  return (
    <Flex  alignItems="flex-start" flexDirection="column">
      <VacancyHeader active="tab2" />
      <Kanban />
    </Flex>
  );
};

export default Vacancy;

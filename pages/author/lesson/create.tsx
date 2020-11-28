import React, { useEffect, useState } from "react";
import { Icon, Input } from "bumbag";
import { useRouter } from "next/router";
import Editor from "components/Editor";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { Flex } from "bumbag";
import { useGetLessonQuery, useCreateLessonMutation } from "graphqlTypes";

import LessonHeader from "components/layout/LessonHeader";

export default function CourseList() {
  const {
    query: { id },
  } = useRouter();

  const [createLesson, { data, error, loading }] = useCreateLessonMutation();
  const [value, setValue] = useState("");
 

  if (error) return "ошибка";
  if (loading) return "загрузка";

  return (
    <Flex flexDirection="column">
      <Input
        placeholder="Введите название урока и нажмите enter"
        margin="60px auto 0 auto"
        width="620px"
        value={value}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            createLesson({ variables: { title: value } });
          }
        }}
        onChange={(r) => {
          setValue(r.target.value);
        }}
      />
    </Flex>
  );
}

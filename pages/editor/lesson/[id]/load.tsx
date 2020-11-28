import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Editor from "components/Editor";

import { Flex } from "bumbag";
import {
  useGetLessonQuery,
  Enum_Lesson_Status,
  useUpdateLessonContentMutation,
} from "graphqlTypes";
import PageWithHeader from "components/layout/withHeader";
import LessonHeader from "components/layout/LessonHeader";
import { Spinner } from "bumbag";

export default function CourseList(props) {
  const {
    query: { id },
  } = useRouter();
  const [content, setContent] = React.useState<string>("");
  const { data, error, loading } = useGetLessonQuery({
    variables: {
      id: id as string,
    },
  });

  if (error) return "ошибка";
  if (loading) return <LessonHeader {...props} id={id}><Spinner size="large"></Spinner></LessonHeader>

  return <LessonHeader id={id}>Нагрузка</LessonHeader>;
}

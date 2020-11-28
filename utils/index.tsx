export const vacancies = [
  { key: 1, label: "React разработчик", value: "react" },
  { key: 2, label: "Solution архитектор", value: "solution" },
  { key: 3, label: "Go разработчик", value: "go" },
  { key: 4, label: "Python разработчик", value: "python" },
  { key: 4, label: "Java разработчик", value: "java" },
];

export const experiencies = [
  { key: 1, label: "менее года", value: 0 },
  { key: 2, label: "1-3 года", value: 1 },
  { key: 3, label: "3+ лет", value: 3 },
];

export const gbpDescription = [
  "интересные задачи (работы много, скучать не придётся)",
  "открытая и быстрая обратная связь, реальная возможность влиять на решения",
  '"белая" зарплата, официальное оформление',
  "32 дня отпуска",
  "внешнее обучение по корпоративным ценам (проф курсы, вебинары, английский язык)",
  "в соц. сетях можно познакомиться с корпоративной культурой",
];

export type VacancyStatus = "active" | "inactive" | "draft";

export interface VacancyShort {
  id: string;
  title: string;
  status: VacancyStatus;
  location?: string;
  department?: string;
  created: string;
  updated: string;
}
export interface ListVanciesResponse {
  items: [VacancyShort];
  token?: string;
}

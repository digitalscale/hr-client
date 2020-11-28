export const vacancies = [
    { key: 1, label: 'React разработчик', value: 'react' },
    { key: 2, label: 'Solution архитектор', value: 'solution' },
    { key: 3, label: 'Go разработчик', value: 'go' },
    { key: 4, label: 'Python разработчик', value: 'python' }
    { key: 4, label: 'Python разработчик', value: 'python' }
]

export type VacancyStatus = "active" | "inactive" | "draft"; 

export interface VacancyShort {
    id: string;
    title: string;
    status: VacancyStatus;
    location?: string;
    department?: string;
    created: number;
    updated: number;
}
export interface ListVanciesResponse {
    items: [VacancyShort];
    token?: string;
}
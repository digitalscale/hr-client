import { Flex, Heading, SelectMenu } from 'bumbag';
import React from 'react';
import { vacancies } from '../utils';

const New = () => {
    const [vacancy, setVacancy] = React.useState();
    return (<Flex flexDirection="column">
        <Heading>
            Новая вакансия
        </Heading>
        <SelectMenu
            hasSearch
            onChange={setVacancy}
            options={vacancies}
            placeholder="Select a fruit..."
            value={vacancy}
        />
    </Flex>)
}

export default New;
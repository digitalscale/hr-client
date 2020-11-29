import React, { useState, useEffect } from "react";
import style from "styled-components";
import { Button, SelectMenu, Table } from "bumbag";
import Link from "next/link";
import process from "process";
import { Spinner } from "bumbag";

const mock = [
  {
    id: "3423432424",
    title: "React-разработчик",
    status: "active",
    area: "Москва",
    department: "отдел комуникации",
    created: "25",
    updated: "26",
  },
  {
    id: "3423432424",
    title: "Golang-разработчик",
    status: "active",
    area: "Ростов-на-Дону",
    department: "маркетинговая платформа",
    created: "25",
    updated: "26",
  },
  {
    id: "3423432424",
    title: "Golang-разработчик",
    status: "inactive",
    area: "Рязань",
    department: "маркетинговая платформа",
    created: "25",
    updated: "26",
  },
  {
    id: "3423432424",
    title: "Golang-разработчик",
    status: "inactive",
    area: "Москва",
    department: "внутренние проекты",
    created: "25",
    updated: "26",
  },
  {
    id: "3423432424",
    title: "Golang-разработчик",
    status: "inactive",
    area: "Казань",
    department: "отдел комуникации",
    created: "25",
    updated: "26",
  },
  {
    id: "3423432424",
    title: "Golang-разработчик",
    status: "inactive",
    area: "Санкт-Петербург",
    department: "отдел разработки",
    created: "25",
    updated: "26",
  },
];

const StyledHeadComponents = style.div`
	display: flex;
	justify-content: space-between;

	h1 {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 37px;
		color: #12112F;
		margin: 0;
	}
`;

const StyledFilterField = style.div`
	display: flex;
	margin-top: 32px;
`;

const StyledTableBlock = style.div`
	margin-top: 80px;

	.titleJob {
		color: #12112F
	}
	.titleJob:hover {
		color: #5454E2
	}
`;

const StyledStatusText = style.div`
	color: ${(props) => props.color}
`;

const Filter = ({ changeFilter, data }) => {
  const [valueVacanci, setValueVacanci] = useState("");
  const [valueCity, setValueCity] = useState("");
  const [valueStatus, serValueStatus] = useState("");

  function setFilter(e: any, type: string) {
    let key: string;
    switch (type) {
      case "title":
        key = "title";
        setValueVacanci(e);
        setValueCity("");
        serValueStatus("");
        break;
      case "area":
        key = "area";
        setValueCity(e);
        setValueVacanci("");
        serValueStatus("");
        break;
      case "status":
        key = "status";
        serValueStatus(e);
        setValueVacanci("");
        setValueCity("");
        break;
    }
    changeFilter({ [key]: e.label });
  }

  const titleArray = data.reduce((acc, item) => {
    const arr = acc;
    if (!arr.includes(item.title)) {
      arr.push(item.title);
    }
    return arr;
  }, []);

  const areaArray = data.reduce((acc, item) => {
    const arr = acc;
    if (!arr.includes(item.area)) {
      arr.push(item.area);
    }
    return arr;
  }, []);

  const statusArray = data.reduce((acc, item) => {
    const arr = acc;
    if (!arr.includes(item.status)) {
      arr.push(item.status);
    }
    return arr;
  }, []);

  console.log(statusArray);

  return (
    <StyledFilterField>
      <SelectMenu
        width="50%"
        marginRight="12px"
        hasSearch
        options={titleArray.map((item, i) => {
          return { key: i, label: item, value: item };
        })}
        placeholder="Название вакансии..."
        onChange={(event) => setFilter(event, "title")}
        value={valueVacanci}
      />
      <SelectMenu
        hasSearch
        width="25%"
        marginRight="12px"
        options={areaArray.map((item, i) => {
          return { key: 1, label: item, value: item };
        })}
        placeholder="Город..."
        onChange={(event) => setFilter(event, "area")}
        value={valueCity}
      />
      <SelectMenu
        hasSearch
        width="25%"
        options={statusArray.map((item, i) => {
          return { key: i, label: item, value: item };
        })}
        placeholder="Статус..."
        onChange={(event) => setFilter(event, "status")}
        value={valueStatus}
      />
    </StyledFilterField>
  );
};

const Head = () => {
  return (
    <StyledHeadComponents>
      <h1>Вакансии</h1>
      <Link
        href="/new
			"
      >
        <Button palette="primary">+ Создать</Button>
      </Link>
    </StyledHeadComponents>
  );
};

const TableVacation = ({ sort }) => {
  return (
    <StyledTableBlock>
      <Table variant="minimal">
        <Table.Body>
          {sort.map(({ id, title, status, department, area }) => {
            let carrentTextStatus: string;
            let colorText;
            switch (status) {
              case "active":
                carrentTextStatus = "Активно";
                colorText = "#27AE60";
                break;
              case "inactive":
                carrentTextStatus = "Закрыто";
                colorText = "#27313F";
                break;
              case "draft":
                carrentTextStatus = "Приостановлено";
                colorText = "#27313F";
            }
            return (
              <Link href={`/vacancy/${id}/description`}>
                <Table.Row
                  key={id}
                  borderBottom="1px solid #E0E4EA"
                  cursor="pointer"
                >
                  <Table.Cell
                    padding="32px 0px 24px 0px"
                    fontFamily="Verdana"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="20px"
                    lineHeight="26px"
                    className="titleJob"
                  >
                    {title}
                  </Table.Cell>
                  <Table.Cell
                    textAlign="left"
                    fontFamily="Verdana"
                    fontStyle="normal"
                    fontWeight="normal;font-size: 16px;line-height: 24px"
                    color="#12112F"
                  >
                    {`${area} ${department}`}
                  </Table.Cell>
                  <Table.Cell textAlign="right">
                    <StyledStatusText color={colorText}>
                      {carrentTextStatus}
                    </StyledStatusText>
                  </Table.Cell>
                </Table.Row>
              </Link>
            );
          })}
        </Table.Body>
      </Table>
    </StyledTableBlock>
  );
};

const Main = () => {
  const [state, setState] = useState({
    loading: true,
    mock: null,
  });
  const [currentFilter, setCurrentStatus] = useState({});
  useEffect(() => {
    const url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
    const res = fetch(`/api/vacancies`)
      .then((r) => r.json())
      .then((r) => {
        setState({ loading: false, mock: r });
      });
  }, []);
  if( state.loading){
	return <Spinner />;
  }
 const mock = state.mock;

  let currentLabel = currentFilter[Object.keys(currentFilter)[0]];

  switch (currentLabel) {
    case "Активно":
      currentLabel = "active";
      break;
    case "Закрыто":
      currentLabel = "inactive";
      break;
    case "Приостановлено":
      currentLabel = "draft";
      break;
  }

  const arrayForFilter = mock.items;

  const filteredArray = arrayForFilter.filter(
    (item) => item[Object.keys(currentFilter)[0]] == currentLabel
  );

  function changeFilter(filter) {
    setCurrentStatus(filter);
  }

  return (
    <div>
      <Head />
      <Filter changeFilter={changeFilter} data={mock.items} />
      <TableVacation sort={filteredArray} />
    </div>
  );
};

export default Main;

import { Flex, Box, Link, Modal, Card, Button, SelectMenu } from "bumbag";
import React, { useEffect } from "react";
import { StarIcon, WhiteStarIcon } from "./StarIcon";

interface TagProps {
  title: string;
  active?: boolean;
  important?: boolean;
  disabled?: boolean;
  setItems?: () => void;
  items: any;
}

const Tag: React.FC<TagProps> = ({
  title,
  important,
  disabled,
  active,
  items,
  setItems,
}) => {
  return (
    <Flex
      onClick={() => {
        console.log("from parent");
        const newState = items.map((item) => {
          if (item.title === title) {
            if (item.active) {
              return {
                ...item,
                active: false,
              };
            } else {
              return {
                ...item,
                active: true,
              };
            }
          }
          return item;
        });
        setItems(newState);
      }}
      cursor="pointer"
      marginRight="12px"
      marginBottom="12px"
      alignItems="center"
      padding="4px 12px"
      borderRadius="7px"
      border="1px solid #212121"
      background={active ? "#212121" : undefined}
      color={active ? "white" : undefined}
      _hover={disabled ? null : { backgroundColor: "#212121", color: "white" }}
    >
      {title}{" "}
      {!disabled && (
        <Flex
          onClick={(e) => {
            e.stopPropagation();
            console.log("click");
            const newState = items.map((item) => {
              if (item.title === title) {
                if (item.important) {
                  return {
                    ...item,
                    active: false,
                    important: false,
                  };
                } else {
                  return {
                    ...item,
                    active: true,
                    important: true,
                  };
                }
              }
              return item;
            });
            setItems(newState);
          }}
          alignItems="center"
          paddingLeft="11px"
        >
          {important ? <WhiteStarIcon /> : <StarIcon />}
        </Flex>
      )}
    </Flex>
  );
};

interface TagsProps {
  defaultItems: TagProps[];
  onChange: () => void;
  disabled?: boolean;
}

const skills = [
  { key: "HTML", label: "HTML", value: "HTML/CSS" },
  { key: "SQL", label: "SQL", value: "SQL" },
  { key: "Python", label: "Python", value: "Python" },
  { key: "Java", label: "Java", value: "Java" },
  { key: "Bash", label: "Bash", value: "Bash/Shell/PowerShell" },
  { key: "C", label: "C", value: "C#" },
  { key: "PHP", label: "PHP", value: "PHP" },
  { key: "C", label: "C", value: "C++" },
  { key: "TypeScript", label: "TypeScript", value: "TypeScript" },
  { key: "C", label: "C", value: "C" },
  { key: "Ruby", label: "Ruby", value: "Ruby" },
  { key: "Go", label: "Go", value: "Go" },
  { key: "Assembly", label: "Assembly", value: "Assembly" },
  { key: "Swift", label: "Swift", value: "Swift" },
  { key: "Kotlin", label: "Kotlin", value: "Kotlin" },
  { key: "R", label: "R", value: "R" },
  { key: "VBA", label: "VBA", value: "VBA" },
  { key: "Objective", label: "Objective", value: "Objective-C" },
  { key: "Scala", label: "Scala", value: "Scala" },
  { key: "Rust", label: "Rust", value: "Rust" },
  { key: "Dart", label: "Dart", value: "Dart" },
  { key: "Elixir", label: "Elixir", value: "Elixir" },
  { key: "Clojure", label: "Clojure", value: "Clojure" },
  { key: "WebAssembly", label: "WebAssembly", value: "WebAssembly" },
  { key: "Node", label: "Node", value: "Node.js" },
  { key: "Разработка", label: "Разработка", value: "Разработка для Android" },
  { key: "AngularJS", label: "AngularJS", value: "AngularJS" },
  { key: "Python", label: "Python", value: "Python" },
  { key: "React", label: "React", value: "React" },
  { key: "MongoDB", label: "MongoDB", value: "MongoDB" },
  { key: "Arduino", label: "Arduino", value: "Arduino" },
];

const Tags: React.FC<TagsProps> = ({ defaultItems, onChange, disabled }) => {
  const [items, setItems] = React.useState<TagProps[]>(defaultItems);
  const [skill, setSkill] = React.useState();
  useEffect(() => onChange && onChange(items), [items]);
  const copyItems = disabled ? defaultItems : items;
  return (
    <Flex alignItems="start" flexDirection="column">
      <Flex>
        {copyItems.map((i) => (
          <Tag
            disabled={disabled}
            title={i.title}
            active={i.active}
            important={i.important}
            items={items}
            setItems={setItems}
          />
        ))}
      </Flex>
      {!disabled && (
        <Modal.State marginTop="20px" animated>
          <Modal.Disclosure>
            <Link>Добавить навык</Link>
          </Modal.Disclosure>
          <Modal fade>
            <Card>
              <SelectMenu
                flex="1 1 50%"
                marginBottom="20px"
                hasSearch
                onChange={setSkill}
                options={skills}
                placeholder="Выберите навык"
                value={skill}
              />
              <Modal.Disclosure
                onClick={() =>
                  setItems((prev) => {
                    return [...prev, { title: skill.label }];
                  })
                }
                use={Button}
              >
                Добавить
              </Modal.Disclosure>
            </Card>
          </Modal>
        </Modal.State>
      )}
    </Flex>
  );
};

export default Tags;

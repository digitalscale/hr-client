export default function slack(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Доброго времени суток коллеги. Оцените кандидата!"
                }
            },
            {
                "type": "section",
                "block_id": "section567",
                "text": {
                    "type": "mrkdwn",
                    "text": "<https://gazprom.messa.dev/employee/1|Тестовый кандидат> \n :star::star::star::star:\n Кандидат на вакансию аналитик"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://www.tupa-germania.ru/upload/docs/image1/750_450_x_center/145_image1.jpg",
                    "alt_text": "Haunted hotel image"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "radio_buttons",
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Готовы рассмотеть кандидата*",
                                    "emoji": true
                                },
                                "value": "value-0"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Готовы отправит тестовое задание",
                                    "emoji": true
                                },
                                "value": "value-1"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Не готовы предложить работу",
                                    "emoji": true
                                },
                                "value": "value-2"
                            }
                        ],
                        "action_id": "actionId-0"
                    }
                ]
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Укажите время, когда есть возможность собеседовать данного кандидата"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "datepicker",
                        "initial_date": "1990-04-28",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select a date",
                            "emoji": true
                        },
                        "action_id": "actionId-0"
                    },
                    {
                        "type": "datepicker",
                        "initial_date": "1990-04-28",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select a date",
                            "emoji": true
                        },
                        "action_id": "actionId-1"
                    }
                ]
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    console.log(process.env.SLACK_HOOK_URL, 'HOOK URL')
    fetch(process.env.SLACK_HOOK_URL, requestOptions)
        .then(response => response.text())
        .then(() => res.end(JSON.stringify({ status: 'ok' })))
        .catch(error => console.log('error', error));
}
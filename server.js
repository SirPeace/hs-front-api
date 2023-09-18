import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.json({
        title: 'Кастомная форма',
        blocks: [
            {
                title: 'Общая информация о вас',
                fields: [
                    {
                        label: 'Имя',
                        type: 'string',
                        rules: ['required'],
                    },
                    {
                        label: 'Фамилия',
                        type: 'string',
                        rules: ['required'],
                    },
                    {
                        label: 'Дата рождения',
                        type: 'date',
                        rules: [],
                    },
                    {
                        label: 'Биография',
                        type: 'text',
                        rules: ['min:20'],
                    },
                    {
                        label: 'Фото (необязательно к реализации)',
                        type: 'photo',
                        rules: [],
                    },
                ]
            },
            {
                title: 'Контакты',
                fields: [
                    {
                        label: 'Номер телефона',
                        type: 'string',
                        rules: ['phone'],
                    },
                    {
                        label: 'Адрес эл. почты',
                        type: 'string',
                        rules: ['required', 'mail'],
                    },
                    {
                        label: 'Ссылка на Github',
                        type: 'string',
                        rules: ['required', 'link'],
                    },
                ]
            },
            {
                title: 'Желаемые условия работы',
                fields: [
                    {
                        label: 'Позиция',
                        type: 'select',
                        options: [
                            'Back-end',
                            'Front-end',
                            'Full Stack',
                        ],
                        rules: ['required'],
                    },
                    {
                        label: 'Зарплата',
                        type: 'number',
                        rules: ['money', 'required'],
                    },
                    {
                        label: 'Кол-во рабочих дней в неделю',
                        type: 'number',
                        rules: ['min:3', 'max:5'],
                    },
                    {
                        label: 'Начало рабочего дня',
                        type: 'time',
                        rules: ['min:08:00', 'max:12:00'],
                    },
                    {
                        label: 'Конец рабочего дня',
                        type: 'time',
                        rules: ['min:18:00', 'max:20:00'],
                    },
                    {
                        label: 'Условия вакансии мне подходят',
                        type: 'checkbox',
                        rules: ['required'],
                    },
                ]
            },
        ]
    })
});

const port = process.env.PORT;

app.listen(port, () => console.debug(`🚀 Running on port ${port}`));

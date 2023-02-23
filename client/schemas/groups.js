export default {
  name: 'groups',
  type: 'document',
  title: '🫂 Собрания',
  fields: [
    {
      name: 'group_name',
      type: 'string',
      title: 'Имя группы',
    },
    {
      name: 'group_time',
      type: 'string',
      title: 'Время проведения группы',
    },
    {
      name: 'body',
      title: 'Контент',
      type: 'blockContent',
    },
    {
      title: 'Ссылка',
      name: 'group_url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }).warning("'http', 'https', 'mailto', 'tel'"),
    },
  ],
}

export default {
  name: 'blog',
  title: '🔰 Блог',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.max(200).warning('Заполните поле!'),
    },
    {
      name: 'slug',
      title: 'Персональная ссылка',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Дата',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'excerpt',
      title: 'Краткое описание',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Контент',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title, date}) {
      const subtitles = [
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)
      return {title, subtitle: subtitles.join(' ')}
    },
  },
}

export default {
  name: 'devs',
  title: '💻 Разработчикам',
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
    // {
    //   name: 'author',
    //   title: 'Автор',
    //   type: 'reference',
    //   to: {type: 'author'},
    // },
    {
      title: 'Постер',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Подпись',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    // {
    //   name: 'categories',
    //   title: 'Категория(-и)',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
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
      author: 'author.name',
      media: 'mainImage',
    },
    prepare({title, media, author, date}) {
      const subtitles = [
        author && `${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)
      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
}

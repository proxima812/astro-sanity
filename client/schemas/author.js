export default {
  name: 'author',
  title: '😎 Авторы',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Имя',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Персольная ссылка',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Фотка',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Биография',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}

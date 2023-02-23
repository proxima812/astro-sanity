import {defineArrayMember, defineType} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Контент',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        // {title: 'Title', value: 'title'},
        // {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Цитата', value: 'blockquote'},
      ],
      lists: [
        {title: 'Список', value: 'bullet'},
        {title: 'Номера', value: 'number'},
      ],

      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Жирный', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Код', value: 'code'},
          {title: 'Подчеркнутый', value: 'underline'},
          {title: 'Зачеркнутый', value: 'strike-through'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Открыть на новой вкладке',
                name: 'blank',
                type: 'boolean',
              },
              // Ссылаемся на свои же посты ввиде ссысок в текущем посте.
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'post'},
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})

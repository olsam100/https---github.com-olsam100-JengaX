export default {
    name: 'post',
    title: 'Post',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
        },
        {
            name: 'postTitle',
            type: 'string',
            title: 'PostTitle'
        },
        {
            title: 'Release date',
            name: 'releaseDate',
            type: 'date',
            options: {
              dateFormat: ('MMMM DD YYYY'),
              calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        
    ],
};
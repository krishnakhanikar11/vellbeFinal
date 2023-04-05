const event = {
    title: 'Events',
    name:'event',
    type:'document',
    fields:[
        {
            name: 'title',
            title:'Title',
            type:'string',
        },
        {
            name: 'slug',
            title:'Slug',
            type:'slug',
            options: {
                source: 'title',
                maxLength:'90',
            }
        },
        {
            name: 'category',
            title:'Category',
            type:'string',
        },
        {
            name: 'readTime',
            title:'Time',
            type:'string',
        },
        {
            name: 'publishedAt',
            title:'Published at',
            type:'date',
        },
        {
            name: 'bgImage',
            title:'Bg image',
            type:'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'body',
            title:'Body',
            type:'array',
            of:[
                {
                    type:'block',
                },
                {
                    type:'image',
                },
                
            ],
        },
    ],
    preview:{
        select:{
            title:'title',
        },
    },
}

export default event
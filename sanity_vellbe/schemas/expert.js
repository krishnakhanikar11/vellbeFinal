const expert = {
    title: 'Expert',
    name:'expert',
    type:'document',
    fields:[
        {
            name: 'name',
            title:'Name',
            type:'string',
        },
        {
            name: 'slug',
            title:'Slug',
            type:'slug',
        },
        {
            name: 'expertize',
            title:'Expertize',
            type:'string',
        },
        {
            name: 'rate',
            title:'Rate',
            type:'string',
        },
        {
            name: 'profileImage',
            title:'Profile image',
            type:'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'about',
            title:'About',
            type:'array',
            of:[
                {
                    type:'block',
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

export default expert;
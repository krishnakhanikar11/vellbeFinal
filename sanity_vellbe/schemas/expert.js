const expert = {
    title: 'Expert',
    name:'expert',
    type:'document',
    fields:[
        {
            name: 'position',
            title:'Position',
            type:'string',
        },
        {
            name: 'name',
            title:'Name',
            type:'string',
        },
        {
            name: 'slug',
            title:'Slug',
            type:'slug',
            options: {
                source: 'name',
                maxLength:'90',
            }
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
            name: 'experience',
            title:'Experience',
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
            title:'name',
        },
    },
}

export default expert;
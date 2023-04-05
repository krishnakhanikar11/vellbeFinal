const user = {
    title: 'User',
    name:'user',
    type:'document',
    fields:[
        {
            name: 'name',
            title:'Name',
            type:'string',
        },
        {
            name: 'email',
            title:'Email',
            type:'email',
        },
        {
            name: 'country',
            title:'Country',
            type:'string',
        },
        {
            name: 'createdAt',
            title:'Created at',
            type:'date',
        }
    ],
    preview:{
        select:{
            title:'name',
        },
    },
}

export default user
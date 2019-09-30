let users = [
    {
        id:12,
        name:'Kishore',
        age:32,
        dept:'HR'
    },
    {
        id:13,
        name:'Naveen',
        age:34,
        dept:'FINANCE'
    },
    {
        id:14,
        name:'Anand',
        age:30,
        dept:'PAYROLL'
    },
    {
        id:15,
        name:'Kiran',
        age:28,
        dept:'HR'
    },
    {
        id:10,
        name:'Manish',
        age:28,
        dept:'PAYROLL'
    }
]


users
    .filter( u => u.age < 30)
    .map(u =>  u.name)
    .forEach(name=> console.log(name))
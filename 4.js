var ele=[{fullname:"sita",age:16},{fullname:"ram",age:19},{fullname:"laxman",age:15}]

var value=ele.filter( (obj) => {
    return obj.age>=18
})
console.log(value)
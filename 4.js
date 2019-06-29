var ele=[{fullname:"sita",age:16},{fullname:"ram",age:19},{fullname:"laxman",age:15}]
function checkage(obj){

    return obj.age>=18
}
var value=ele.filter(checkage)
console.log(value)
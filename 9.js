str="IBHUBS"
function position(str,ch)
{
    var i=str.indexOf(ch)
    return i;
}
value=position(str,'L')
//console.log(value)
function cal(value)
{
    switch(value){
        case -1:
            str="value not present"
            break
        case 0:
            str=str[value+1]
            break
        case str.length:
            str=str[value-1]
            break
        default:
            str=str[value-1]+""+str[value+1]
    }
    return str;
}
value=cal(value);
console.log(value)
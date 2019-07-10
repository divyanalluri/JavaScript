var ele={ 1:"one",2:"two"}
var dict={}
function reverse(ele)
{
    var x;
    for(x in ele)
    {
        dict[ele[x]]=x
    }
    return dict
}
var value=reverse(ele)
console.log(dict["one"])
console.log(value)
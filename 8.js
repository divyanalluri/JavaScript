var str="You Progress the nation flows"
var val=[]
var index
function long(str)
{
    str=str.split(" ")
    for(i=0;i<str.length;i++)
    {
        val[i]=str[i].length
    }
    index=0
    max=val[0]
    for(i=1;i<val.length;i++)
    {
        if(val[i]>max)
            {
                max=val[i]
                index=i;
            }
    }
    return str[index]
}
var value=long(str)
console.log(value)
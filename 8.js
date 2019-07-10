var str="You Progress the nation follows"
var val=[]
var index
function long(str)
{
    if(str.length==0)
    {
        return -1;
    }
    str=str.split(" ")
    max=str[0].length;
    index=0;
    for(i=1;i<str.length;i++)
    {
        if(str[i].length>max)
            {
                max=str[i].length
                index=i;
            }

    }
    return str[index]
}
var value=long(str)
console.log(value)
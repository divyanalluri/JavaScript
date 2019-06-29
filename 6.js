var arr=["a","a","b","c","d","d","a"]
var p={}
function findfre(arr)
{
    for(i=0;i<arr.length;i++)
    {
        if(!p[arr[i]])
        {
            p[arr[i]]=1
        }
        else
        {
            p[arr[i]]=p[arr[i]]+1
        }
    }
    return p;
}
var value=findfre(arr)
console.log(value)
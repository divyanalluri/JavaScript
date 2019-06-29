var ele=[1,2,"ram",{name:"sita"}]
var obj=0
var st=0;
var num=0;
function calculate(ele)
{
    for(i=0;i<ele.length;i++)
    {
        switch(typeof(ele[i]))
        {
            case 'number':
                num++;
                break;
            case 'string':
                st++;
                break;
            case 'object':
                obj++;
                break;
        }
        
    }
    return num+ ","+st+ ","+obj
}
var value=calculate(ele)
console.log(value)
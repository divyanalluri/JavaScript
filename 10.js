var ele=[{name:"john",id:1,gpa:9},{name:"Rick",id:2,gpa:7},{name:"thomas",id:1,gpa:4},,{name:"thomas",id:3,gpa:4}]
function rduplicates(ele,comp)
{
    const unique = ele
       .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => ele[e]).map(e => ele[e]);

   return unique; 
}
function calresult(unique)
{
    dist=0;
    fail=0;
    a=0;
    b=0;
    c=0;
    for(i=0;i<unique.length;i++)
    {
        if(unique[i].gpa>=8)
        {
            ch=1;
        }
        else if(unique[i].gpa>=7)
        {
            ch=2;
        }
        else if(unique[i].gpa>=7)
        {
            ch=3;
        }
        else if(unique[i].gpa>=7)
        {
            ch=4;
        }
        else
        {
            ch=5;
        }
        switch(ch)
         {
        case 1:
            dist=dist+1;
            break;
        case 2:
            a=a+1;
            break;
        case 3:
            b=b+1;
            break;
        case 4:
            c=c+1;
           break;
        case 5:
            fail=fail+1;
            break;
          }
    }
    return "Distinction: "+dist+"\n"+"A- Grade: "+a+"\n"+"B-grade: "+b+"\n"+"C-grade: "+c+"\n"+"Fail: "+fail
}
unique=rduplicates
(ele,'id')
//console.log(unique)
//console.log(unique[0].gpa)
result=calresult(unique)

console.log(result)
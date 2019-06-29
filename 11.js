var showRoom= {
                name:"showroom1",
                cars:[],
                addCar:function(obj){
                this.cars.push(obj)
            }
        }
var person= {
            firstname:"Divya",
            lastname:"Nalluri",
            carswishlist:[],
            ownedcars:[],
            addCarWishList:function(obj,style){ 
                val=0;
                for(i=0;i<this.carswishlist.length;i++)
                {
                    if(this.carswishlist[i].model==style)
                    {
                        val=1;
                        console.log("already in the wishlist")
                        break;
                    }
                }
                if(val==0)
                {
                    this.carswishlist.push(obj)
                }
            },
            addOwnedCar:function(showRoom,style)
            {
                val=0;
                for(i=0;i<showRoom.cars.length;i++){
                    if(showRoom.cars[i].model==style)
                    {
                       index=i;
                       val=1;
                        this.ownedcars.push(showRoom.cars[i])
                        console.log("car present")
                        showRoom.cars.splice(index,1)
                        break;
                    }
                    
                }
                if(val==0)
                {
                    console.log("Car not present currently")
                }
            }
        }
var obj={
            color:"black",
            speed:100,
            model:"duster",
            fulltype:"duster-type"
        }
showRoom.addCar(obj);
var obj={
    color:"black",
    speed:100,
    model:"audi",
    fulltype:"audi-type"
}
showRoom.addCar(obj);
var obj={
    color:"red",
    speed:120,
    model:"swift",
    fulltype:"swift-type"
}
showRoom.addCar(obj)

var obj={
      color:"red",
      speed:120,
      model:"xxx",
      fulltype:"xxx-type"
  }
person.addCarWishList(obj,'xxx')
console.log(person.carswishlist)

person.addCarWishList(obj,'xxx')
console.log(person.carswishlist)


var obj={
    color:"red",
    speed:120,
    model:"newcar",
    fulltype:"swift-type"
}
showRoom.addCar(obj)
console.log(showRoom.cars)
person.addOwnedCar(showRoom,'newcar')
console.log(showRoom.cars)
person.addOwnedCar(showRoom,'newcar')
console.log(showRoom.cars)
showRoom.addCar(obj)
person.addOwnedCar(showRoom,'newcar')
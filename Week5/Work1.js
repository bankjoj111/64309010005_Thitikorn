//ข้อ1
let order = [{
    "Customer" : "Mr.Lee", 
    "itemOrder" : ["A4 Paper","Ruler"],
    "QTY" : [5,2],
    "Price" : [120,25]
    },

    {
    "Customer" : "Mr.Yue", 
    "itemOrder" : ["FlashDrive","A4 Paper"],
    "QTY" : [2,3],
    "Price" : [130,120]
    },

    {
    "Customer" : "Mr.Thiti", 
    "itemOrder" : ["Ram","Monitor","Mouse"],
    "QTY" : [3,1,2],
    "Price" : [120,250,500]
    }]
    




for (let i = 0; i < order.length; i++)
{
    let sum = 0 ;
    for(let o=0; o < order[i].itemOrder.length; o++)
    {
        sum += order[i].QTY[o]*order[i].Price[o];

    }
    console.log(order[i].Customer,sum)
}
 

 
  
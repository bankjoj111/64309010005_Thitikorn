let obj = {
    "firstname" : "Jonh",
    "Lastname" : "Smith",
    "isAlive" : true,
    "age" : 25,
    "address" : {
        "streetAddress" : "21 2nd Street",
        "city": "Newyork",
        "state" : "NY",
        "postalcode" : "10021-3100"

    },
    "phoneNumber" : [{
        "type" : "home",
        "number" : "212 555-1234"
    },{
        "type" : "office",
        "number": "646 555-4567"
    },{
        "type":"mobile",
        "number" : "123 456-7890"
    }],
        "children" : [],
        "spouse" : null

};
console.log(obj.firstname + obj.Lastname)
console.log(obj.address.streetAddress)
console.log(obj.phoneNumber[1].number)
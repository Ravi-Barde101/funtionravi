const myobject = [{firstname : "ravi", lastname : "barde"},
                  { firstname : "raju", lastname : "verma"},
                  {firstname : "chitrank", lastname : "dixit"},
                  { firstname : "arpit", lastname : "shukla"}
                 ];

function ArrayObject(obj1){
     for(let i = 0; i < obj1.length; i++){
        console.log(obj1[i].firstname+"    "+obj1[i].lastname);
     }
}

ArrayObject(myobject);
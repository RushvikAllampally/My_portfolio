
    
        function add(){
        
            let a = Number(document.getElementById("a"));
            let b = Number(document.getElementById("b"));
            
            ans.innerHTML =  Number(a.Value) + Number(b.Value) ;
            //let c = parseInt(a.value)+parseInt(b.value) ;
            //document.getElementById("ans").value= c;
            // let c = document.getElementById("ans");
            //answer.textContent = c;

        }



// //spread
//  let arr1 = [1,2,3];
//  let arr2 = [...arr1,4]; //three dots and arr2 gives [1,2,3,4]
// //spread operator spreads elements
// console.log(arr2);


// let emp = {
//       name : "john",
//       age : 22,
//       address: {
//             zipcode : 121001,
//             city:"tokyo",
//       },
// };

// let emp2 = {...emp,lastname : "smith"};
// console.log(emp2);

// //destructuring : used to pull out different properties from an object  
// let { name ,age,address } = emp;
// let { city } =address;

// console.log(city);

//classes

class Animal{
      constructor(name,isapet){
            this.name = name;
            this.isapet = isapet;
      }
      describe(){
          return `Hello my name is ${this.name}` ; //*************/  
      }
      
}

//let animal1 = new Animal("puppy",true);
// console.log(animal1.describe());

class  dog extends Animal{
    constructor(name,breed){
          super(name, true);
          this.breed = breed ;
    }  
    speak(){
          return "bow bow bow";
    }
}
let dog1 = new dog("boxy","boxer");
console.log(dog1.describe());
/*

Test Life Cycls

*/

//1 - Init
var counter = 1

// 2- SetUp
export function setup(){
    console.log(`Inside SetUp - ${counter}`)
    return "My Name is ABCD"
}


//3 - Default
export default function(data){
    console.log(`Inside Default - ${counter} VU=${__VU} ITER=${__ITER} DATA is ${data}`)
    counter = counter + 1 // First VU reaches here
}

//4 - Teardown - gets called one default unction is over. it is caled only once
export function teardown(data){
    console.log(`Inside Teardown - ${counter} DAtA is ${data}`)

}

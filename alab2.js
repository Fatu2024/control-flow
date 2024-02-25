// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const radius = 5;
// const area = PI * radius * radius;

// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

//1a. Predict the plant growth after a specific number of weeks.
// let weeks = x
// let plants = 20
// // if (weeks > 0 ){
// //    console.log(plants * 2 **x)
// // }

//1b. Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

// console.log(area)  (area = 78.5375)
// console.log(area / .8) (capacity = 98 plants)
// let capacity= 98
// console.log(capacity * .8) (80% capacity = 78 plants)


// let plants = 20;
// let weeks = 3;

// let = (growth = plants * 2 ** weeks); {                  //week 1: 20 'plant some more'
//    console.log(growth);                                  //week 2: 80, 'you need to prune'
// }                                                        //week 3: 160, 'you need to prune'
// if (growth > 78) {                                      
//    console.log('you need to prune');
// } else if (growth < 39) {
//    console.log('plant some more');
// } else {
//    console.log('monitor')
// }

// 2a. The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// let weeks = 10
// let plants = 100
// if (weeks > 0 ){
//    console.log(plants * 2 **weeks)
// }
//answer = 102,400 plants

//space required:
// let plants = 102400
// const spacerequired = .8 * plants
// console.log(spacerequired)
// //space required = 81,920 sq. meters

// //2b. If the space remained circular, what would be the radius of this expanded garden?
// const PI = 3.1415;
// console.log(Math.sqrt(81920/PI))
//new radius ~ 161.48 sq meters.

// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. 
// If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, 
// throw a new error and log an appropriate message.

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius
let plant = 100
console.log(area)

let = (space = plant * .8);
   console.log(space)
try {
   if (space <= area){
      console.log('we have space');
   } else {
      throw "error - too many plants!";
   }
} catch (error) {
   console.log(error)
}

//total area = 78.5375
//area used by 100 plants = 80m, error too many plants!

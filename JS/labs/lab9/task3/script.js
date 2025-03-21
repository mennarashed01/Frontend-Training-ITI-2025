/*
Create constant project anonymous object after takeing 
properties names and values  from user  
(using object literals ) 
Note: names are projectId , projectName ,duration and 
printData which console.log all project data
*/

// Take input from the user 
let projectId = prompt("Enter Project ID:");
let projectName = prompt("Enter Project Name:");
let duration = prompt("Enter Project Duration:");

// Create a constant object with object literals
const project = {
    projectId, 
    projectName, 
    duration, 
    printData() {
        console.log(`Project ID: ${this.projectId}, Project Name: ${this.projectName}, Duration: ${this.duration}`);
    }
};

// Call printData method to display project details
project.printData();

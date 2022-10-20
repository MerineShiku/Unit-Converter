/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

 */

const convertBtn = document.getElementById("convert-btn")
const lengthConvert = document.getElementById("length-convert")
const volumeConvert = document.getElementById("volume-convert")
const massConvert = document.getElementById("mass-convert")
const quantity = document.getElementById("quantity")

 let metrics = quantity.value
   

convertBtn.addEventListener("click", function convert(){
    
    let metrics = quantity.value
    
    
    
let convertedLength =  `${metrics}metres = ${Number(metrics*3.281).toFixed(3)}feet | ${metrics}feet = ${Number(metrics/3.281).toFixed(3)}metres ` 
  
      
let convertedVolume =  `${metrics}liters = ${Number(metrics*0.264).toFixed(3)}gallons | ${metrics}gallons = ${Number(metrics/0.264).toFixed(3)}liters ` 
  
let convertedMass =  `${metrics}kilos = ${Number(metrics*2.204).toFixed(3)}pounds | ${metrics}pounds = ${Number(metrics/2.204).toFixed(3)}liters ` 


 lengthConvert.textContent =  convertedLength
 volumeConvert.textContent = convertedVolume 
 massConvert.textContent   =  convertedMass
 


})





    
    
    
    
    


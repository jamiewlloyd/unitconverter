const textInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-button");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

const length = {
   conversion: 3.281,
   metric: "meters",
   imperial: "feet"
}
const volume = {
   conversion: 0.264,
   metric: "liters",
   imperial: "gallons"
}
const mass = {
   conversion: 2.204,
   metric: "kilos",
   imperial: "pounds"
}

convertBtn.addEventListener("click", () => {
   if (textInput.innerText) {
      let baseUnits = Number(textInput.innerText);
      render(baseUnits, length)
      render(baseUnits, volume)
      render(baseUnits, mass)
   }
})

function render(units, measurement) {
   const paragraph = document.createElement("p");
   paragraph.setAttribute("class", "conversion");
   paragraph.textContent = `
   ${units} ${measurement.metric} = ${(units * measurement.conversion).toFixed(3)} ${measurement.imperial} 
   | 
   ${units} ${measurement.imperial} = ${(units / measurement.conversion).toFixed(3)} ${measurement.metric}`
   console.log(paragraph);
}
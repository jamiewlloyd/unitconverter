const textInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-button");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

const length = {
   conversion: 3.281,
   metric: "meters",
   imperial: "feet",
   parent: lengthEl
}
const volume = {
   conversion: 0.264,
   metric: "liters",
   imperial: "gallons",
   parent: volumeEl
}
const mass = {
   conversion: 2.204,
   metric: "kilos",
   imperial: "pounds",
   parent: massEl
}

convertBtn.addEventListener("click", () => {
   let baseUnits = Number(textInput.innerText);
   if (textInput.innerText) {
      if (Array.from(lengthEl.lastElementChild.classList).includes(`conversion`)) {
         clearResults()
      }
      render(baseUnits, length);
      render(baseUnits, volume);
      render(baseUnits, mass);
      textInput.innerText = ""
   } else {
      clearResults()
   }
})

function render(units, measurement) {
   const paragraph = document.createElement("p");
   paragraph.setAttribute("class", "conversion");
   paragraph.textContent = `
   ${units} ${measurement.metric} = ${(units * measurement.conversion).toFixed(3)} ${measurement.imperial} 
   | 
   ${units} ${measurement.imperial} = ${(units / measurement.conversion).toFixed(3)} ${measurement.metric}`
   measurement.parent.appendChild(paragraph);
}

function clearResults() {
   lengthEl.lastElementChild.remove()
   volumeEl.lastElementChild.remove()
   massEl.lastElementChild.remove()
}
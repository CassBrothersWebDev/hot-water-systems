// ****************
// * JSON DATA
// ****************

const energySourceData = {
  Electric: {
    iconBw:
      "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/flash.png?v=1693954926",
    buttonText: "View Type",
    subCategories: [
      {
        name: "Hot Water Storage Systems",
        iconBw:
          "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/storage.png?v=1693954926",
        buttonText: "View Sizes",
        size: {
          iconBw:
            "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/storage.png?v=1693954926",
          buttonText: "View",
          range: [
            "10L",
            "15L",
            "50L",
            "80L",
            "125L",
            "160L",
            "250L",
            "315L",
            "400L",
          ],
        },
      },
      {
        name: "Continuous Flow Systems",
        iconBw:
          "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/system.png?v=1693954926",
        buttonText: "View Sizes",
        size: {
          iconBw:
            "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/system.png?v=1693954926",
          buttonText: "View",
          range: ["50°C"],
        },
      },
      {
        name: "Heat Pumps",
        iconBw:
          "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/pump2.png?v=1693954926",
        buttonText: "View Sizes",
        size: {
          iconBw:
            "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/pump2.png?v=1693954926",
          buttonText: "View",
          range: ["250L", "302L", "315L"],
        },
      },
    ],
  },
  "Natural Gas": {
    iconBw:
      "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/gas-symbol.png?v=1693954926",
    buttonText: "View Type",
    subCategories: [
      {
        name: "Hot Water Storage Systems",
        iconBw:
          "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/storage.png",
        buttonText: "View Sizes",
        size: {
          iconBw:
            "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/storage.png?v=1693954926",
          buttonText: "View",
          range: ["130L", "160L", "340L"],
        },
      },
      {
        name: "Continuous Flow Systems",
        iconBw:
          "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/system.png?v=1693954926",
        buttonText: "View Sizes",
        size: {
          iconBw:
            "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/system.png?v=1693954926",
          buttonText: "View",
          range: ["26L", "32L"],
        },
      },
    ],
  },
  LPG: {
    iconBw:
      "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/gas-bottle.png?v=1693954926",
    buttonText: "View Type",
    subCategories: [
      {
        name: "Hot Water Storage Systems",
        iconBw:
          "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/storage.png?v=1693954926",
        buttonText: "View Sizes",
        size: {
          iconBw:
            "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/storage.png?v=1693954926",
          buttonText: "View",
          range: ["135L", "170L"],
        },
      },
      {
        name: "Continuous Flow Systems",
        iconBw:
          "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/system.png?v=1693954926",
        buttonText: "View Sizes",
        size: {
          iconBw:
            "https://cdn.shopify.com/s/files/1/0552/5808/7468/files/system.png?v=1693954926",
          buttonText: "View",
          range: ["26L", "32L"],
        },
      },
    ],
  },
};

// ================
// * JAVASCRIPT
// ================

// Get references to the step containers
const containers = {
  step1: document.getElementById("step1"),
  step2: document.getElementById("step2"),
  step3: document.getElementById("step3"),
};

// Get all panels
const panels = document.querySelectorAll(".hws-panel");

// Initialize a variable to store user selections
let selectedOptions = {
  step1: null,
  step2: null,
  step3: null,
};

// Display Step 1
populateStep(1);

function populateStep(step) {
  clearContainer(step);
  showPanel(step);

  switch (step) {
    case 1:
      displayStep1();
      break;
    case 2:
      displayStep2();
      break;
    case 3:
      displayStep3();
      break;
    default:
      break;
  }
}

function clearContainer(step) {
  const container = containers["step" + step];
  if (container) {
    container.innerHTML = "";
  }
}

function showPanel(step) {
  panels[step - 1].style.display = "block";
}

function displayStep1() {
  for (const option in energySourceData) {
    const sourceData = energySourceData[option];
    const container = containers["step1"];
    if (container) {
      createOption(option, sourceData, container, 1);
    }
  }
}

function displayStep2() {
  const step2Data = energySourceData[selectedOptions.step1].subCategories;
  const container = containers["step2"];
  if (container) {
    step2Data.forEach((data) => {
      createOption(data.name, data, container, 2);
    });
  }
}

function displayStep3() {
  const step2Data = energySourceData[selectedOptions.step1].subCategories;
  const step3Data = step2Data.find((obj) => obj.name === selectedOptions.step2);

  if (step3Data) {
    const step3Size = step3Data.size;
    const container = containers["step3"];
    if (container) {
      step3Size.range.forEach((size) => {
        if (size) {
          const isURL = true;
          createOption(size, step3Size, container, 3, isURL);
        }
      });
    }
  }
}

// Function to create an option
function createOption(name, data, container, stepNumber, isURL) {
  // Create Option Div
  const option = document.createElement("div");
  option.classList.add("option");
  option.setAttribute("data-value", name);

  // Create Icon
  const optionsIcon = document.createElement("div");
  optionsIcon.classList.add("options-icon");
  optionsIcon.innerHTML = `<img src="${data.iconBw}" alt="${name}">`;
  option.appendChild(optionsIcon);

  // Create Title
  const h3 = document.createElement("h3");
  h3.textContent = name;
  option.appendChild(h3);

  // Create Button
  const button = document.createElement("div");
  button.classList.add("options-btn");
  button.textContent = data.buttonText;
  // button.textContent = "View";

  // Add Event Listener Based On isURL Flag
  option.addEventListener("click", (event) => {
    const selectedOption = event.target.getAttribute("data-value");
    selectedOptions["step" + stepNumber] = selectedOption;

    if (isURL) {
      createURLOptionClickListener(option);
    } else {
      createOptionClickListener(stepNumber, option);
    }
  });
  option.appendChild(button);

  container.appendChild(option);
}

function createOptionClickListener(stepNumber, option) {
  clearPreviousSelections(stepNumber);
  setActiveClass(option);
  const nextStep = stepNumber + 1;
  populateStep(nextStep);
  scrollToStep(stepNumber);
}

function createURLOptionClickListener(option) {
  const baseUrl = "https://www.cassbrothers.com.au/collections/hot-water?";
  const urlLink = [];

  setActiveClass(option);

  for (const step in selectedOptions) {
    if (selectedOptions[step] !== null) {
      if (step === "step1") {
        const powerType =
          "pf_t_power_type=PowerType%3A+" + formatString(selectedOptions[step]);
        urlLink.push(powerType);
      }
      if (step === "step2") {
        if (selectedOptions["step2"] === "Hot Water Storage Systems") {
          const productType =
            "pf_t_product_type=Type%3A" + formatString(selectedOptions[step]);
          urlLink.push(productType);
        } else {
          const productType =
            "pf_t_product_type=Type%3A+" + formatString(selectedOptions[step]);
          urlLink.push(productType);
        }
      }
      if (step === "step3") {
        if (
          selectedOptions["step1"] === "Electric" &&
          selectedOptions["step2"] === "Continuous Flow Systems"
        ) {
          const electricSize =
            "pf_t_system_temperature=HOTWATERTEMP%3A+" +
            formatString(selectedOptions[step]);
          urlLink.push(electricSize);
        } else if (
          selectedOptions["step1"] === "Electric" &&
          selectedOptions["step2"] === "Heat Pumps"
        ) {
          const heatPumpSize =
            "pf_t_heat_pump_capacity_litres=HOTWATERHeatPumpCapacity%3A+" +
            formatString(selectedOptions[step]);
          urlLink.push(heatPumpSize);
        } else if (
          (selectedOptions["step1"] === "LPG" &&
            selectedOptions["step2"] === "Continuous Flow Systems") ||
          (selectedOptions["step1"] === "Natural Gas" &&
            selectedOptions["step2"] === "Continuous Flow Systems")
        ) {
          const gasSize =
            "pf_t_gas_lpg_system_size_litres=HOTWATERLitres%3A+" +
            formatString(selectedOptions[step]);
          urlLink.push(gasSize);
        } else {
          const size =
            "pf_t_storage_capacity_litres=HOTWATERStorageCapacity%3A+" +
            formatString(selectedOptions[step]);
          urlLink.push(size);
        }
      }
    }
  }
  const joinedParams = urlLink.join("&");
  const finalUrl = baseUrl + joinedParams;

  window.location.href = finalUrl;
}

function clearPreviousSelections(stepNumber) {
  for (let step = stepNumber + 1; step <= 3; step++) {
    selectedOptions["step" + step] = null;
    const container = containers["step" + step];
    if (container) {
      container.innerHTML = "";
    }
  }
}

function setActiveClass(element) {
  const parent = element.parentNode;
  const siblings = parent.querySelectorAll(".active");
  siblings.forEach((sibling) => {
    sibling.classList.remove("active");
  });

  element.classList.add("active");
}

function scrollToStep(stepNumber) {
  // Check if the screen width is greater than 640px (for desktop)
  if (window.innerWidth > 640) {
    const nextStepNumber = stepNumber + 1;
    const targetDiv = document.getElementById(
      "step" + nextStepNumber + "Header"
    );
    const headerHeight = 150; // Replace with your actual header height in pixels
    const targetPosition =
      targetDiv.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  } else {
    const nextStepNumber = stepNumber + 1;
    const targetDiv = document.getElementById(
      "step" + nextStepNumber + "Header"
    );
    const targetPosition =
      targetDiv.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

function formatString(inputString) {
  const words = inputString.split(" ");
  const formattedString = words.join("+");

  return formattedString;
}

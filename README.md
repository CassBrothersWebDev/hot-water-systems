# Hot Water System Selection

## Introduction

This interactive tool is designed to assist you in selecting the ideal hot water system for your needs through a simple 3-step process. Whether you're looking for electric, natural gas, or LPG systems, this webpage makes the selection process hassle-free.

## Getting Started

### Step 1: Energy Source Selection

- Click on the energy source that suits your requirements.
- Explore the available options such as `Electric`, `Natural Gas`, or `LPG`.

### Step 2: Product Type Selection

- Based on your chosen energy source, select the desired product type.
- For `Electric`, choose between `Hot Water Storage Systems`, `Continuous Flow Systems`, or `Heat Pumps`.
- For `Natural Gas` and `LPG`, select from `Hot Water Storage Systems` or `Continuous Flow Systems`.

### Step 3: Size/System Temperature Selection

- Specify the capacity or system temperature of your hot water system.
- For `Electric`:
  - View sizes for `Hot Water Storage Systems` and `Continuous Flow Systems`.
  - Explore capacities for Heat Pumps.
- For `Natural Gas` and `LPG`:
  - View sizes for both `Hot Water Storage Systems` and `Continuous Flow Systems`.

## HTML

The HTML part defines the structure of the webpage, including the container, headers, paragraphs, and div elements for each step.

- `hws-container`: The main container for the webpage.
- `hws-panel`: Each panel represents a step in the selection process.
- `hws-panel-header`: Headers for each panel, providing information about the step.
- `step1`, `step2`, `step3`: Div elements representing the containers for each step.

## JSON

The JSON file energySourceData is nested to represent different levels of information about hot water systems. Here's a summary of the nesting:

### Top Level: Energy Source

- Key: Energy sources like "Electric," "Natural Gas," and "LPG."
- Value: An object containing information about the energy source.

### Second Level: Energy Source Information

- Properties:
  - iconBw: URL to an icon representing the energy source.
  - buttonText: Text for a button associated with the energy source.
  - subCategories: An array containing information about subcategories of hot water systems under the energy source.

### Third Level: Subcategories

- Each subcategory is an object with properties:
  - name: Name of the subcategory.
  - iconBw: URL to an icon representing the subcategory.
  - buttonText: Text for a button associated with the subcategory.
  - size: An object containing information about the size or capacity of the hot water systems in that subcategory.

### Fourth Level: Size Information

- Properties:
  - iconBw: URL to an icon representing the size.
  - buttonText: Text for a button associated with the size.
  - range: An array of values representing the range of sizes available for the hot water systems in that subcategory.

So, the structure is hierarchical, with each level providing more detailed information about the hot water systems. The nesting allows for a clear organization of data, making it easy to access specific details about energy sources, subcategories, and sizes.

## JavaScript

### Initialization:

- The code starts by setting up references to step containers (`containers`), panels, and initializing a variable (`selectedOptions`) to store user selections.

### Displaying Step 1:

- The `populateStep` function is called to display Step 1.
- The `displayStep1` function populates Step 1 with options based on the data provided in the `energySourceData` object.

### User Interaction:

When a user clicks on an option, an event listener is triggered.
The selected option is stored in the `selectedOptions` variable.
The appropriate functions (`createURLOptionClickListener` or `createOptionClickListener`) are called based on the type of option.

### Populating Subsequent Steps:

- Steps 2 and 3 are populated dynamically based on the user's selection in the previous steps.
- `displayStep2` populates Step 2 based on the selected option in Step 1.
- `displayStep3` populates Step 3 based on the selected options in Steps 1 and 2.

### Option Creation:

- The `createOption` function is responsible for creating HTML elements representing an option (icon, title, button).
- Event listeners are attached to each option for user interaction.

### URL Generation:

- If the selected option requires redirecting to a URL (flag `isURL`), the `createURLOptionClickListener` function is called.
- This function generates a URL based on the selected options and redirects the user to that URL.

### Clearing Previous Selections:

- When a user changes their selection, previous selections and HTML content in subsequent steps are cleared.

### Styling and Scrolling:

- The `setActiveClass` function is used to highlight the selected option.
- The `scrollToStep` function scrolls to the next step, providing a smooth user experience.

### String Formatting:

- The `formatString` function replaces spaces in a string with '+' characters. This is used for constructing URL parameters.

In summary, the code manages a dynamic, step-wise selection process for hot water systems, providing a user-friendly interface and handling the generation of URLs based on user choices.

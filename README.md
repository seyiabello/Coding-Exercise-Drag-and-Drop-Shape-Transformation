# Coding Exercise: Drag and Drop Shape Transformation

Allows you to drag shapes from one quadrant to another. Each quadrant changes the shape once dropped there.

## Install and run

1. Clone the repository: git clone https://github.com/seyiabello/Coding-Exercise-Drag-and-Drop-Shape-Transformation

2. Open project folder then double click index.html in order for it to open in your browser  

## Running tests

1. Open index.html in browser
2. Right click on page and click Inspect
3. Click Console
4. Pass or fail message should be visible for each type of shape

## Stack

HTML, CSS and JavaScript
No Libraries or frameworks
Due to the fact it is a small project frameworks would cause complexity with little benfit. Drag and drop events plus createElement Ns is all that is required

## Trade-offs

- **No touch support.** Browsers native drag events are used for the drag and drop which would not work on touch screens. Would need a separate touch event handler to resolve this.
- **Global variable for drag state.** A plain variable stores 'draggedShape'. Other vode could overwrite it in a larger codebase causing bugs. A cleaner approach maybe contain it properly.
- **Fixed shape size.** Regardless of how big the quadrant is, every shape is 30x30px. Given more time I could potentially make shape read the size of the quadrant and scale itself up or down relative to the quadrant size.
- **No test framework.** Unit tests are running directly in browser console. Could upgrade to use a proper test runner like Jest.
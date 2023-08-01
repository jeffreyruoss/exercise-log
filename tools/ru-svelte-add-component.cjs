#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Get the name of the component from the command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a name for the component.');
  process.exit(1);
}

// Define the path for the new component file
const componentPath = path.join(__dirname, '../src/components/', `${componentName}.svelte`);

// The contents of the new Svelte component
const componentContent = `<script>\n\n</script>\n\n\n<style>\n\n</style>\n`;

// Create the new component file
fs.writeFile(componentPath, componentContent, err => {
  if (err) {
    console.error(`Error creating component: ${err}`);
  } else {
    console.log(`Component ${componentName}.svelte created successfully at ${componentPath}`);

    // Open the new component file in VS Code
    exec(`/Applications/Visual\\ Studio\\ Code\\ -\\ Insiders.app/Contents/Resources/app/bin/code ./src/components/${componentName}.svelte`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error opening component in VS Code: ${err}.`);
      }
    });
  }
});

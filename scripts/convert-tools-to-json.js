#!/usr/bin/env node
/**
 * Convert JavaScript tools array to valid JSON
 * Run: node scripts/convert-tools-to-json.js
 */

const fs = require('fs');
const path = require('path');

// Read the original script.js
const scriptPath = process.argv[2] || '/tmp/original_script.js';
const outputPath = process.argv[3] || path.join(__dirname, '../data/tools.json');

console.log('📖 Reading:', scriptPath);
const content = fs.readFileSync(scriptPath, 'utf8');

// Find the tools array
const start = content.indexOf('const aiToolsDatabase = [');
const arrayStart = content.indexOf('[', start);
const arrayEnd = content.indexOf('];', arrayStart) + 1;

if (start === -1 || arrayEnd === -1) {
    console.error('❌ Could not find aiToolsDatabase array');
    process.exit(1);
}

// Extract the array as JavaScript code
const toolsCode = content.substring(arrayStart, arrayEnd);

// Evaluate it as JavaScript (safe because it's our own code)
let tools;
try {
    tools = eval(toolsCode);
} catch (error) {
    console.error('❌ Failed to parse tools array:', error.message);
    process.exit(1);
}

// Convert to JSON
const jsonOutput = JSON.stringify(tools, null, 2);

// Write to file
fs.writeFileSync(outputPath, jsonOutput, 'utf8');

console.log('✅ Converted', tools.length, 'tools to valid JSON');
console.log('📝 Output:', outputPath);
console.log('📊 Size:', (jsonOutput.length / 1024).toFixed(1), 'KB');

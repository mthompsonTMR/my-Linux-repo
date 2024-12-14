//Create app.js. Implement an async function, loadConfig, that dynamically imports the theme.mjs and decides which theme function to call based on the current hour (e.g., light theme before 6 PM, dark theme afterward).

async function loadConfig() {

  const themeModule = await import('./theme.mjs');
  const currentHour = new Date().getHours();

  if (currentHour < 18) {
    themeModule.setLightTheme(); 
 
  } else {
    themeModule.setDarkTheme();
  }
  
 }
loadConfig();
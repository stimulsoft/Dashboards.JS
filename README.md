# Stimulsoft Dashboards.JS
Stimulsoft Dashboards.JS is a dashboards tool for Node.js and JavaScript applications. You can create new and load already created dashboards, easily connect to various databases, and export the dashboards to PDF, Excel, Data and other formats.

# How to install
Ceate a project folder and install Dashboards.JS module using the specified command:
```
npm install stimulsoft-dashboards-js
```

# How to load and save a dashboard
Create index.js file in the folder, and add the required code:
```js
// Stimulsoft dashboards module loading
var Stimulsoft = require('stimulsoft-dashboards-js');

// Loading fonts
Stimulsoft.Base.StiFontCollection.addOpentypeFontFile("Roboto-Black.ttf");

// Creating a new report object
var dashboard = Stimulsoft.Report.StiReport.createNewDashboard();

// Loading a dashboard template (MRT) into the dashboard object
dashboard.loadFile("dashboard1.mrt");

// Exporting the dashboard to PDF
dashboard.exportDocumentAsync((pdfData) => {

}

// Saving the dashboard object into a template file (MRT)
dashboard.saveFile("dashboard2.mrt");
```

# How to run
Open console and run index.js
```
node index
```

# Trial limitation
The free trial versions of Stimulsoft Dashboards.JS for Node.js are fully functional and will work for an unlimited time. The only limitation is a **Trial** watermark displayed on each dashboard page. To activate the product, you do not need to install a special version, just add a license key.

Read more about [Stimulsoft Dashboards.JS](https://www.stimulsoft.com/en/products/dashboards-js)

You can try the [Live Demo](http://demo.stimulsoft.com/#Js)

More information in the [Online Documentation](https://www.stimulsoft.com/en/documentation/online/programming-manual/index.html?reports_js.htm)

[Free Download](https://www.stimulsoft.com/en/downloads)

[License](LICENSE.md)

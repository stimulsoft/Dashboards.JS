# Stimulsoft Dashboards.JS
Stimulsoft Dashboards.JS is a full-featured tool used to create dashboards and reports for the JavaScript platform. To generate and view dashboards and reports, you need any web browser that supports HTML and JavaScript. It can work as Client-Side when no server side is required, as well as Server-Side that can be used on the server side.

# How to install
Ceate a project folder and install Dashboards.JS module using the specified command:
```
npm install stimulsoft-dashboards-js
```

# How to load and save a dashboard or a report
Create index.js file in the folder, and add the required code:
```js
// Stimulsoft dashboards and reports module loading
var Stimulsoft = require('stimulsoft-dashboards-js');

// Loading fonts
Stimulsoft.Base.StiFontCollection.addOpentypeFontFile("Roboto-Black.ttf");

// Creating a new report object
var dashboard = Stimulsoft.Report.StiReport.createNewDashboard();

// Loading a dashboard template (MRT) into the dashboard object
dashboard.loadFile("dashboard1.mrt");

// Exporting the dashboard to PDF
dashboard.exportDocumentAsync((pdfData) => {

});

// Saving the dashboard object into a template file (MRT)
dashboard.saveFile("dashboard2.mrt");


// Creating a new report object
var report = Stimulsoft.Report.StiReport.createNewReport();

// Loading a report template (MRT) into the report object
report.loadFile("report1.mrt");

// Renreding the report
report.renderAsync(() => {

});

// Exporting the report to PDF
report.exportDocumentAsync((pdfData) => {

});

// Saving the report object into a template file (MRT)
report.saveFile("report2.mrt");

// Saving the rendered report object into a document file (MDC)
report.saveDocumentFile("report3.mdc");
```

# How to run
Open console and run index.js
```
node index
```

# Integration
Our dashboards and report generator is excellent for working in any JavaScript application. Components are optimized to work with most popular platforms such as Node.js, Angular, React, Vue.js, and others.
For integration you need to install only one package from the NPM repository, or download the package from our website to a computer and add several scripts and css-styles to the project. All other things you can find in our, on pure JavaScript developed dashboards and report builder.

# Live Demo
We prepared many templates of dashboards and reports that you can explore and edit in our online demo. Choose the template you need, connect your data, and create rich reports and analytical dashboards – the solution is ready. Try the [Live Demo](http://demo.stimulsoft.com/#Js)

# More about product
In Stimulsoft Dashboards.JS, we have included a complete set of tools and components to design simple and complex dashboards and reports. Texts, images, charts, barcodes, many preset styles, grouping and filtering, interactive dashboards and reports, and much more. You can work with dashboards and reports and their components directly from the JavaScript code. Read more about [Stimulsoft Dashboards.JS](https://www.stimulsoft.com/en/products/dashboards-js).

# Video and Documentation
We provide User Manuals and Class References intended to give technical assistance to users of our dashboards and reporting tool. Find more information in the [Online Documentation](https://www.stimulsoft.com/en/documentation/online/programming-manual/index.html?reports_js.htm).

Also, we prepared many videos about the working of our software. Watch videos on our [YouTube channel](https://www.youtube.com/c/StimulsoftVideos/videos).

[Download](https://www.stimulsoft.com/en/downloads)

[License Info](https://github.com/stimulsoft/Dashboards.JS/blob/HEAD/LICENSE.md)

[Online Store](https://www.stimulsoft.com/online-store#embedded/dashboards/js)


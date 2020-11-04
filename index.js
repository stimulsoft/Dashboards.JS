var Stimulsoft = require('./Scripts/stimulsoft.dashboards').Stimulsoft;
Stimulsoft.ExternalLibrary.xmldoc = require('xmldoc');

Stimulsoft.System.NodeJs.useWebKit = false;
Stimulsoft.System.NodeJs.initialize();

module.exports = Stimulsoft;

module.exports={  "account-old": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Environments</a></h3><div class=\"listing active\"> <a href=\"/\">Dev</a> </div><div class=\"listing\"> <a href=\"/\">Staging</a> </div><div class=\"listing\"> <a href=\"/\">Production</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Servers</a></h3><div class=\"listing active\"> <a href=\"/\">Web Server 1</a> </div><div class=\"listing\"> <a href=\"/\">Web Server 2</a> </div><div class=\"listing\"> <a href=\"/\">Redis Server 1</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♟</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing\"> <a href=\"/\">Overview</a> </div><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Open Ports</a> </div></div></div><div class=\"span12\"><div class=\"row\"><div style=\"border-right:1px solid black; margin-right: -1px\" class=\"span6\"><h2>Most Memory</h2></div><div class=\"span6\"><h2>Most CPU</h2></div></div><div class=\"row\"><div class=\"span11 column\"><table class=\"zebra-striped\"><thead><tr><th>PID</th>" +
"";columns = "lstart ucomm mem cpu rss vsz utime time".split(" "); _$output = _$output  +
"";for(idx in columns){; _$output = _$output  +
"<th>" + 
this.escape(columns[idx].toUpperCase()) + 
"</th>" +
"";}; _$output = _$output  + 
"</tr></thead><tbody>" + 
"";for(pid in status.processes.lstart){
status.processes.lstart[pid] = new Date(Date.parse(status.processes.lstart[pid])).toDateString(); _$output = _$output  +
"<tr><td>" + 
this.escape(pid) + 
"</td>" +
"";for(idx in columns){; _$output = _$output  +
"<td>" + 
"";name = columns[idx]; _$output = _$output  +
this.escape((status.processes[name] && status.processes[name][pid])) + 
"</td>" +
"";}; _$output = _$output  + 
"</tr>" +
"";}; _$output = _$output  + 
"</tbody></table></div></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "account": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Environments</a></h3><div class=\"listing active\"> <a href=\"/\">Dev</a> </div><div class=\"listing\"> <a href=\"/\">Staging</a> </div><div class=\"listing\"> <a href=\"/\">Production</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Servers</a></h3><div class=\"listing active\"> <a href=\"/\">Web Server 1</a> </div><div class=\"listing\"> <a href=\"/\">Web Server 2</a> </div><div class=\"listing\"> <a href=\"/\">Redis Server 1</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♟</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing\"> <a href=\"/\">Overview</a> </div><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Open Ports</a> </div></div></div><div class=\"span12\"><div class=\"row\"><div style=\"border-right:1px solid black; margin-right: -1px\" class=\"span6\"><h2>Most Memory</h2></div><div class=\"span6\"><h2>Most CPU</h2></div></div><div class=\"row\"><div class=\"span11 column\"><table class=\"zebra-striped\"><thead><tr><th>PID</th>" +
"";columns = "lstart ucomm mem cpu rss vsz utime time".split(" "); _$output = _$output  +
"";for(idx in columns){; _$output = _$output  +
"<th>" + 
this.escape(columns[idx].toUpperCase()) + 
"</th>" +
"";}; _$output = _$output  + 
"</tr></thead><tbody>" + 
"";for(pid in status.processes.lstart){
status.processes.lstart[pid] = new Date(Date.parse(status.processes.lstart[pid])).toDateString(); _$output = _$output  +
"<tr><td>" + 
this.escape(pid) + 
"</td>" +
"";for(idx in columns){; _$output = _$output  +
"<td>" + 
"";name = columns[idx]; _$output = _$output  +
this.escape((status.processes[name] && status.processes[name][pid])) + 
"</td>" +
"";}; _$output = _$output  + 
"</tr>" +
"";}; _$output = _$output  + 
"</tbody></table></div></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "cpu": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<h3>% CPU Over Time</h3><div style=\"width:400px;height:200px\" class=\"flotGraph\"></div><div class=\"lastupdated\"></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "home": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"page-header\"> <h1> Dx-Dt.com <small> Process Monitoring </small>  </h1> </div><b>Server:" +
this.escape(serverId) +
" > PID:" +
this.escape(pid) + 
"</b><ul><li>Started at: " +
this.escape(start.toString()) +
".</li></ul><pre>" + 
this.renderLive("replace", "pidRow", process) + 
"</pre>" +
this.renderLive("simpleFlot", "cpu", cpu) +
this.renderLive("simpleFlot", "mem", mem);
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "layout": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">' +
"<html><head><link rel=\"stylesheet\" href=\"/app.css\" media=\"all\" /><script src=\"/socket.io/socket.io.js\"></script><script src=\"/transitive.js\"></script><script src=\"/templates.js\"></script>\n<script type=\"text/javascript\">\n//<![CDATA[\nTransitive = require(\"./transitive\");\nTransitive.Views.templates = require(\"./templates.js\");\njQuery = $;\nif(window.console){}else{\n  console = {};\n  console.log = function(){}\n}\n//]]>\n</script>\n<script src=\"/jquery.flot.js\"></script><script src=\"/jquery.flot.selection.js\"></script><!--[if lt IE 9]>" +
'<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>' +
"<![endif]--><title></title> dX-dT.com Change over time</head><body><div class=\"topbar\"><div class=\"fill\"><div class=\"container\"><h3><a href=\"#\" style=\"font-family:Monaco;font-weight:bold\">dx-dt</a></h3><ul><li><a href=\"/\">Home</a></li></ul><div class=\"sep\"></div><ul><li><a href=\"#masthead\">Staging</a></li><li><a>> </a></li><li><a href=\"/server\">Web Server 1</a></li><li><a>></a></li><li><a href=\"/about\">Processes</a></li></ul><ul class=\"secondary-nav\"><li><form><input placeholder=\"Search \" /></form></li><li style=\"margin-left:50px\" class=\"dropdown\"><a href=\"#toggle\" class=\"dropdown-toggle\">Account</a><ul class=\"dropdown-menu\"><li><a href=\"#\">secondary-link</a></li></ul></li></ul></div></div></div><div style=\"margin-top:40px\"></div><div class=\"container\">" + 
content + 
"</div>\n<script type=\"text/javascript\">\n//<![CDATA[\n" +
etc +
"\nTransitive.boot();\n//]]>\n</script>\n</body></html>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "mem": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<h3>% Memory</h3><div style=\"width:400px;height:200px\" class=\"flotGraph\"></div><div class=\"lastupdated\"></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "onThe": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"on-the\">I was rendered on the " +
this.escape(place) + 
"</div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "pidRow": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<b> Id: " +
this.escape( id ) +
"  </b>Stats: <span>" + 
this.escape(stats) + 
"</span> ";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "ping": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<p>Ping:</p><div style=\"width:600px;height:400px\" class=\"flotGraph\"></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "process": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Urls</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Network</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♟</div><a href=\"/\">mysql</a></h3><div class=\"listing\"> <a href=\"/\">Current</a> </div><div class=\"listing\"> <a href=\"/\">History</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div></div><div class=\"span12\"><div class=\"page-header\"><h1>mysql <small>PID: 42141 MEM%: 10.4 CPU%: 35.0</small> </h1></div><div class=\"row\"><div class=\"span6\"><h3>Memory</h3><div style=\"width:340px;height:200px;background-color:#666;\" class=\"graph\"></div></div><div class=\"span6\"><h3>CPU</h3><div style=\"width:340px;height:200px;background-color:#666;\" class=\"graph\"></div></div></div><div class=\"row\"><div class=\"span12\"><h2>Starting details</h2></div><div class=\"span4\"><h3>Started</h3></div><div class=\"span8\"><h3>Args</h3></div></div><div class=\"row\"><div class=\"span4\"><h3>Ports</h3></div></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "sample-data-ping": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output=this.renderLive("zoomableFlot", "ping", timeSeries);;
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "server": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Urls</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Network</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♟</div><a href=\"/\">mysql</a></h3><div class=\"listing\"> <a href=\"/\">Current</a> </div><div class=\"listing\"> <a href=\"/\">History</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div></div><div class=\"span12\"><div class=\"row\"><div style=\"border-right:1px solid black; margin-right: -1px\" class=\"span6\"><h2>Most Memory</h2></div><div class=\"span6\"><h2>Most CPU</h2></div></div><div class=\"row\"><div class=\"span11 column\"><table class=\"zebra-striped\"><thead><tr><th>PID</th>" +
"";columns = "lstart ucomm mem cpu rss vsz utime time".split(" "); _$output = _$output  +
"";for(idx in columns){; _$output = _$output  +
"<th>" + 
this.escape(columns[idx].toUpperCase()) + 
"</th>" +
"";}; _$output = _$output  + 
"</tr></thead><tbody>" + 
"";for(pid in status.processes.lstart){
status.processes.lstart[pid] = new Date(Date.parse(status.processes.lstart[pid])).toDateString(); _$output = _$output  +
"<tr><td>" + 
this.escape(pid) + 
"</td>" +
"";for(idx in columns){; _$output = _$output  +
"<td>" + 
"";name = columns[idx]; _$output = _$output  +
this.escape((status.processes[name] && status.processes[name][pid])) + 
"</td>" +
"";}; _$output = _$output  + 
"</tr>" +
"";}; _$output = _$output  + 
"</tbody></table></div></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "render": "function(k, v){ return this[k](v); }"
,  "liveRenders": {  "prepend": {  "name": "prepend"
,  "prepare": function (templateName, data){
    var itemsHtml = [];

    for(var i = data.length - 1; i >= 0; i--){
      itemsHtml.push(this.render(templateName, data[i]));
    }

    return itemsHtml.join();
  }
,  "update": function (event){
    this.element.prepend(Transitive.Views.render(this.templateName, event));
  }
}
,  "replace": {  "name": "replace"
,  "prepare": function (templateName, data){
    return this.render(templateName, data);
  }
,  "update": function (ev){
    this.element.html(Transitive.Views.render(this.templateName, ev));
  }
}
,  "simpleFlot": {  "name": "simpleFlot"
,  "prepare": function (templateName, data){
    return this.render(templateName, data);
  }
,  "init": function (initialData){
    this.data = initialData;
    console.log(this.data)

    var flotElm = this.element.find(".flotGraph");

    this.updatedElm = this.element.find(".lastupdated");

    var options = {
        shadowSize: 0,
        series: {
          lines: { show: true },
          points: { show: true }
        }, // drawing is faster without shadows
        yaxis: { min: 0, max: 100 },
        xaxis: {
          mode: "time",
          timeformat: "%M:%S"
        }
    };

    this.flot = $.plot(flotElm, [this.data], options);
    this.flot.draw();

  }
,  "update": function (event){
    console.log(event);
    this.data.push(event);
    if(this.data.length > 30){
      this.data.shift();
    }

    this.flot.setData([this.data]);
    this.flot.setupGrid();
    // since the axes don't change, we don't need to call plot.setupGrid()
    this.flot.draw();

    this.updatedElm.text((new Date).toString());
  }
}
,  "zoomableFlot": {  "name": "zoomableFlot"
,  "prepare": function (templateName, data){
    return this.render(templateName, data);
  }
,  "init": function (initialData){
    this.data = initialData;

    var flotElm = this.element.find(".flotGraph");

    this.updatedElm = this.element.find(".lastupdated");

    var options = {
        shadowSize: 0,
        series: {
          lines: { show: true },
          points: { show: false }
        }, // drawing is faster without shadows
        selection: { mode: "x" },
        yaxis: {},
        xaxis: {
          mode: "time",
          timeformat: "%M:%S"
        }
    };

    var len = this.data.length;

    if(len > 400){
      this.data = compressData(400, this.data);
      console.log(this.data)

    }

    this.flot = $.plot(flotElm, [this.data], options);
    this.flot.draw();


    function compressData(buckets, data){
      var result = [];
      var startTime = data[0][0];
      var endTime = data[data.length - 1][0];
      var windowSize = (endTime - startTime)/buckets;

      var bucketIdx=0, offset=0;
      var nextWindowBoundary, nextWindowStartTime;

      var currentItem=0, currentAvg, currentTotal, currentWindowSize, currentTime;

      for(bucketIdx = 0; bucketIdx < buckets; bucketIdx++){
        nextWindowStartTime = startTime + (bucketIdx + 1 ) * windowSize;

        currentTotal = 0;
        currentWindowSize = 0;
        for(; data[currentItem][0] < nextWindowStartTime; currentItem++){
          currentTotal = currentTotal + data[currentItem][1];
          currentWindowSize++;
        }

        if(currentWindowSize > 0 ){
          console.log(currentTotal);
          currentAverage = currentTotal / currentWindowSize;
          currentTime = startTime + bucketIdx * windowSize;
          result.push([currentTime, currentAverage]);
        }
      }
      return result;
    }
  }
,  "update": function (event){
    console.log(event);
    this.data.push(event);
    if(this.data.length > 30){
      this.data.shift();
    }

    this.flot.setData([this.data]);
    this.flot.setupGrid();
    // since the axes don't change, we don't need to call plot.setupGrid()
    this.flot.draw();

    this.updatedElm.text((new Date).toString());
  }
}
}
}
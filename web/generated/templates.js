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
,  "example": function anonymous(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="placeholder" style="width:100%;height:300px;"></div>\n\n\n\n<div id="overview" style="margin-left:50px;margin-top:20px;width:400px;height:50px"></div>\n\n<script id="source">\n$(function () {\n    var d = [[1196463600000, 0], [1196550000000, 0], [1196636400000, 0], [1196722800000, 77], [1196809200000, 3636], [1196895600000, 3575], [1196982000000, 2736], [1197068400000, 1086], [1197154800000, 676], [1197241200000, 1205], [1197327600000, 906], [1197414000000, 710], [1197500400000, 639], [1197586800000, 540], [1197673200000, 435], [1197759600000, 301], [1197846000000, 575], [1197932400000, 481], [1198018800000, 591], [1198105200000, 608], [1198191600000, 459], [1198278000000, 234], [1198364400000, 1352], [1198450800000, 686], [1198537200000, 279], [1198623600000, 449], [1198710000000, 468], [1198796400000, 392], [1198882800000, 282], [1198969200000, 208], [1199055600000, 229], [1199142000000, 177], [1199228400000, 374], [1199314800000, 436], [1199401200000, 404], [1199487600000, 253], [1199574000000, 218], [1199660400000, 476], [1199746800000, 462], [1199833200000, 448], [1199919600000, 442], [1200006000000, 403], [1200092400000, 204], [1200178800000, 194], [1200265200000, 327], [1200351600000, 374], [1200438000000, 507], [1200524400000, 546], [1200610800000, 482], [1200697200000, 283], [1200783600000, 221], [1200870000000, 483], [1200956400000, 523], [1201042800000, 528], [1201129200000, 483], [1201215600000, 452], [1201302000000, 270], [1201388400000, 222], [1201474800000, 439], [1201561200000, 559], [1201647600000, 521], [1201734000000, 477], [1201820400000, 442], [1201906800000, 252], [1201993200000, 236], [1202079600000, 525], [1202166000000, 477], [1202252400000, 386], [1202338800000, 409], [1202425200000, 408], [1202511600000, 237], [1202598000000, 193], [1202684400000, 357], [1202770800000, 414], [1202857200000, 393], [1202943600000, 353], [1203030000000, 364], [1203116400000, 215], [1203202800000, 214], [1203289200000, 356], [1203375600000, 399], [1203462000000, 334], [1203548400000, 348], [1203634800000, 243], [1203721200000, 126], [1203807600000, 157], [1203894000000, 288]];\n\n    // first correct the timestamps - they are recorded as the daily\n    // midnights in UTC+0100, but Flot always displays dates in UTC\n    // so we have to add one hour to hit the midnights in the plot\n    for (var i = 0; i < d.length; ++i)\n      d[i][0] += 60 * 60 * 1000;\n\n    // helper for returning the weekends in a period\n    function weekendAreas(axes) {\n        var markings = [];\n        var d = new Date(axes.xaxis.min);\n        // go to the first Saturday\n        d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))\n        d.setUTCSeconds(0);\n        d.setUTCMinutes(0);\n        d.setUTCHours(0);\n        var i = d.getTime();\n        do {\n            // when we don\'t set yaxis, the rectangle automatically\n            // extends to infinity upwards and downwards\n            markings.push({ xaxis: { from: i, to: i + 2 * 24 * 60 * 60 * 1000 } });\n            i += 7 * 24 * 60 * 60 * 1000;\n        } while (i < axes.xaxis.max);\n\n        return markings;\n    }\n    \n    var options = {\n        xaxis: { mode: "time", tickLength: 5 },\n        selection: { mode: "x" },\n        grid: { markings: weekendAreas }\n    };\n    \n    var plot = $.plot($("#placeholder"), [d], options);\n    \n    var overview = $.plot($("#overview"), [d], {\n        series: {\n            lines: { show: true, lineWidth: 1 },\n            shadowSize: 0\n        },\n        xaxis: { ticks: [], mode: "time" },\n        yaxis: { ticks: [], min: 0, autoscaleMargin: 0.1 },\n        selection: { mode: "x" }\n    });\n\n    // now connect the two\n    \n    $("#placeholder").bind("plotselected", function (event, ranges) {\n        // do the zooming\n        plot = $.plot($("#placeholder"), [d],\n                      $.extend(true, {}, options, {\n                          xaxis: { min: ranges.xaxis.from, max: ranges.xaxis.to }\n                      }));\n\n        // don\'t fire event on the overview to prevent eternal loop\n        overview.setSelection(ranges, true);\n    });\n    \n    $("#overview").bind("plotselected", function (event, ranges) {\n        plot.setSelection(ranges);\n    });\n});\n</script>');}return __p.join('');
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
,  "landing": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="";
this.crumbs = [["", "Features"], ["", "Pricing"], ["", "Documentation"], ["", "Contact"]]
; _$output = _$output  +
"<div class=\"home\"><div class=\"span16 top\"><div class=\"container\"><div class=\"row\"><div class=\"span8\"><!--%h1.everything --><!--Monitor, Alert, Graph, Resolve:--><!--%br--><!--Every Process. &nbsp;Every Port.--><!--%br--><!--Every--><!--%span.virtual> ( Virtual )--><!--Machine.--><h1 class=\"everything\"><br />Monitor Every Process,<br /> Port &amp; <span class=\"virtual\">( Virtual )</span> Machine</h1></div><div class=\"span8\"><img src=\"/bigdxdtwhite.png\" width=\"338px\" height=\"141px\" /></div></div></div></div><div style=\"margin-top:0;background-color:#333;height:1px;border:0\" class=\"app\"></div><div class=\"container main\"><div style=\"margin-bottom:20px; text-align:right\" class=\"row\"><div class=\"grayblock\"><div class=\"row\"><div class=\"span12\"><h2>Start monitoring your processes <b>before</b> there's a problem.</h2></div><div style=\"text-align:center\" class=\"span3\"><a href=\"/plans\" class=\"btn primary\"><big><b>30-day free trial »</b></big></a><br />  It takes a minute to set up.</div></div></div></div><div class=\"row\"><div class=\"span8\"><h1>Monitor <small>Everything. Automatically.</small> </h1><div class=\"row\"><div class=\"span8\"><h2>Every Process</h2><blockquote>What is pegging the CPU?<br /><br />Got a memory leak?<br /><br />When did this process start?</blockquote><p> <a href=\"/process-monitoring\">Process Monitoring</a> is like graphing the ouptut of `top` from multiple machines.</p><p>Are monit, upstart, god or OOM killing your Process?<br /> <a href=\"/search-terminated-processes\">Search terminated processes</a> to figure out why.</p></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"span4\"><div style=\"padding:0 0px\"><h2>Every Port</h2><blockquote>What ports are open?<br /><br />What process is listening on :80?<br /><br />What host is this bound to?</blockquote> <a href=\"/port-monitoring\">Port Monitoring</a> has the answers.<br /><h5>every port. no configuration.</h5></div></div><div class=\"span4\"><h2>Every Machine</h2><ul><li>Disk Space</li><li>Load Average</li><li>Free RAM</li></ul></div></div></div><div class=\"span8\"><h1>Resolve <small>10x faster</small> </h1>" +
this.render("example") + 
"</div></div></div></div>";
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
"<html><head><link rel=\"stylesheet\" href=\"/app.css?" +
this.escape(q) +
"\" media=\"all\" /><script src=\"/transitive.js?" +
this.escape(q) +
"\"></script><script src=\"/templates.js?" +
this.escape(q) +
"\"></script>\n<script type=\"text/javascript\">\n//<![CDATA[\nTransitive = require(\"./transitive\");\nTransitive.Views.templates = require(\"./templates.js\");\njQuery = $;\nif(window.console){}else{\n  console = {};\n  console.log = function(){}\n}\n//]]>\n</script>\n<script src=\"/jquery.flot.js?" +
this.escape(q) +
"\"></script><script src=\"/jquery.flot.selection.js?" +
this.escape(q) +
"\"></script><!--[if lt IE 9]>" +
'<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>' +
"<![endif]--><title></title> dX-dT.com Change over time</head><body><div class=\"topbar\"><div class=\"fill\"><div class=\"container\"><h3><a href=\"/\" class=\"logo\"><img src=\"/logotype-small.png\" alt=\"dx-dt\" /></a></h3><ul><li><a href=\"/\">Home</a></li>" +
(function () { if (this.crumbs) { return (
(function () { var __result__ = [], __key__, idx; for (__key__ in this.crumbs) { if (this.crumbs.hasOwnProperty(__key__)) { idx = this.crumbs[__key__]; __result__.push(
"<li><a class=\"skinny\">></a></li><li><a href=\"#masthead\">" + 
this.escape(idx) + 
"</a></li>"
); } } return __result__.join(""); }).call(this)
);} else { return ""; } }).call(this) + 
"</ul><ul class=\"secondary-nav\"><li><form><input class=\"search\" /></form></li><li style=\"margin-left:10px\" class=\"dropdown\"><a href=\"#toggle\" class=\"dropdown-toggle\">Account</a><ul class=\"dropdown-menu\"><li><a href=\"#\">secondary-link</a></li></ul></li></ul></div></div></div><div class=\"app\"></div><div class=\"container main\">" + 
content + 
"</div>\n<script type=\"text/javascript\">\n//<![CDATA[\n" +
etc +
"\nTransitive.boot();\n//]]>\n</script>\n</body></html>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "marketing": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">' +
"<html><head><link rel=\"stylesheet\" href=\"/app.css?" +
this.escape(q) +
"\" media=\"all\" /><script src=\"/transitive.js?" +
this.escape(q) +
"\"></script><script src=\"/templates.js?" +
this.escape(q) +
"\"></script>\n<script type=\"text/javascript\">\n//<![CDATA[\nTransitive = require(\"./transitive\");\nTransitive.Views.templates = require(\"./templates.js\");\njQuery = $;\nif(window.console){}else{\n  console = {};\n  console.log = function(){}\n}\n//]]>\n</script>\n<script src=\"/jquery.flot.js?" +
this.escape(q) +
"\"></script><script src=\"/jquery.flot.selection.js?" +
this.escape(q) +
"\"></script><!--[if lt IE 9]>" +
'<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>' +
"<![endif]--><title></title> dX-dT.com Change over time</head><body><div class=\"topbar\"><div class=\"fill\"><div class=\"container\"><h3><a href=\"#\" style=\"letter-spacing:3px;\"><img src=\"/logotype-small.png\" width=\"52px\" height=\"22px\" /></a></h3><ul>" + 
(function () { if (this.crumbs) { return (
(function () { var __result__ = [], __key__, idx; for (__key__ in this.crumbs) { if (this.crumbs.hasOwnProperty(__key__)) { idx = this.crumbs[__key__]; __result__.push(
"<li>" + 
"<a href=\"" + this.escape(idx[0]) + "\">" + 
this.escape(idx[1]) + 
"</a></li>"
); } } return __result__.join(""); }).call(this)
);} else { return ""; } }).call(this) + 
"</ul><ul class=\"secondary-nav\"><li><form><input placeholder=\"Username\" class=\"username\" /><input placeholder=\"Password\" type=\"password\" class=\"password\" /><a href=\"#toggle\" class=\"login\">Log In</a></form></li><li></li></ul></div></div></div><div style=\"margin-top:22px\" class=\"clear\">" + 
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
   var _$output="";
this.crumbs = ["Staging", "Web Server 1", "Processes"]
; _$output = _$output  +
"<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Urls</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Network</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♟</div><a href=\"/\">node</a></h3><div class=\"listing active\"> <a href=\"/\">Statistics</a> </div><div class=\"listing\"> <a href=\"/\">Ports (4)</a> </div><div class=\"listing\"> <a href=\"/\">Alerts</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div></div><div class=\"span12\"><div style=\"margin-bottom:3px;\" class=\"page-header\"><h1>node <small class=\"strong\">PID: 42141 &nbsp; Started: Mon Sep 12 7:58 PM UTC</small> </h1></div><div style=\"margin-bottom:17px\" class=\"code\"> <input style=\"width: 100%;\" value=\"node /usr/local/bin/restartr -c lessc -a public/lesscss/bootstrap.less -a public/app.css public/lesscss/bootstrap.less public/lesscss/dxdt.less public/lesscss/forms.less public/lesscss/patterns.less public/lesscss/preboot.less public/lesscss/reset.less public/lesscss/scaffolding.less public/lesscss/tables.less public/lesscss/type.less\" class=\"stealth\" /> </div><div class=\"row\"><div class=\"span12\"><div style=\"width:100%;height:300px;background-color:#666;color:white\" class=\"graph\">zoom view</div><div style=\"width:100%;height:75px;background-color:#666;margin-top:20px;color:white\" class=\"graph\">overview</div></div><div class=\"graph-options span4\"><h3>Stats</h3><ul class=\"unstyled\"><li> <input type=\"checkbox\" checked=\"checked\" /> Mem%</li><li> <input type=\"checkbox\" checked=\"checked\" /> CPU%</li><li> <input type=\"checkbox\" /> time</li><li> <input type=\"checkbox\" /> utime</li><li> <input type=\"checkbox\" /> rss</li><li> <input type=\"checkbox\" /> vsz</li></ul></div><div class=\"graph-options span4\"><h3>Annotate</h3><ul class=\"unstyled\"><li> <input type=\"checkbox\" checked=\"checked\" /> Process Notes</li><li> <input type=\"checkbox\" checked=\"checked\" /> Staging Notes</li><li> <input type=\"checkbox\" checked=\"checked\" /> Web Server 1 Notes</li></ul></div><div class=\"graph-options span4\"><h3>Additional Stats</h3><input type=\"text\" placeholder=\"server or environment stats\" class=\"search\" /></div></div><div class=\"row\"><div class=\"span12\"><h2>Events</h2><div class=\"row\"><div class=\"span4\"><h3>Wed Sep 14</h3></div><div class=\"span8\"><div class=\"alert-message\">9:22 AM UTC Began listening to port 3000</div></div></div><hr /><div class=\"row\"><div class=\"span4\"><h3>Mon Sep 12</h3></div><div class=\"span8\"><div class=\"alert-message success\">8:05 PM UTC CPU stayed below 80% for 2 Minutes</div><div class=\"alert-message error\">7:58 PM UTC CPU Exceeded 90%  for 2 Minutes</div><div class=\"alert-message\">2:22 PM UTC Process Started</div></div></div></div></div></div></div>";
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
   var _$output="<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Urls</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Network</a> </div><div class=\"listing\"> <a href=\"/\">Comments</a> </div></div></div><div class=\"span12\"><h1>Processes</h1><div class=\"row\"><div style=\"border-right:1px solid black; margin-right: -1px\" class=\"span6\"><h2>Most Memory</h2></div><div class=\"span6\"><h2>Most CPU</h2></div></div><div class=\"row\"><div class=\"span12 column\"><table class=\"zebra-striped\"><thead><tr><th>PID</th>" +
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
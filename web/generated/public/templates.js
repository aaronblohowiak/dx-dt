_browserifyRequire.modules["./templates.js"] = function () {
    var module = { exports : {} };
    var exports = module.exports;
    var __dirname = ".";
    var __filename = "./templates.js";
    
    var require = function (path) {
        return _browserifyRequire.fromFile("./templates.js", path);
    };
    
    (function () {
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
,  "environment/environment": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="";
this.crumbs = ["Staging"]
; _$output = _$output  +
"<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div></div><div class=\"span12\"><div class=\"page-header\"><h1>Staging <small class=\"strong\">1 Server</small> </h1></div><div class=\"row\"><div class=\"span12\"><h3>Find Servers, Processes, Ports &amp; Notes</h3><input type=\"text\" placeholder=\"server or environment stats\" class=\"search\" /></div></div><div class=\"vspace2\"></div><div class=\"row\"><div class=\"span12\"><h2>Servers</h2><div class=\"server-list\"> <span class=\"label success\">OK</span>  <a href=\"/server/123\">Web Server 1</a> abpmba.local<br /> <span class=\"label notice\">Recovered</span>  <a href=\"/server/123\">DB Server Master</a> ec2-wjn24jn5kj3n3<br /> <span class=\"label warning\">High Load</span>  <a href=\"/server/123\">DB Server Slave</a> ec2-wjn24jn5kj3n3abpmba.local</div></div></div><div class=\"vspace\"></div><div class=\"row\"><div class=\"span12\"><h2>Events</h2><div class=\"row\"><div class=\"span4\"><h3>Wed Sep 14</h3></div><div class=\"span8\"><div class=\"alert-message\">9:22 AM UTC Began listening to port 3000</div></div></div><hr /><div class=\"row\"><div class=\"span4\"><h3>Mon Sep 12</h3></div><div class=\"span8\"><div class=\"alert-message success\">8:05 PM UTC CPU stayed below 80% for 2 Minutes</div><div class=\"alert-message error\">7:58 PM UTC CPU Exceeded 90%  for 2 Minutes</div><div class=\"alert-message\">2:22 PM UTC Process Started</div></div></div></div></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "example": function anonymous(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<iframe width="420" height="243" src="http://www.youtube.com/embed/ZB5-r9km_eQ?rel=0" frameborder="0" allowfullscreen></iframe>\n<p>Watch the video to see dx-dt in action.</p>');}return __p.join('');
}
,  "home": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"page-header\"> <h1> dxdt.io <small> Process Monitoring </small>  </h1> </div><b>Server:" +
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
this.crumbs = [["", "Features"], ["", "Pricing"], ["", "Contact"], ["", "Documentation"]]
; _$output = _$output  +
"<div class=\"home\"><div class=\"span16 top\"><div class=\"container\"><div class=\"row\"><div class=\"span8\"><!--%h1.everything --><!--Monitor, Alert, Graph, Resolve:--><!--%br--><!--Every Process. &nbsp;Every Port.--><!--%br--><!--Every--><!--%span.virtual> ( Virtual )--><!--Machine.--><h1 class=\"everything\">Monitor Every Process,<br /> Port &amp; <span class=\"virtual\"></span> Machine.<br />No Configuration</h1></div><div class=\"span8\"><img src=\"/bigdxdtwhite.png\" width=\"338px\" height=\"141px\" /></div></div></div></div><div class=\"body container\"><div class=\"container\"><div style=\"margin-bottom:20px; text-align:center\" class=\"row\"><div class=\"grayblock\"><div class=\"row\"><div class=\"span12\"><h2><a href=\"/easiest-server-monitoring\">One-minute install</a>. Start collecting data <b>before</b> there's a problem.</h2></div><div style=\"text-align:center\" class=\"span3\"><a href=\"/plans\" class=\"btn primary\"><big><b>30-day free trial »</b></big></a></div></div></div></div></div><div class=\"container main\"><div class=\"row\"><div class=\"span8\"><div class=\"row\"><div style=\"border-bottom: 1px solid #f5f5f5; margin-bottom:10px;padding-bottom:10px; text-align:center\" class=\"span8\"><h2>No Configuration</h2><p>We have the  <a href=\"/easiest-server-monitoring\">easiest server monitoring</a> install process in the world.</p><p>Download & run a bash script on your server. That's it.</p><p>Your API key is included in the script so there is nothing to configure.</p></div><div class=\"clear\"></div></div><div class=\"row\"><div class=\"span4\"><h2>Every Process</h2><p>Monitor CPU, RAM and page faults per-process.</p><p> <a href=\"/process-monitoring\">Process Monitoring</a> is like graphing the ouptut of `top` from multiple machines.</p><p> <a href=\"/search-terminated-processes\">Search terminated processes</a> to figure out why monit, upstart, god  or OOM is killing your process.</p></div><div class=\"span4\"><div style=\"padding:0 0px\"><h2>Every Port</h2><p>List every open port across all of your machines at a glance.</p><p>See which process is listening on a given port.</p><p> <a href=\"/port-monitoring\">Port Monitoring</a> has the answers.</p></div></div></div><div style=\"margin-top:10px\" class=\"row\"><div class=\"span4\"><h2>Every Machine</h2><p>Monitor how the system is using RAM (processes, buffers, filesystem cache.)</p><p>Network Configuration</p><p>Load Average</p><p>Disk Usage over time</p></div><div class=\"span4\"><h2>Every Event</h2><p>We built Twitter for servers.  Search the unified event log for processes starting and stopping, memory getting gobbled up, ports opening and closing, and all the standard alerts.</p><p>Annotate any graph or machine.</p></div></div></div><div class=\"span8\"><h2>Debug Problems <small>10x faster</small> </h2>" +
this.render("example") + 
"</div></div></div></div></div>";
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
"<![endif]--><title>dxdt.io Change over time</title></head><body><div class=\"topbar\"><div class=\"fill\"><div class=\"container\"><h3><a href=\"/\" class=\"logo\"><img src=\"/logotype-small.png\" width=\"52px\" height=\"22px\" /></a></h3><ul><li><a href=\"/\">Home</a></li>" +
(function () { if (this.crumbs) { return (
(function () { var __result__ = [], __key__, idx; for (__key__ in this.crumbs) { if (this.crumbs.hasOwnProperty(__key__)) { idx = this.crumbs[__key__]; __result__.push(
"<li><a class=\"skinny\">></a></li><li><a href=\"#masthead\">" + 
this.escape(idx) + 
"</a></li>"
); } } return __result__.join(""); }).call(this)
);} else { return ""; } }).call(this) + 
"</ul><ul class=\"secondary-nav\"><li><form><input class=\"search\" /></form></li><li style=\"margin-left:10px\" class=\"dropdown\"><a href=\"#toggle\" class=\"dropdown-toggle\">Account</a><ul class=\"dropdown-menu\"><li><a href=\"#\">secondary-link</a></li></ul></li></ul></div></div></div><div class=\"app\"></div><div class=\"container main workspace\">" + 
content + 
"</div><center style=\"letter-spacing:1px\"><br /><br />&copy; 2011 <b>X</b>itive, Inc<br /><br /></center><div class=\"clear\"></div>\n<script type=\"text/javascript\">\n//<![CDATA[\n" +
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
"<html><head><title>dxdt.io Change Over Time</title><link rel=\"stylesheet\" href=\"/app.css?" +
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
"<![endif]--></head><body class=\"marketing\"><div class=\"topbar\"><div class=\"fill\"><div class=\"container\"><h3><a href=\"#\" style=\"letter-spacing:3px;\"><img src=\"/logotype-small.png\" width=\"52px\" height=\"22px\" /></a></h3><ul><li><a href=\"/features\">Features</a></li><li><a href=\"/plans\">Plans & Pricing</a></li><li><a href=\"/support\">Support</a></li><li><a href=\"/Documentation\">Documentation</a></li></ul><ul class=\"secondary-nav\"><li><form><input placeholder=\"Username\" class=\"username\" /><input placeholder=\"Password\" type=\"password\" class=\"password\" /><a href=\"#toggle\" class=\"login\">Log In</a></form></li><li></li></ul></div></div></div>" +
content +
"<center><br /><br />&copy; 2011 Xitive, LLC<br /><br /></center><div class=\"clear\"></div>\n<script type=\"text/javascript\">\n//<![CDATA[\n" +
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
"<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Urls</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Network</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♟</div><a href=\"/\">node</a></h3><div class=\"listing active\"> <a href=\"/\">metrics</a> </div><div class=\"listing\"> <a href=\"/\">Ports (4)</a> </div><div class=\"listing\"> <a href=\"/\">Alerts</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div></div><div class=\"span12\"><div style=\"margin-bottom:3px;\" class=\"page-header\"><h1>node <small class=\"strong\">PID: 42141 &nbsp; Started: Mon Sep 12 7:58 PM UTC</small> </h1></div><div style=\"margin-bottom:17px\" class=\"code\"> <input style=\"width: 100%;\" value=\"node /usr/local/bin/restartr -c lessc -a public/lesscss/bootstrap.less -a public/app.css public/lesscss/bootstrap.less public/lesscss/dxdt.less public/lesscss/forms.less public/lesscss/patterns.less public/lesscss/preboot.less public/lesscss/reset.less public/lesscss/scaffolding.less public/lesscss/tables.less public/lesscss/type.less\" class=\"stealth\" /> </div><div class=\"row\"><div class=\"span12\"><div style=\"width:100%;height:300px;background-color:#666;color:white\" class=\"graph\">zoom view</div><div style=\"width:100%;height:75px;background-color:#666;margin-top:20px;color:white\" class=\"graph\">overview</div></div><div class=\"graph-options span4\"><h3>Stats</h3><ul class=\"unstyled\"><li> <input type=\"checkbox\" checked=\"checked\" /> Mem%</li><li> <input type=\"checkbox\" checked=\"checked\" /> CPU%</li><li> <input type=\"checkbox\" /> time</li><li> <input type=\"checkbox\" /> utime</li><li> <input type=\"checkbox\" /> rss</li><li> <input type=\"checkbox\" /> vsz</li></ul></div><div class=\"graph-options span4\"><h3>Annotate</h3><ul class=\"unstyled\"><li> <input type=\"checkbox\" checked=\"checked\" /> Process Notes</li><li> <input type=\"checkbox\" checked=\"checked\" /> Web Server 1 Notes</li><li> <input type=\"checkbox\" checked=\"checked\" /> Staging Notes</li></ul></div><div class=\"graph-options span4\"><h3>Additional Stats</h3><input type=\"text\" placeholder=\"server or environment stats\" class=\"search\" /></div></div><div class=\"row\"><div class=\"span12\"><h2>Events</h2><div class=\"row\"><div class=\"span4\"><h3>Wed Sep 14</h3></div><div class=\"span8\"><div class=\"alert-message\">9:22 AM UTC Began listening to port 3000</div></div></div><hr /><div class=\"row\"><div class=\"span4\"><h3>Mon Sep 12</h3></div><div class=\"span8\"><div class=\"alert-message success\">8:05 PM UTC CPU stayed below 80% for 2 Minutes</div><div class=\"alert-message error\">7:58 PM UTC CPU Exceeded 90%  for 2 Minutes</div><div class=\"alert-message\">2:22 PM UTC Process Started</div></div></div></div></div></div></div>";
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
,  "server/ips": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<h2>IP Addresses</h2>" +
"";
var ipReg = /inet (\d+\.\d+\.\d+\.\d+)/g
var match, str;
str = ifconfig
do {
  match = ipReg.exec(str);
  if(match){
    str = str.substr(match.index + 1);
    ip = match[1];; _$output = _$output  +
this.escape(ip) +
"<br />" +
"";}
}while(match !== null); _$output = _$output ;
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "server/networking": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="";
this.crumbs = ["Staging", "Web Server 1", "Networking"]
; _$output = _$output  +
"<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/server/123\">Web Server 1</a></h3><div class=\"listing\"> <a href=\"/process\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">metrics</a> </div><div class=\"listing active\"> <a href=\"/\">Networking</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div></div><div class=\"span12\"><div class=\"page-header\"><h1>Web Server 1 - Networking <small class=\"strong\"></small> </h1></div><h2>hostname</h2>" +
this.escape(status.machine.hostname) +
"<div class=\"vspace\"></div><h2>Open Ports</h2>This hostname:port list shows you what ports are open and bound to a specific host.  If the host is \"*\", then that means the machine will accept connections on any host.  A host can be an ip address or localhost.<div class=\"vspace\"></div>" +
(function () { var __result__ = [], __key__, proc; for (__key__ in Object.keys(status.ports)) { if (Object.keys(status.ports).hasOwnProperty(__key__)) { proc = Object.keys(status.ports)[__key__]; __result__.push(
(function () { var __result__ = [], __key__, port; for (__key__ in status.ports[proc]) { if (status.ports[proc].hasOwnProperty(__key__)) { port = status.ports[proc][__key__]; __result__.push(
"<a href=\"" + this.escape("/processes/"+status.processes.ids[proc]) + "\">" + 
this.escape(port.host+":") +
this.escape(port.port) + 
"</a><br />"
); } } return __result__.join(""); }).call(this)
); } } return __result__.join(""); }).call(this) +
"<div class=\"vspace\"></div>" +
this.render("server/ips", {ifconfig: status.machine.ifconfig}) +
"<div class=\"vspace\"></div><h2>ifconfig -a</h2><pre>" + 
this.escape(status.machine.ifconfig) + 
"</pre></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "server/processes": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Urls</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div><div class=\"nav-category\"><h3><div class=\"ico\">♞</div><a href=\"/\">Web Server 1</a></h3><div class=\"listing active\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/\">CPU</a> </div><div class=\"listing\"> <a href=\"/\">Memory</a> </div><div class=\"listing\"> <a href=\"/\">Disk</a> </div><div class=\"listing\"> <a href=\"/\">Network</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div></div><div class=\"span12\"><h1>Processes</h1><div class=\"row\"><div style=\"border-right:1px solid black; margin-right: -1px\" class=\"span6\"><h2>Most Memory</h2></div><div class=\"span6\"><h2>Most CPU</h2></div></div><div class=\"row\"><div class=\"span12 column\"><table class=\"zebra-striped\"><thead><tr><th>PID</th>" +
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
,  "server/server": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="";
this.crumbs = ["Staging", "Web Server 1"]
; _$output = _$output  +
"<div class=\"row\"><div class=\"span4 leftnav\"><div class=\"nav-category\"><h3><div class=\"ico\">♛</div><a href=\"/\">Staging</a></h3><div class=\"listing active\"> <a href=\"/\">Servers</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div><div class=\"nav-category\"><h3 class=\"active\"><div class=\"ico\">♞</div><a href=\"/server/123\">Web Server 1</a></h3><div class=\"listing\"> <a href=\"/\">Metrics</a> </div><div class=\"listing\"> <a href=\"/\">Processes</a> </div><div class=\"listing\"> <a href=\"/server/123/networking\">Networking</a> </div><div class=\"listing\"> <a href=\"/\">Notes</a> </div></div></div><div class=\"span12\"><div class=\"page-header\"><h1>Web Server 1 <small class=\"strong\">" + 
this.escape(status.machine.hostname) + 
"</small> </h1></div><div class=\"row\"><div class=\"span6\"><h2>Processes</h2>See your top processes<br /><a href=\"/server/123/processes\">Processes</a></div><div class=\"span6\"><h2>Metrics</h2>Load AVG, Disk Usage<br /><a href=\"/server/123/metrics\">Metrics</a></div></div><div class=\"vspace\"></div><div class=\"row\"><div class=\"span6\"><h2>Networking</h2>Open ports, IP addresses, ifconfig<br /><a href=\"/server/123/networking\">Networking</a></div><div class=\"span6\"><h2>Notes</h2>Deploys, notes, changes &amp;etc.<br /><a href=\"/server/123/comments\">Notes</a></div></div><div class=\"vspace\"></div><div class=\"row\"><div class=\"span12\"><h2>Events</h2><div class=\"row\"><div class=\"span4\"><h3>Wed Sep 14</h3></div><div class=\"span8\"><div class=\"alert-message\">9:22 AM UTC Began listening to port 3000</div></div></div><hr /><div class=\"row\"><div class=\"span4\"><h3>Mon Sep 12</h3></div><div class=\"span8\"><div class=\"alert-message success\">8:05 PM UTC CPU stayed below 80% for 2 Minutes</div><div class=\"alert-message error\">7:58 PM UTC CPU Exceeded 90%  for 2 Minutes</div><div class=\"alert-message\">2:22 PM UTC Process Started</div></div></div></div></div></div></div>";
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
};
    }).call(module.exports);
    
    _browserifyRequire.modules["./templates.js"]._cached = module.exports;
    return module.exports;
};

[].forEach(function (a) {
    _browserifyRequire.modules[a] = _browserifyRequire.modules["./templates.js"];
});

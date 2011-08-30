_browserifyRequire.modules["./templates.js"] = function () {
    var module = { exports : {} };
    var exports = module.exports;
    var __dirname = ".";
    var __filename = "./templates.js";
    
    var require = function (path) {
        return _browserifyRequire.fromFile("./templates.js", path);
    };
    
    (function () {
        module.exports={  "cpu": function anonymous(locals) {
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
   var _$output="<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html><head><link rel=\"stylesheet\" href=\"/app.css\" media=\"all\" /><script src=\"/socket.io/socket.io.js\"></script><script src=\"/transitive.js\"></script><script src=\"/templates.js\"></script>\n<script type=\"text/javascript\">\n//<![CDATA[\nTransitive = require(\"./transitive\");\nTransitive.Views.templates = require(\"./templates.js\");\njQuery = $;\nif(window.console){}else{\n  console = {};\n  console.log = function(){}\n}\n//]]>\n</script>\n<script src=\"/jquery.flot.js\"></script><!--[if lt IE 9]>" +
'<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>' +
"<![endif]--><title></title> Dx-Dt.com Change over time</head><body><div class=\"topbar\"><div class=\"fill\"><div class=\"container\"><h3><a href=\"#\">Dx-Dt</a></h3><ul><li class=\"active\"><a href=\"#masthead\">Example Process (this server)</a></li><li><a href=\"/server\">Example server (this host)</a></li><li><a href=\"/about\">About</a></li></ul></div></div></div><div style=\"margin-top:40px\"></div><div class=\"container\">" + 
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
}
};
    }).call(module.exports);
    
    _browserifyRequire.modules["./templates.js"]._cached = module.exports;
    return module.exports;
};

[].forEach(function (a) {
    _browserifyRequire.modules[a] = _browserifyRequire.modules["./templates.js"];
});

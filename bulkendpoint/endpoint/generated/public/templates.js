_browserifyRequire.modules["./templates.js"] = function () {
    var module = { exports : {} };
    var exports = module.exports;
    var __dirname = ".";
    var __filename = "./templates.js";
    
    var require = function (path) {
        return _browserifyRequire.fromFile("./templates.js", path);
    };
    
    (function () {
        module.exports={  "home": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<h1>This is the home.</h1>" +
this.render("onThe", {place: "server"}) +
"<div id=\"target\"></div>\n<script type=\"text/javascript\">\n//<![CDATA[\n$(function(){\n  $(\"#target\").html(Transitive.Views.render(\"onThe\", {place: \"browser\"}));\n})\n//]]>\n</script>\n";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + this.escape(e.stack) + "</pre>\n";
  }
}
}
,  "layout": function anonymous(locals) {
with(locals || {}) {
  try {
   var _$output="<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html><head><script src=\"/socket.io/socket.io.js\"></script><script src=\"/transitive.js\"></script><script src=\"/templates.js\"></script>\n<script type=\"text/javascript\">\n//<![CDATA[\nTransitive = require(\"./transitive\");\nTransitive.Views.templates = require(\"./templates.js\");\n//]]>\n</script>\n<title>Change the title in layout.haml</title></head><body><div class=\"outer-wrapper\"><div class=\"inner-wrapper\"><div class=\"content\">" + 
content + 
"</div></div></div>\n<script type=\"text/javascript\">\n//<![CDATA[\n" +
etc +
"\nTransitive.boot();\n//]]>\n</script>\n</body></html>";
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
}
};
    }).call(module.exports);
    
    _browserifyRequire.modules["./templates.js"]._cached = module.exports;
    return module.exports;
};

[].forEach(function (a) {
    _browserifyRequire.modules[a] = _browserifyRequire.modules["./templates.js"];
});

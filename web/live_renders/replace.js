module.exports = {
  name: "replace",
  
  prepare: function(templateName, data){
    return this.render(templateName, data);
  },
  
  update: function(ev){
    this.element.html(Transitive.Views.render(this.templateName, ev));
  }
};

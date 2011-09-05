module.exports = {
  name: "zoomableFlot",

  prepare: function(templateName, data){
    return this.render(templateName, data);
  },

  init: function(initialData){
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
  },

  update: function(event){
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
};


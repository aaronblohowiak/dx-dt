processor = require("../process-async.js");

sys = require("sys");

assert = require("assert");

fs = require("fs");
/* To generate test_data:
 *
 * ./collect.sh test_data && mv test_data.tgz ../bulkendpoint/test/ && cd ../bulkendpoint/test/ && tar -xzf test_data.tgz && cd ../../agent
 *
 */

process.chdir("test_data");

processor(function(status){
  //console.log(JSON.stringify(status));

  assert.ok(status["filesystems"]["/dev/disk0s2"].free > 30);
  assert.equal(status["filesystems"]["/dev/disk0s2"].mounted, "/");

  function infoForProcess(status, pid){
    var processes = status.processes;
    return {
      id: status.machineid+"-"+pid.toString()+"-"+processes.lstart[pid].getTime().toString(),
      lstart: processes.lstart[pid],
      args: processes.args[pid],
      ucomm: processes.ucomm[pid],
      cpu: processes.cpu[pid],
      vsz: processes.vsz[pid],
      rss: processes.rss[pid],
      mem: processes.mem[pid],
      utime: processes.utime[pid],
      time: processes.time[pid],
      ports: status.ports[pid]
    };
  }

  pinfo = infoForProcess(status, 63420);

  assert.ok(pinfo.ucomm == "node");
  assert.ok(pinfo.mem == 0.1);
  assert.deepEqual(pinfo.ports, [{host:"*", port:"8080"}]);

  console.log(pinfo);
  console.log(status.machine);

  fs.writeFileSync("status-async.json", sys.inspect(status));
});



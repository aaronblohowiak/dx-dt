#!/usr/bin/env bash

###############################################################
#   __          __  ___
#  |  \ \_/ __ |  \  |
#  |__/ / \    |__/  |
#
###############################################################
# Machine-parseable process monitoring
###############################################################



###############################################################
# Begin critical section; exit if any line returns anything bad
###############################################################
set -e
###############################################################

if [ -n "$1" ]
then infodir="$1";
else infodir="stats_`date +%s`"; 
fi

process_dir="$infodir/processes"
sys_dir="$infodir/sys"

mkdir -p $infodir
mkdir $process_dir
mkdir $sys_dir


if command -v md5 &>/dev/null; 
  then hshcommand="md5"; #BSD
  else hshcommand="md5sum"; #LINUX
fi

if command -v vm_stat &>/dev/null;
  then  vmcommand="vm_stat"; #OSX/BSD 
  else  vmcommand="vmstat"; #LINUX
fi


# Generic Run a command and save stdout and stderr to files

function runAndRecordWithTime {
  # command directory basename
  /usr/bin/time -p bash -c "$1 1>$2/$3.stdout.txt 2>$2/$3.stderr.txt" 2> $2/$3.time.txt;
}

function runAndRecord {
  # command directory basename
  #  optionally include the time to run the command (expensive.)
  $1 > "$2/$3.stdout.txt" 2> "$2/$3.stderr.txt";
}

function log {
  # command directory
  runAndRecord "$1" "$2" "$1"
}


# Process monitoring functions
function runAndRecordProcess {
  # command basename
  runAndRecord "$1" "$process_dir" "$2"
}

# Utility function to get info about all the processes on the machine
# Note that we have to do this with multiple calls to ps because the output of `ps` is otherwise not machine parseable
pslist="ps -A -o pid -o"
function getInfo {
  # ps format string
  runAndRecordProcess "$pslist $1" $1
}

function getInfoPercent {
  # ps format string that will be prepended with %
  runAndRecordProcess "$pslist %$1" $1
}

###############################################################
# END critical section; exit if any line returns anything bad
###############################################################
set +e
###############################################################


getInfo lstart #Full start time
getInfo ucomm # simple name

getInfo args # full command name with args (unless ps is in "safe mode")

getInfo rss # resident size in Kbytes
getInfo vsz # resident size in Kbytes
getInfo utime # user CPU time
getInfo time # user + system CPU time

getInfoPercent cpu
getInfoPercent mem

#System-wide performance
log $vmcommand "$sys_dir"
log uptime "$sys_dir"
runAndRecordWithTime "df -k" "$sys_dir" df

runAndRecord "date +%s" "$sys_dir" date
runAndRecord "lsof -iTCP -sTCP:LISTEN -P -Fpn" "$sys_dir" lsoftcp

###############################################################
# Begin critical section; exit if any line returns anything bad
###############################################################
set -e
###############################################################

#Network info
log "hostname" "$sys_dir"
runAndRecord "ifconfig -a" "$sys_dir" ifconfig
net_configuration=`cat $sys_dir/ifconfig.stdout.txt`
echo "$net_configuration" > $sys_dir/ifconfig.txt

if test $MACHINE_ID
then machine_id=$MACHINE_ID
else #generate machine id from everything that looks like a MAC addresses present in network info
  machine_id=`echo "$net_configuration" |  grep ..:..:..:..:..:.. | $hshcommand | grep  '\w*' -o`
fi

echo "$machine_id" > $infodir/machineid;

outputfilename="$infodir.tgz"
tar -czf "$outputfilename" $infodir/
rm -rf $infodir/


#!/usr/bin/env bash

now="stats_`date +%s`"

process_dir="$now/processes"
sys_dir="$now/sys"

mkdir $now
mkdir $process_dir
mkdir $sys_dir

if command -v md5 &>/dev/null; 
  then machine_id=`ifconfig -a | grep ..:..:..:..:..:.. | md5`; 
  else machine_id=`ifconfig -a | grep ..:..:..:..:..:.. | md5sum`; 
fi 

echo $machine_id > $now/machineid

pslist="ps -A -o pid -o"

function getInfo {
  $pslist $1 > $process_dir/$1.stdout.txt &2> $process_dir/$1.stderr.txt
}


function getInfoPercent {
  $pslist %$1 > $process_dir/$1.stdout.txt &2> $process_dir/$1.stderr.txt
}

getInfo lstart
getInfo args
getInfo vsz
getInfo utime

getInfoPercent cpu
getInfoPercent mem

uptime > $sys_dir/uptime.txt

tar -cf $now.tar $now/

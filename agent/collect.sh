#!/usr/bin/env bash

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
  then machine_id=`ifconfig -a | grep ..:..:..:..:..:.. | md5 | grep '\w*' -o`; 
  else machine_id=`ifconfig -a | grep ..:..:..:..:..:.. | md5sum | grep '\w*' -o`; 
fi

echo $machine_id > $infodir/machineid

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

if command -v vm_stat &>/dev/null;
  then vm_stat > $sys_dir/vm_stat.stdout.txt &2> $sys_dir/vmstat.stderr.txt;
  else vmstat > $sys_dir/vmstat.stdout.txt &2> $sys_dir/vmstat.stderr.txt;
fi

uptime > $sys_dir/uptime.txt
df -k > $sys_dir/df.txt
echo `date` > $sys_dir/date

tar -czf $infodir.tgz $infodir/
rm -rf $infodir/


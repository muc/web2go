#!/bin/sh
UNAME="$(uname)"
ARGUMENTS=$*
DIRNAME=$1
if [ $UNAME = "Darwin" ] ; then
    OS="mac"
else
    OS="linux"
fi
shift

CMD="$DIRNAME/lib/jsdb/$OS/jsdb -path $DIRNAME $DIRNAME/src/Dispatch.js $ARGUMENTS"
$CMD

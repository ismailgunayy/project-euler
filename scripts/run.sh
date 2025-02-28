#!/bin/bash

mode=$1
number=$2

ts-node src/problems/problem-$number.ts $mode

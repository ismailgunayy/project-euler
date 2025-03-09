#!/bin/bash

mode=$1
number=$2

if [[ -n "$number" && "$number" =~ ^[0-9]+$ ]]; then
    padded_number=$(printf "%02d" $number)
    ts-node src/problems/problem-$padded_number.ts $mode
else
    echo "Error: Please provide a valid number as the argument."
fi

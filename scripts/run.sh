#!/bin/bash

mode=$1
number=$2

if [[ -n "$number" && "$number" =~ ^[0-9]+$ ]]; then
    ts-node src/problems/problem-$number.ts $mode
else
    echo "Error: Please provide a valid number as the argument."
fi

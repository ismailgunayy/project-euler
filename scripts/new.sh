#!/bin/bash

number=$1
padded_number=$(printf "%02d" $number)

yarn plop problem $number
zed "src/problems/problem-$padded_number.ts"

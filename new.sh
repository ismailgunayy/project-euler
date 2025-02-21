#!/bin/bash

number=$1

yarn plop problem -- $number
zed "src/problems/problem-$number.ts"

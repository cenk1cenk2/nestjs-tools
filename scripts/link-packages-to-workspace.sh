#!/bin/bash

if [ -z "$1" ]; then
  echo "First parameter should be the pwd of created workspace."
  exit 127
fi

if [ -z "$2" ]; then
  echo "Second parameter should be link | unlink"
  exit 127
fi

[ ! -d "$1" ] && echo "Directory $1 not found."

echo "Running against directory: $1"
cd $1

declare -a PACKAGES=(@cenk1cenk2/nestjs-emitter @cenk1cenk2/nestjs-transactions @cenk1cenk2/nestjs-utils)

for i in "${PACKAGES[@]}"; do
  yarn $2 $i
done

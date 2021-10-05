#!/bin/bash

if [ -z "$1" ]; then
	echo "Parameter should be link | unlink"
	exit 127
fi

if [ -z "$2" ]; then
	echo "Parameter should be the pwd of created workspace."
	exit 127
fi

[ ! -d "$2" ] && echo "Directory $2 not found."

echo "Running against directory: $2"
cd $1

declare -a PACKAGES=(@cenk1cenk2/nestjs-emitter @cenk1cenk2/nestjs-transactions @cenk1cenk2/nestjs-utils)

for i in "${PACKAGES[@]}"; do
	yarn $1 $i
done

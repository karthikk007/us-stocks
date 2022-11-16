import argparse
import sys
import os

from lib import buy_stocks

COMMAND_MODULES = [
    buy_stocks,
]

p = argparse.ArgumentParser(prog='us-stocks')
subparsers = p.add_subparsers(title='commands')

for command in COMMAND_MODULES:
    command.add_parser(subparsers)

p.set_defaults(func=lambda x: p.print_help())

args = p.parse_args()
args.func(args)

print("main")

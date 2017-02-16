#!/usr/bin/python

# Imports
import os

# Setup
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
branch = 'master'

# Pull Changes
def pull_git():
    os.system('cd ' + BASE_DIR + ' && git checkout ' + branch)
    os.system('cd ' + BASE_DIR + ' && git reset --hard HEAD')
    os.system('cd ' + BASE_DIR + ' && git pull origin ' + branch)

# Init
if __name__ == '__main__':
    pull_git()

#!/usr/bin/python

# Imports
import os

# Setup
repository = '/home2/capdist1/public_html/cap-website'
branch = 'master'

# Pull Changes
def pull_git():
    os.system('cd ' + repository + ' && git reset --hard HEAD')
    os.system('cd ' + repository + ' && git pull origin ' + branch)

# Init
if __name__ == '__main__':
    pull_git()

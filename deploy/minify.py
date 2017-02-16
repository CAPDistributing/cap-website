#!/usr/bin/python

# Imports
import os
import requests

# Setup
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Minify Functions
def minify_js():
    min_js = requests.post('https://javascript-minifier.com/raw', data=dict(input=open(BASE_DIR + '/scripts/app.js', 'r').read() )).text
    file = open(BASE_DIR + '/scripts/app.min.js', 'w')
    file.write(min_js)
    file.close()
    
def minify_css():
    min_css = requests.post('https://cssminifier.com/raw', data=dict(input=open(BASE_DIR + '/css/main.css', 'r').read() )).text
    file = open(BASE_DIR + '/css/main.min.css', 'w')
    file.write(min_css)
    file.close()

# Init
if __name__ == '__main__':
    minify_js()
    minify_css()



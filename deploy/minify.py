#!/usr/bin/python

# Imports
import os
import requests

# Setup
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Minify Functions
def minify_js():
    res_js = requests.post('https://javascript-minifier.com/raw', data=dict(input=open(BASE_DIR + '/scripts/app.js', 'r').read() ))
    if res_js.status_code != 200:
        print('Error in minify_js')
    else:
        min_js = res_js.text
        file = open(BASE_DIR + '/scripts/app.min.js', 'w')
        file.write(min_js)
        file.close()
    
def minify_css():
    res_css = requests.post('https://cssminifier.com/raw', data=dict(input=open(BASE_DIR + '/css/main.css', 'r').read() ))
    if res_css.status_code != 200:
        print('Error in minify_css')
    else:
        min_css = res_css.text
        file = open(BASE_DIR + '/css/main.min.css', 'w')
        file.write(min_css)
        file.close()

# Init
if __name__ == '__main__':
    minify_js()
    minify_css()

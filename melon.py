from flask import Flask, redirect, url_for, render_template
import requests
import json

app = Flask(__name__, static_url_path='/static') 

@app.route('/', methods=['GET'])
def trial():
    req = requests.get() # add api website link here
    print(req.content)
    return render_template("index.html")


if __name__=="__main__":
    app.debug = True
    app.run()

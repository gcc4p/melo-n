from flask import Flask, redirect, url_for, render_template

app = Flask(__name__, static_url_path='/static') 

@app.route('/')
def trial():
    return render_template("index.html")


if __name__=="__main__":
    app.debug = True
    app.run()

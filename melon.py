from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index1.html')

@app.route('/myfunction')
def my_function():
    result = "Hello, World!"  # Replace with your Python function's output
    return result

if __name__ == "__main__":
    app.run(debug=True)
#we will have a form that takes input and check if this input is a song name in our sample if it is
#we show the hidden div and show the mp3 player of this original song and the one generated with AI
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

#For songs dropdown
@app.route('/Songfunction', methods=['POST'])
def mySongFunction():
    output = request.form.get("name")
    print(output)
    #name = output["name"]
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
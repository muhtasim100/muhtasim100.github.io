# This code is from "Tech With Tim" on YouTube.

from flask import Flask

app = Flask(__name__)
# Initialises app

if __name__ == '__main__':
    app.run(debug = True)
# Runs on default port 5000.



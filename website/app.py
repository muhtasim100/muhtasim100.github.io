# This code is from "Tech With Tim" on YouTube.

from flask import Flask
from views import views

app = Flask(__name__)
# Initialises app

app.register_blueprint(views, url_prefix="/")


if __name__ == '__main__':
    app.run(debug = True)
# Runs on default port 5000.



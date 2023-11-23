from flask import Blueprint, render_template

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("home.html")

@views.route("/code")
def code():
    return render_template("code.html")

@views.route("/math")
def math():
    return render_template("math.html")

@views.route("/enquiry")
def enq():
    return render_template("enquire.html")
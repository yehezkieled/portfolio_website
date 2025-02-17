from flask import Blueprint, render_template

views = Blueprint("views", __name__)

@views.route("/")
def home():
    return render_template("home.html")

@views.route("/gomoku")
def gomoku():
    return render_template("gomoku.html")

@views.route("/project2")
def project2():
    return render_template("project2.html")

@views.route("/project3")
def project3():
    return render_template("project3.html")
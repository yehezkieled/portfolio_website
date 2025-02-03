from flask import Blueprint, render_template

views = Blueprint("views", __name__)

@views.route("/")
def home():
    return render_template("home.html")

# @views.route("/project/<name>")
# def project(name):
#     return f"You're viewing the : {name}"
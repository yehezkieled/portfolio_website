from flask import Blueprint, render_template

views = Blueprint("views", __name__)

@views.route("/")
def home():
    return render_template("home.html")

# try the ipynb
import subprocess
import os
notebook_dir = "./website/static/projects/notebooks"
for notebook in os.listdir(notebook_dir):
    notebook_path = os.path.join(notebook_dir, notebook)
    subprocess.run(["mercury", "add", notebook_path])

@views.route("/gomoku")
def gomoku():
    # subprocess.Popen(["mercury", "run", "website/static/projects/gomoku_project/gomoku.ipynb"])
    # subprocess.Popen(["mercury", "run"])
    return render_template("gomoku.html")
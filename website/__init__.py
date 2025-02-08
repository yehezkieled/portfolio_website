from flask import Flask
import subprocess
import webbrowser
import pyautogui

def close_mercury(url = "http://127.0.0.1:8000/"):
    # webbrowser.open(url)
    pyautogui.hotkey("ctrl", "w")


def create_app():
    app = Flask(__name__)

    from .views import views
    app.register_blueprint(views)

    subprocess.Popen(["mercury", "run"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    close_mercury()

    return app

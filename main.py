from website import create_app
from flask import Flask

app = create_app()


if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)
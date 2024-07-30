from flask import Flask,render_template, request,Blueprint
from flask.views import MethodView

# インスタンス生成
app06 = Flask(__name__)

# Blueprintの登録
from app06_2 import app06_2
app06.register_blueprint(app06_2)

@app06.route("/")
def index():
    return render_template("index.html")

@app06.route("/LoginSystem06")
def login():
    return render_template("LoginSystem06/login.html",msg='')

if __name__ == "__main__":
    # デバッグモード
    app06.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app06.run(host="0.0.0.0",port=5000)
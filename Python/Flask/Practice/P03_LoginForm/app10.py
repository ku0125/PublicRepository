from flask import Flask,render_template

# インスタンス生成
app = Flask(__name__)

# Blueprintの登録
from app210 import app2
app.register_blueprint(app2)

@app.route("/")
def index():
    return render_template("index10.html",msg="総合ページホームです。")

@app.route("/next")
def next():
    return render_template("index10.html",msg="ネクストです。")

# @app.route("/LoginSystem10/success")
# def abc():
#     return render_template("LoginSystem10/success.html")

if __name__ == "__main__":
    # デバッグモード
    app.debug = True
    # ホストとポートの指定
    # WEBサーバー実行
    app.run(port=8080)
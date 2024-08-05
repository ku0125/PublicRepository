from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

# インスタンス生成
app = Flask(__name__)
login_manager = LoginManager()


# Sessionのシークレットキー
app.secret_key = b"ku0125"

# SQLAlchemyの接続先サーバーの設定
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///DB.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Flaskインスタンスと連動設定
db = SQLAlchemy(app)

# DBへmodelの設定
from app.src.model import __all__

# DBの初期化
with app.app_context():
    db.create_all()

# Blueprintの登録


# Flaskの設定
from app import main  # noqa: E402, F401

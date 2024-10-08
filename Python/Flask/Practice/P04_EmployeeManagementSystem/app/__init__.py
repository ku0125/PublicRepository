import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

load_dotenv()

# インスタンス生成
app = Flask(__name__)

# Sessionのシークレットキー
app.secret_key = os.getenv("SECRET_KEY")

# SQLAlchemyの接続先サーバーの設定
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("POSTGRES_URL")

# Flaskインスタンスと連動設定
db = SQLAlchemy(app)

# DBへmodelの設定
from app.src.model.Department import Department
from app.src.model.Employee import Employee

# DBの初期化
with app.app_context():
    db.create_all()

# Blueprintの登録
from app.dep import dep

app.register_blueprint(dep)

# Flaskの設定
from app import main  # noqa: E402, F401

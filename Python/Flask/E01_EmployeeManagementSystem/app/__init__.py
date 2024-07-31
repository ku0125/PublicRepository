from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# インスタンス生成
app = Flask(__name__)
# Sessionのシークレットキー
app.secret_key = b"hit"
# SQLAlchemyの接続先サーバーの設定
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///EmployeeManagementSystem.db"
# Flaskインスタンスと連動設定
db = SQLAlchemy(app)

# DBへmodelの設定
# 順番を入れ替えるとimportエラーがでる
from app.src.model.Employee import Employee  # noqa: E402, F401
from app.src.model.Department import Department  # noqa: E402, F401

# DBの初期化
with app.app_context():
    db.create_all()

# Flaskの設定
from app import main  # noqa: E402, F401

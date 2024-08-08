from flask import Flask
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

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

# Flask-Migrate設定
migrate = Migrate(app, db)

# DBへmodelの設定
from app.src.model.models import (
    Cart,
    CartItem,
    PersonalInfo,
    Product,
    Transaction,
    User,
)

# DBの初期化
with app.app_context():
    db.create_all()

# Blueprintの登録
from app.Account import account
from app.CartManager import cart
from app.Login import login
from app.Shop import shop


app.register_blueprint(account)
app.register_blueprint(cart)
app.register_blueprint(login)
app.register_blueprint(shop)


# Flaskの設定
from app import main  # noqa: E402, F401

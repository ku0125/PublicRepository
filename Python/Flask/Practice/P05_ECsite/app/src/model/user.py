from app import db
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = "user_data"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )
    deleted = db.Column(db.Boolean, default=False)
    personal_info = db.relationship("PersonalInfo", backref="user", uselist=False)
    carts = db.relationship("Cart", backref="user", lazy=True)

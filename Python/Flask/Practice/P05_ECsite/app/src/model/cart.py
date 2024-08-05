from app import db
from datetime import datetime


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    deleted = db.Column(db.Boolean, default=False)
    cart_items = db.relationship("CartItem", backref="cart", lazy=True)
    transactions = db.relationship("Transaction", backref="cart", lazy=True)

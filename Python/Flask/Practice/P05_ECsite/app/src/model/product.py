from app import db


class Product(db.Model):
    __tablename__ = "product"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    image = db.Column(db.String(150), nullable=True)
    price = db.Column(db.Float, nullable=False)
    deleted = db.Column(db.Boolean, default=False)
    cart_items = db.relationship("CartItem", backref="product", lazy=True)

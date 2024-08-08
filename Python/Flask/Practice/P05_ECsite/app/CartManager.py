# - CartManager.py
#   - カート内参照
#     - 商品一覧
#     - 合計金額
#   - カートの商品削除
#   - 購入手続き

from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask.views import MethodView
from flask_login import current_user, login_required
from app import db, login_manager
from app.src.model.models import Cart, CartItem, Transaction

cart = Blueprint("cart", __name__, url_prefix="/cart")


@cart.route("/")
@login_required
def cart():
    cart = Cart.query.filter_by(user_id=current_user.id, deleted=False).first()
    if not cart:
        cart = Cart(user_id=current_user.id)
        db.session.add(cart)
        db.session.commit()
    cart_items = CartItem.query.filter_by(cart_id=cart.id, deleted=False).all()
    return render_template("cart.html", cart_items=cart_items)


# データ一覧の表示ページ
class AddCart(MethodView):
    # MethodViewでlogin_requiredを有効にするのにいる
    decorators = [login_required]

    def add_to_cart(product_id):
        cart = Cart.query.filter_by(user_id=current_user.id, deleted=False).first()
        if not cart:
            cart = Cart(user_id=current_user.id)
            db.session.add(cart)
            db.session.commit()
        cart_item = CartItem(cart_id=cart.id, product_id=product_id)
        db.session.add(cart_item)
        db.session.commit()
        return redirect(url_for("main.cart"))


@cart.route("/add_to_cart/<int:product_id>")
@login_required
def add_to_cart(product_id):
    cart = Cart.query.filter_by(user_id=current_user.id, deleted=False).first()
    if not cart:
        cart = Cart(user_id=current_user.id)
        db.session.add(cart)
        db.session.commit()
    cart_item = CartItem(cart_id=cart.id, product_id=product_id)
    db.session.add(cart_item)
    db.session.commit()
    return redirect(url_for("main.cart"))


@cart.route("/checkout")
@login_required
def checkout():
    cart = Cart.query.filter_by(user_id=current_user.id, deleted=False).first()
    if not cart:
        flash("No items in cart")
        return redirect(url_for("main.index"))
    transaction = Transaction(cart_id=cart.id, address=current_user.address)
    db.session.add(transaction)
    db.session.commit()
    flash("Checkout successful")
    return redirect(url_for("main.index"))

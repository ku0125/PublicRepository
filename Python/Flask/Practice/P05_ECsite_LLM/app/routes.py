from flask import Blueprint, flash, redirect, render_template, url_for
from flask_login import current_user, login_required, login_user, logout_user

from app.src.model.models import Cart, CartItem, Product, Transaction, User

from . import db, login_manager
from .forms import LoginForm, RegistrationForm

bp = Blueprint("main", __name__)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@bp.route("/")
def index():
    products = Product.query.filter_by(deleted=False).all()
    return render_template("index.html", products=products)


@bp.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and user.password == form.password.data:
            login_user(user)
            return redirect(url_for("main.index"))
        flash("Invalid username or password")
    return render_template("login.html", form=form)


@bp.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("main.index"))


@bp.route("/register", methods=["GET", "POST"])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, password=form.password.data)
        db.session.add(user)
        db.session.commit()
        flash("Registration successful")
        return redirect(url_for("main.login"))
    return render_template("register.html", form=form)


@bp.route("/cart")
@login_required
def cart():
    cart = Cart.query.filter_by(user_id=current_user.id, deleted=False).first()
    if not cart:
        cart = Cart(user_id=current_user.id)
        db.session.add(cart)
        db.session.commit()
    cart_items = CartItem.query.filter_by(cart_id=cart.id, deleted=False).all()
    return render_template("cart.html", cart_items=cart_items)


@bp.route("/add_to_cart/<int:product_id>")
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


@bp.route("/checkout")
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

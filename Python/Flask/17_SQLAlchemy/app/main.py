from flask import redirect, render_template, request, url_for

from app import ToDo, app, db


@app.route("/")
def index():
    dbses = db.session
    # 全件取得処理
    res = dbses.query(ToDo).all()
    dbses.close()
    return render_template("index.html", datas=res)


@app.route("/create", methods=["POST"])
def create():
    text = request.form.get("text")
    data = ToDo(text=text)
    dbses = db.session
    dbses.add(data)
    dbses.commit()
    return redirect(url_for("index"))

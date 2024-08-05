from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask.views import MethodView

from app import Department, db

dep = Blueprint("dep", __name__, url_prefix="/dep")


# 共通関数
def get_all_departments():
    return db.session.query(Department).all()


def get_department_by_id(id):
    return db.session.query(Department).get(id)


def set_department_select(department):
    department.deptSelect = {
        dept.id: {"name": dept.name, "selected": ""} for dept in get_all_departments()
    }
    try:
        department.deptSelect[department.id]["selected"] = "selected"
    except KeyError:
        pass


# データ一覧の表示ページ
@dep.route("/")
def index():
    res = db.session.query(Department).filter(Department.del_flag == 0).all()
    return render_template("index_dep.html", datas=res)


class DepartmentCreate(MethodView):
    def get(self):
        return render_template("DepartmentDetail.html", mode=1)

    def post(self):
        data = Department(
            name=request.form.get("name"), id=request.form.get("id"), del_flag=0
        )
        db.session.add(data)
        db.session.commit()
        flash("データの作成に成功しました。")
        return redirect(url_for("dep.index"))


dep.add_url_rule("/dCreate", view_func=DepartmentCreate.as_view("dCreate"))


@dep.route("/detail/<int:id>/")
def detail(id):
    res = get_department_by_id(id)
    set_department_select(res)
    return render_template("DepartmentDetail.html", data=res, mode=2)


class DepartmentUpdate(MethodView):
    def get(self, id):
        res = get_department_by_id(id)
        set_department_select(res)
        return render_template("DepartmentDetail.html", data=res, mode=3)

    def post(self, id):
        res = get_department_by_id(id)
        if res is None:
            flash("指定されたIDが存在しないので失敗しました。")
            return redirect(url_for("dep.index"))

        res.name = request.form.get("name")
        db.session.commit()
        flash("データの更新に成功しました。")
        return redirect(url_for("dep.index"))


dep.add_url_rule("/update/<int:id>/", view_func=DepartmentUpdate.as_view("dUpdate"))


@dep.route("/delete/<int:id>/")
def delete(id):
    res = get_department_by_id(id)
    if res is None:
        flash("指定されたIDが存在しないので失敗しました。")
        return redirect(url_for("dep.index"))

    res.del_flag = 1
    db.session.commit()
    flash("データの削除に成功しました。")
    return redirect(url_for("dep.index"))

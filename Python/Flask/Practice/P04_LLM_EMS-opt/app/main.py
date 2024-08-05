from flask import flash, redirect, render_template, request, url_for
from flask.views import MethodView

from app import Department, Employee, app, db


# 共通関数
def get_all_departments():
    return db.session.query(Department).filter(Department.del_flag == 0).all()


def get_employee_by_id(id):
    return db.session.query(Employee).get(id)


def set_gender_select(employee):
    employee.genderSelect = ["", "", ""]
    try:
        employee.genderSelect[employee.gender] = "selected"
    except TypeError:
        pass


def set_department_select(employee):
    employee.deptSelect = {
        dept.id: {"name": dept.name, "selected": ""} for dept in get_all_departments()
    }
    try:
        employee.deptSelect[employee.dept_id]["selected"] = "selected"
    except KeyError:
        pass


# データ一覧の表示ページ
@app.route("/")
def index():
    res = db.session.query(Employee).filter(Employee.del_flag == 0).all()
    return render_template("index.html", datas=res)


class EmployeeCreate(MethodView):
    def get(self):
        deptSelect = {
            dept.id: {"name": dept.name, "selected": ""}
            for dept in get_all_departments()
        }
        return render_template("EmployeeDetail.html", mode=1, deptSelect=deptSelect)

    def post(self):
        data = Employee(
            name=request.form.get("name"),
            age=request.form.get("age"),
            gender=request.form.get("gender"),
            dept_id=request.form.get("dept_id"),
            del_flag=0,
        )
        db.session.add(data)
        db.session.commit()
        flash("データの作成に成功しました。")
        return redirect(url_for("index"))


app.add_url_rule("/eCreate", view_func=EmployeeCreate.as_view("eCreate"))


@app.route("/detail/<int:id>/")
def detail(id):
    res = get_employee_by_id(id)
    set_gender_select(res)
    set_department_select(res)
    return render_template("EmployeeDetail.html", data=res, mode=2)


class EmployeeUpdate(MethodView):
    def get(self, id):
        res = get_employee_by_id(id)
        set_gender_select(res)
        set_department_select(res)
        return render_template("EmployeeDetail.html", data=res, mode=3)

    def post(self, id):
        res = get_employee_by_id(id)
        if res is None:
            flash("指定されたIDが存在しないので失敗しました。")
            return redirect(url_for("index"))

        res.name = request.form.get("name")
        res.age = request.form.get("age")
        res.gender = request.form.get("gender")
        res.dept_id = request.form.get("dept_id")
        db.session.commit()
        flash("データの更新に成功しました。")
        return redirect(url_for("index"))


app.add_url_rule("/update/<int:id>/", view_func=EmployeeUpdate.as_view("eUpdate"))


@app.route("/delete/<int:id>/")
def delete(id):
    res = get_employee_by_id(id)
    if res is None:
        flash("指定されたIDが存在しないので失敗しました。")
        return redirect(url_for("index"))

    res.del_flag = 1
    db.session.commit()
    flash("データの削除に成功しました。")
    return redirect(url_for("index"))

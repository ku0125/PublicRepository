from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask.views import MethodView

dep = Blueprint("dep", __name__, url_prefix="/dep")


# データ一覧の表示ページ
@dep.route("/")
def index():
    from app import Department, db

    dbses = db.session
    # 全件取得処理
    res = dbses.query(Department).filter(Department.del_flag == 0).all()
    return render_template("index_dep.html", datas=res)


class DepartmentCreate(MethodView):
    def get(self):
        # 新規登録モードでDepartmentDetail.htmlを呼び出す
        return render_template("DepartmentDetail.html", mode=1)

    def post(self):
        from app import Department, db

        name = request.form.get("name")
        id = request.form.get("id")
        # 論理削除フラグは0
        del_flag = 0
        data = Department(name=name, id=id, del_flag=del_flag)
        dbses = db.session
        dbses.add(data)
        dbses.commit()
        flash("データの作成に成功しました。")
        # 全件表示のページへリダイレクト
        return redirect(url_for("dep.index"))


dep.add_url_rule("/dCreate", view_func=DepartmentCreate.as_view("dCreate"))


@dep.route("/detail/<id>")
def detail(id):
    from app import Department, db

    dbses = db.session
    res = dbses.query(Department).get(id)

    # 部署IDのSelected処理
    res.deptSelect = {}
    depts = dbses.query(Department).all()
    for dept in depts:
        res.deptSelect[dept.id] = {"name": dept.name, "selected": ""}
    try:
        res.deptSelect[res.id]["selected"] = "selected"
    except KeyError:
        pass
    print(res.deptSelect)

    # 詳細モードでDepartmentDetail.htmlを呼び出す
    return render_template("DepartmentDetail.html", data=res, mode=2)


class DepartmentUpdate(MethodView):
    def get(self, id):
        from app import Department, db

        dbses = db.session
        res = dbses.query(Department).get(id)

        # 部署IDのSelect処理
        res.deptSelect = {}
        depts = dbses.query(Department).all()
        for dept in depts:
            res.deptSelect[dept.id] = {"name": dept.name, "selected": ""}
        # 部署IDのSelected処理
        try:
            res.deptSelect[res.id]["selected"] = "selected"
        except KeyError:
            pass
        print(res.deptSelect)

        # 更新モードでEmployeeDetail.htmlを呼び出す
        return render_template("DepartmentDetail.html", data=res, mode=3)

    def post(self, id):
        from app import Department, db

        name = request.form.get("name")
        id = request.form.get("id")
        data = Department(name=name, id=id)
        dbses = db.session
        res = dbses.query(Department).get(id)
        if res is None:
            # idが存在しない時
            flash("指定されたIDが存在しないので失敗しました。")
            return redirect(url_for("dep.index"))
        else:
            # データを更新する処理
            res.name = name
            res.id = id
            dbses.commit()
            flash("データの更新に成功しました。")
            # 全件表示のページへリダイレクト
            return redirect(url_for("dep.index"))


dep.add_url_rule("/update/<id>", view_func=DepartmentUpdate.as_view("dUpdate"))

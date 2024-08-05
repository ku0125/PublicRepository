from app import db


class Employee(db.Model):
    __tablename__ = "employee"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20))
    age = db.Column(db.Integer)
    gender = db.Column(db.Integer)
    del_flag = db.Column(db.Integer)
    dept_id = db.Column(db.Integer, db.ForeignKey("department.id"))

    def getData(self):
        dept_name = (
            "削除済み"
            if self.dept and self.dept.del_flag
            else self.dept.name
            if self.dept
            else None
        )
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "gender": self.gender,
            "dept_name": dept_name,
        }

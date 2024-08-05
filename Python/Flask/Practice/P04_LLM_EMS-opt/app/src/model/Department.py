from app import db


class Department(db.Model):
    __tablename__ = "department"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20))
    del_flag = db.Column(db.Integer)

    employees = db.relationship("Employee", backref="dept")

    def getData(self):
        return {"id": self.id, "name": self.name}

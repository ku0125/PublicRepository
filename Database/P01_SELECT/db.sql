CREATE TABLE personal_data(name TEXT,kana TEXT,age INTEGER,birthday TEXT,gender TEXT,email TEXT,tel TEXT,mobile_tel TEXT,zip TEXT,address TEXT,credit TEXT,valid TEXT)
DROP TABLE personal_data

.mode csv
.import Database\P01_SELECT\dummy.csv personal_data

DELETE FROM personal_data WHERE name = '氏名'

SELECT
    *
FROM
    personal_data
WHERE
    col1 = '%山%';
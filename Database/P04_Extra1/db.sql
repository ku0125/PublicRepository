-- 学生テーブル
-- 学籍番号,氏名,性別
-- 0001,長岡 一馬,男
-- 0002,中本 知佳,女
-- 0003,松本 義文,男
-- 0004,佐竹 友香,女
-- 試験結果テーブル
-- 学籍番号,教科,点数
-- 0001,国語,30
-- 0001,英語,30
-- 0002,国語,70
-- 0002,数学,80
-- 0003,理科,92
-- 0004,社会,90
-- 0004,理科,35
-- 0004,英語,22
-- テーブルを削除する
DROP TABLE product_master -- テーブルを作る
CREATE TABLE
    students (number TEXT, name TEXT, gender TEXT);

CREATE TABLE
    results (number TEXT, subject TEXT, score INTEGER);

-- データの挿入（追加）
INSERT INTO
    students
VALUES
    ('0001', '長岡 一馬', '男');

INSERT INTO
    students
VALUES
    ('0002', '中本 知佳', '女');

INSERT INTO
    students
VALUES
    ('0003', '松本 義文', '男');

INSERT INTO
    students
VALUES
    ('0004', '佐竹 友香', '女');

INSERT INTO
    results
VALUES
    ('0001', '国語', 30);

INSERT INTO
    results
VALUES
    ('0001', '英語', 30);

INSERT INTO
    results
VALUES
    ('0002', '国語', 70);

INSERT INTO
    results
VALUES
    ('0002', '数学', 80);

INSERT INTO
    results
VALUES
    ('0003', '理科', 92);

INSERT INTO
    results
VALUES
    ('0004', '社会', 90);

INSERT INTO
    results
VALUES
    ('0004', '理科', 35);

INSERT INTO
    results
VALUES
    ('0004', '英語', 22);

-- 性別が男である生徒の名前を一覧で表示せよ。
SELECT
    name AS 氏名
FROM
    students
WHERE
    gender = '男';

-- 1教科でも30点以下の点数を取った生徒の名前を一覧で表示せよ。
-- ただし、重複は許さないものとする。
SELECT
    students.name AS 氏名
FROM
    students
    INNER JOIN results ON students.number = results.number
WHERE
    score <= 30
GROUP BY
    students.name;

-- 性別ごとに、最も高かった試験の点数を表示せよ。
SELECT
    students.gender AS 性別,
    MAX(score) AS 最高得点
FROM
    students
    INNER JOIN results ON students.number = results.number
GROUP BY
    students.gender;

-- 教科ごとの試験の平均点が50点以下である教科を表示せよ。
SELECT
    results.subject AS 教科,
    AVG(results.score) AS 平均点
FROM
    students
    INNER JOIN results ON students.number = results.number
GROUP BY
    results.subject
HAVING
    AVG(results.score) <= 50;

-- 試験結果テーブルの点数の右に、その教科の平均点を表示せよ。
SELECT 
    r.subject AS 教科,
    r.score AS 点数,
    avg_scores.平均点
FROM 
    results r
JOIN (
    SELECT 
        subject,
        AVG(score) AS 平均点
    FROM 
        results
    GROUP BY 
        subject
) AS avg_scores ON r.subject = avg_scores.subject;
-- 社員テーブル
-- 社員番号,氏名,部署番号
-- 1,杉山 圭佑,1
-- 2,佐藤 結菜,2
-- 3,高橋 絵里,3
-- 4,早川 良太,2
-- 5,佐藤 一弥,3
-- 6,佐藤 優穂,1
-- テーブルを作る
CREATE TABLE
    employees (emp_id INTEGER, emp_name TEXT, dep_id INTEGER);

-- データの挿入（追加）
INSERT INTO
    employees
VALUES
    (1, '杉山 圭佑', 1);

INSERT INTO
    employees
VALUES
    (2, '佐藤 結菜', 2);

INSERT INTO
    employees
VALUES
    (3, '高橋 絵里', 3);

INSERT INTO
    employees
VALUES
    (4, '早川 良太', 2);

INSERT INTO
    employees
VALUES
    (5, '佐藤 一弥', 3);

INSERT INTO
    employees
VALUES
    (6, '佐藤 優穂', 1);

-- 部署テーブル
-- 部署番号,部署名
-- 1,営業部
-- 2,人事部
-- 3,経理部
-- テーブルを作る
CREATE TABLE
    department (dep_id INTEGER, dep_name TEXT);

-- データの挿入（追加）
INSERT INTO
    department
VALUES
    (1, '営業部');

INSERT INTO
    department
VALUES
    (2, '人事部');

INSERT INTO
    department
VALUES
    (3, '経理部');

-- 趣味テーブル
-- No,社員番号,趣味
-- 1,1,サッカー
-- 2,1,ドライブ
-- 3,1,映画鑑賞
-- 4,2,映画鑑賞
-- 5,2,旅行
-- 6,2,インスタ
-- 7,3,ゲーム
-- 8,4,ドライブ
-- 9,4,料理
-- 10,6,インスタ
-- 11,7,TikTok
-- テーブルを作る
CREATE TABLE
    hobbies (hob_id INTEGER, emp_id INTEGER, hobby TEXT);

-- データの挿入（追加）
-- .mode csv
-- .import C:\Users\hit0037\Documents\git\PublicRepository\Database\P05_Extra2\hobbies.csv hobbies

-- 趣味に映画鑑賞が含まれる社員の名前を一覧で表示せよ。
SELECT
    emp_name AS 氏名,
    hobby AS 趣味
FROM
    employees
    INNER JOIN hobbies ON employees.emp_id = hobbies.emp_id
WHERE
    hobby = '映画鑑賞';

-- 社員の趣味一覧を表示せよ(重複しない)
SELECT
    hobby AS 趣味
FROM
    employees
    INNER JOIN hobbies ON employees.emp_id = hobbies.emp_id
GROUP BY
    hobby;

-- -- 結合DB
SELECT
    emp_name AS 氏名,
    hobby AS 趣味,
    dep_name AS 部署
FROM
    employees
    LEFT JOIN hobbies ON employees.emp_id = hobbies.emp_id
    INNER JOIN department ON employees.dep_id = department.dep_id
GROUP BY
    emp_name
ORDER BY
    employees.emp_id;

-- 名字が佐藤である社員の、趣味の数を表示せよ。
SELECT
    emp_name,
    COUNT(hobby) AS 趣味の数
FROM
    employees
    LEFT JOIN hobbies ON employees.emp_id = hobbies.emp_id
WHERE
    emp_name LIKE '佐藤%'
GROUP BY
    emp_name;

-- 同じ趣味を持つ社員の一覧を表示せよ。
SELECT
    e1.emp_name AS 社員1,
    e2.emp_name AS 社員2,
    h1.hobby AS 共通の趣味
FROM
    hobbies AS h1
    JOIN hobbies AS h2 ON h1.hobby = h2.hobby
    JOIN employees AS e1 ON h1.emp_id = e1.emp_id
    JOIN employees AS e2 ON h2.emp_id = e2.emp_id
    -- 重複を避ける
    AND h1.emp_id < h2.emp_id
ORDER BY
    h1.hobby,
    e1.emp_name,
    e2.emp_name;
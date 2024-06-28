-- テーブル作成
CREATE TABLE
    player_data (
        number INTEGER,
        name TEXT,
        height INTEGER,
        weight INTEGER
    );

-- データの挿入（追加）
-- INSERT INTO
--     player_data
-- VALUES
--     ('A-123-Z', 'キッチンペーパー', '大阪府製紙', 248);
-- csvファイルのインポート（ターミナル）
-- .mode csv
-- .import C:\Users\hit0037\Documents\git\PublicRepository\Database\P02_Summary\player_data.csv player_data
-- csv見出しの削除
DELETE FROM player_data
WHERE
    name = '氏名';

-- 1. このクラスの人数を出力する
SELECT
    COUNT(*)
FROM
    player_data;

-- 2. このクラスの身長の平均値を出力する
SELECT
    AVG(height)
FROM
    player_data;

-- 3. 身長が一番高い人の名前と身長を出力する
SELECT
    name,
    MAX(height)
FROM
    player_data;

-- 4. 体重が一番軽い人の名前と体重を出力する
SELECT
    name,
    MIN(weight)
FROM
    player_data;

-- 5. 全員の体重の合計を出力する
SELECT
    SUM(weight)
FROM
    player_data;

-- 6. 各人のBMIを計算して、名前とBMI値を出力する
-- ※BMI = 体重 × 身長(m) × 身長(m)
-- SQLite POW POWER使える
-- 罠:SQLiteでは整数同士の除算は整数として結果が返ってくるため100を小数にして計算してやる必要がある
-- 0.01を掛けてもよい
SELECT
    name,
    weight / POW (height * 0.01, 2) AS BMI
FROM
    player_data;

SELECT
    name,
    POWER(height / 100.0, 2) AS height_squared
FROM
    player_data;

SELECT
    name,
    ROUND(weight / ((height / 100.0) * (height / 100.0)), 2) AS BMI
FROM
    player_data;

-- personal_dataテーブルの作成
CREATE TABLE
    personal_data (
        name TEXT,
        kana TEXT,
        age INTEGER,
        birthday TEXT,
        gender TEXT,
        email TEXT,
        tel TEXT,
        mobile_tel TEXT,
        zip TEXT,
        pref TEXT,
        address TEXT,
        credit TEXT,
        valid TEXT
    );

DROP TABLE personal_data;

-- csvファイルのインポート（ターミナル）
-- .mode csv
-- .import C:\Users\hit0037\Documents\git\PublicRepository\Database\P02_Summary\dummy02.csv personal_data
-- csv見出しの削除
DELETE FROM personal_data
WHERE
    name = '氏名';

-- 男性の平均年齢
SELECT
    avg(age) AS '平均年齢'
FROM
    personal_data
GROUP BY
    gender
HAVING
    gender = '男';

-- テーブル：personal_data
-- 東京都、大阪府、京都府、住んでいる人の人数を昇順にして表示
-- カラム：都道府県、人数
-- CASE WHEN THEN ENDを用いる
SELECT
    CASE
        WHEN address LIKE '東京都%' THEN '東京都'
        WHEN address LIKE '大阪府%' THEN '大阪府'
        WHEN address LIKE '京都府%' THEN '京都府'
    END AS '都道府県',
    COUNT(*) AS '人数'
FROM
    personal_data
WHERE
    address LIKE '東京都%'
    OR address LIKE '大阪府%'
    OR address LIKE '京都府%'
GROUP BY
    CASE
        WHEN address LIKE '東京都%' THEN '東京都'
        WHEN address LIKE '大阪府%' THEN '大阪府'
        WHEN address LIKE '京都府%' THEN '京都府'
    END
ORDER BY
    '人数' ASC;
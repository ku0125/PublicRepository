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
--     ('A-123-Z', 'キッチンペーパー', '大阪製紙', 248);
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
    avg(height)
FROM
    player_data;

-- 3. 身長が一番高い人の名前と身長を出力する
SELECT
    name,
    max(height)
FROM
    player_data;

-- 4. 体重が一番軽い人の名前と体重を出力する
SELECT
    name,
    min(weight)
FROM
    player_data;

-- 5. 全員の体重の合計を出力する
SELECT
    sum(weight)
FROM
    player_data;

-- 6. 各人のBMIを計算して、名前とBMI値を出力する
-- ※BMI = 体重 × 身長(m) × 身長(m)

-- SQLite POW POWER使える
-- 罠:SQLiteでは整数同士の除算は整数として結果が返ってくるため100を小数にして計算してやる必要がある
-- 0.01を掛けてもよい
SELECT
    name,
    weight / POW(height / 100.0, 2) AS BMI 
FROM
    player_data;

SELECT
    name,
    POWER(height / 100.0, 2) AS height_squared
FROM
    player_data;

    SELECT
    name,
    ROUND(weight / ((height/100.0) * (height/100.0)), 2) AS BMI
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
        address TEXT,
        credit TEXT,
        valid TEXT
    );

-- csvファイルのインポート（ターミナル）
-- .mode csv
-- .import C:\Users\hit0037\Documents\git\PublicRepository\Database\P01_SELECT\dummy.csv personal_data

-- csv見出しの削除
DELETE FROM personal_data
WHERE
    name = '氏名';


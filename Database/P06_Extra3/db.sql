-- ユーザーテーブル
-- フォロワーID,名前,メールアドレス,年齢
-- 1,もっくん,mokkun@example.com,19
-- 2,みみこ,mimiko@example.net,20
-- 3,さくら,sakura@example.com,31
-- 4,ひよこ,hiyoko@example1.jp,23
-- 5,すずき,suzuki@example.jp,28
-- テーブルを作る
CREATE TABLE
    users (
        user_id INTEGER,
        name TEXT,
        email TEXT,
        age INTEGER
    );

-- データの挿入（追加）
-- .mode csv
-- .import C:\Users\hit0037\Documents\git\PublicRepository\Database\P06_Extra3\users.csv users
-- フォローテーブル
-- フォロワーID,フォロイーID
-- 1,2
-- 1,3
-- 1,4
-- 1,5
-- 3,1
-- 3,2
-- 4,5
-- 5,1
-- 5,2
-- 5,3
-- 5,4
-- テーブルを作る
CREATE TABLE
    follows (follower_id INTEGER, followee_id INTEGER);

-- データの挿入（追加）
INSERT INTO
    follows
VALUES
    (1, 2);

INSERT INTO
    follows
VALUES
    (1, 3);

INSERT INTO
    follows
VALUES
    (1, 4);

INSERT INTO
    follows
VALUES
    (1, 5);

INSERT INTO
    follows
VALUES
    (3, 1);

INSERT INTO
    follows
VALUES
    (3, 2);

INSERT INTO
    follows
VALUES
    (4, 5);

INSERT INTO
    follows
VALUES
    (5, 1);

INSERT INTO
    follows
VALUES
    (5, 2);

INSERT INTO
    follows
VALUES
    (5, 3);

INSERT INTO
    follows
VALUES
    (5, 4);

-- 一覧表示
SELECT
    *
FROM
    users AS u1
    INNER JOIN users AS u2 ON u1.name = u2.name
    INNER JOIN follows AS f1 ON u1.user_id = f1.follower_id
    INNER JOIN follows AS f2 ON u1.user_id = f2.followee_id
ORDER BY
    u1.user_id;

-- 誰もフォローしていないユーザーの名前を表示せよ。
SELECT
    name
FROM
    users
WHERE
    user_id NOT IN (
        SELECT
            follower_id
        FROM
            follows
    );

-- 10代、20代、30代といった年代別にフォロー数の平均を表示せよ。
SELECT
    CASE
        WHEN age < 20 THEN '10代'
        -- WHEN age BETWEEN 20 AND 29 THEN '20代'
        -- WHEN age BETWEEN 30 AND 39 THEN '30代'
    END AS age_group,
    AVG(フォロー数) AS 平均フォロー数
FROM
    (
        -- 年齢別のフォロー数一覧
        SELECT
            age,
            COUNT(follows.followee_id) AS フォロー数
        FROM
            users
            LEFT JOIN follows ON user_id = follower_id
        GROUP BY
            user_id,
            age
    )
GROUP BY
    age_group;

-- 相互フォローしているユーザーのIDを表示せよ。
-- なお、重複は許さないものとする。
SELECT DISTINCT
    f1.follower_id AS user1_id,
    f1.followee_id AS user2_id
FROM
    follows f1
    JOIN follows f2 ON f1.follower_id = f2.followee_id
    AND f1.followee_id = f2.follower_id
    -- 重複を防ぐ
    AND f1.follower_id < f1.followee_id;
-- 並び替え（年齢を昇順）
SELECT
    *
FROM
    personal_data
ORDER BY
    age ASC;

-- 並び替え（年齢を降順）
SELECT
    *
FROM
    personal_data
ORDER BY
    age DESC;

-- グルーピング（性別）
SELECT
    *
FROM
    personal_data
GROUP BY
    gender;

SELECT
    gender,
    COUNT()
FROM
    personal_data
GROUP BY
    gender;

SELECT
    gender,
    COUNT()
FROM
    personal_data
GROUP BY
    gender
HAVING
    gender = 2;
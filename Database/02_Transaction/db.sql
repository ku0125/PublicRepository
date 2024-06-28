BEGIN;
UPDATE personal_data
SET
    gender = 1
WHERE
    gender = '男';

UPDATE personal_data
SET
    gender = 2
WHERE
    gender = '女';

UPDATE personal_data
SET
    gender = 3
WHERE
    gender = 'その他・不明';

SELECT
    *
FROM
    personal_data;

ROLLBACK;
COMMIT;
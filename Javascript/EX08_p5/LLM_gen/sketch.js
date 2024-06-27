// sketch.js
let player;
let bullets;
let enemies;

function setup() {
  createCanvas(800, 600);
  player = new Sprite(width / 2, height - 50, 50, 50);
  bullets = new Group();
  enemies = new Group();
  setInterval(createEnemy, 1000);
}

function draw() {
  background(220);

  // プレイヤーの移動
  if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 5;
  }

  // 弾の移動と削除
  for (let bullet of bullets) {
    if (bullet.position.y < 0) {
      bullet.remove();
    }
  }

  // 敵の移動と削除
  for (let enemy of enemies) {
    if (enemy.position.y > height) {
      enemy.remove();
    }
  }

  // 弾と敵の衝突判定
  for (let bullet of bullets) {
    for (let enemy of enemies) {
      if (bullet.overlap(enemy)) {
        bullet.remove();
        enemy.remove();
      }
    }
  }

  drawSprites();
}

function keyPressed() {
  if (key === ' ') {
    let bullet = new Sprite(player.position.x, player.position.y, 5, 10);
    bullet.velocity.y = -5;
    bullets.add(bullet);
  }
}

function createEnemy() {
  let enemy = new Sprite(random(width), 0, 40, 40);
  enemy.velocity.y = 2;
  enemies.add(enemy);
}

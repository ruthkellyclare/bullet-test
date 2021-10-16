namespace SpriteKind {
    export const good_guy_bullet = SpriteKind.create()
    export const bad_guy_bullet = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        `, mySprite, 0, -50)
    projectile.setKind(SpriteKind.good_guy_bullet)
})
sprites.onOverlap(SpriteKind.good_guy_bullet, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    level += 1
    for (let value of sprites.allOfKind(SpriteKind.bad_guy_bullet)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.good_guy_bullet)) {
        value.destroy()
    }
    game.splash("On to the next Level!!")
    badguy.setVelocity(20 * level, 0)
})
sprites.onOverlap(SpriteKind.bad_guy_bullet, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    game.splash("You lost a life")
    for (let value of sprites.allOfKind(SpriteKind.bad_guy_bullet)) {
        value.destroy()
    }
})
let projectile: Sprite = null
let level = 0
let badguy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
controller.moveSprite(mySprite)
mySprite.setPosition(80, 100)
badguy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 2 . . . . 2 . . . . . 2 . . . 
    . . 2 . . 2 2 . . . 2 2 . . . 2 
    . . 2 2 . 2 . 2 2 2 2 . . . 2 2 
    . . . 2 2 2 2 . . . 2 2 2 2 2 . 
    . . 2 2 . . . . . . . . 2 2 . . 
    . . 2 . . . . . . . . . . 2 . . 
    . . 2 . . . 2 . . . 2 . . 2 . . 
    . . 2 . . . . . . . . . . 2 . . 
    . . 2 . . . . . . . . . . 2 . . 
    . . 2 . . 2 2 2 2 . . . . . 2 . 
    . . 2 . 2 2 . . 2 2 . . . . 2 . 
    . . 2 . . . . . . 2 2 . . 2 2 . 
    . . 2 . . . . . . . . . . 2 . . 
    . . 2 . . . . . . . . . . 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    `, SpriteKind.Enemy)
badguy.setVelocity(20, 0)
badguy.setPosition(20, 20)
badguy.setBounceOnWall(true)
level = 1
info.setLife(7)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        `, badguy, 0, 50)
    projectile.setKind(SpriteKind.bad_guy_bullet)
})

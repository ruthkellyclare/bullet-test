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
    badguy.setVelocity(30 * level, 0)
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
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . a e e a . . . . . . 
    . . . . a e e e e e a . . . . . 
    . . . a e e e e e e e . . . . . 
    . . . e e e e e e e e a . . . . 
    . . a e e e e e e e e e . . . . 
    . . e e e e e e e e e e a . . . 
    . . e e e e e e e e e e f f f . 
    . . e e e e e e e e e e e 9 . . 
    . . e e e e e e e e e e e e e . 
    . . e . . . . . . . . . e . . . 
    `, SpriteKind.Player)
info.setScore(0)
controller.moveSprite(mySprite)
mySprite.setPosition(80, 100)
badguy = sprites.create(img`
    ......244444442.....
    .....24444444442....
    ....2a242444242a2...
    .15.2a644444446a2.51
    .2222aa6444446aa2222
    .1522aa6644466aa2251
    ...22aaa33333aaa22..
    ....2aaa33333aaa2...
    ....2aaa33333aaa2...
    .....2aa33333aa2....
    ......2aa333aa2.....
    ......422222224.....
    ......4.......4.....
    ......4.......4.....
    ......4.......4.....
    ....444.......44....
    `, SpriteKind.Enemy)
badguy.setVelocity(100, 0)
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

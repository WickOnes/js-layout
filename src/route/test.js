// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const Test = require('../class/test')

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('main', {
    // вказуємо назву контейнера
    name: 'main',
  })
  // ↑↑ сюди вводимо JSON дані
})
router.get('/blog', function (req, res) {
  // res.render генерує нам HTML сторінку
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('blog', {
    // вказуємо назву контейнера
    name: 'blog',
  })
  // ↑↑ сюди вводимо JSON дані
})
router.get('/community', function (req, res) {
  // res.render генерує нам HTML сторінку
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('community', {
    // вказуємо назву контейнера
    name: 'community',
  })
  // ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router

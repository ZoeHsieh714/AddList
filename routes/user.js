const express = require('express')
const router = express.Router()
const passport = require('passport')

// Include Controller
const userController = require('../controllers/user')
// Include server-side validation
const validation = require('../express-validator')

// システムルートの認証
// ログインページ
router.get('/login', userController.getLogin)

// ログインチェック
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

// 申し込むページ
router.get('/register', userController.getRegister)

// 申し込むチェック
router.post('/register', validation.registerUser, userController.postRegister)

// ログアウト
router.get('/logout', userController.getLogout)

module.exports = router
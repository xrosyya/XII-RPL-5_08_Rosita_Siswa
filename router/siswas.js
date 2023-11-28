const express = require('express')
const router = express.Router()

const siswacontroller = require('../controllers/siswa')

router.get('/siswas', siswacontroller.index)

router.get('/siswa/:id', siswacontroller.show)

  router.post('/siswa', siswacontroller.store)

  router.put('/siswa/update/:id', siswacontroller.update)

  router.delete('/siswa/delete/:id', siswacontroller.delete)

  module.exports = router
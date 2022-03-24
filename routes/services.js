          
const express = require("express")
const router = express.Router()
const servicesController = require("../controller/servicesController")


router.get('/', servicesController.list)
router.get('/:id', servicesController.listOne)
router.put('/:id', servicesController.edit)
router.post('/', servicesController.create)
router.delete('/:id', servicesController.del)

module.exports = router
const { Router } = require('express');
const router = Router();
const products = require ('../controllers/products');

//obtener producto por nombre
router.get('/byName', products.getProductByName);

//obtener todos productos
router.get('/', products.productsAll);

//crear productos
router.post('/create', products.createProduct);

//obtener detalle del producto
router.get('/:id', products.getProduct);

//actualizar producto
router.put('/:id', products.updateProduct);

//borrar producto
router.delete('/:id', products.deleteProduct);

//crear muchos productos
router.post('/create-many', products.createManyProducts);

router.post('/review', products.createProductReview);

// crear pregunta
router.post('/questions/:id', products.createProductQuestion);

// obtener preguntas por producto
router.get('/questions/:id', products.getProductQuestions);

module.exports = router;
import { categoryIdSchema } from './../schema/Category/categoryId.schema';
import { ensureDataIsValidMiddleware, ensureIdIsValidMiddleware } from './../Middlewares/ensureDataIsValid.middleware';
import { userAdminRigthsMiddleware } from './../Middlewares/Users/userRights.middleware';
import { createCategoryController, getCategoriesController, getPropertiesByCategories } from './../controllers/categories.controller';
import { Router } from 'express';

const categoriesRoutes = Router()

categoriesRoutes.post('', userAdminRigthsMiddleware, createCategoryController)
categoriesRoutes.get('', getCategoriesController)
categoriesRoutes.get('/:id/properties',ensureIdIsValidMiddleware(categoryIdSchema), getPropertiesByCategories)

export default categoriesRoutes
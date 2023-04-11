import { categoryIdSchema } from './../../schema/Category/categoryId.schema';
import AppDataSource from "../../data-source"
import { Category } from "../../entities/categoryEntity"
import { AppError } from '../../errors/AppError';

export const getPropertyByCategoryService = async (uuid: string) => {

    const categoryRepository = AppDataSource.getRepository(Category)

    const find = await categoryRepository.findOne({
        where: {
            id: uuid
        },
        relations: {
            properties: true
        }
    })

    if (!find) {
        throw new AppError("Category not found", 404)
    }

    return find
}
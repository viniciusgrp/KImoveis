import { IUser } from './../../interfaces/users/index';
import { User } from './../../entities/userEntity';
import { Properties } from './../../entities/propertiesEntity';
import { Schedules_Users } from './../../entities/schedules_users_properties_Entity';
import AppDataSource from '../../data-source';
import { IScheduleRequest } from './../../interfaces/schedules/index';

export const createScheduleService = async (data: IScheduleRequest) => {
    const scheduleRepo = AppDataSource.getRepository(Schedules_Users)
    const propertyRepo = AppDataSource.getRepository(Properties)
    const userRepo = AppDataSource.getRepository(User)
    const userQueryBuilder = userRepo.createQueryBuilder("user")
    const propertyQueryBuilder = userRepo.createQueryBuilder("properties")
    const userId = data.userId
    const propertyId = data.propertyId
    const user = await userQueryBuilder
    .where("user.id = :id OR user.name = :name", { id: 1, name: "Fabio Jr" }).getOne()
    
    

    const property = await propertyQueryBuilder.select("properties").where("properties.id = :id", { propertyId })

    console.log("USER", user)
    console.log("Property", property)
    return {}
}
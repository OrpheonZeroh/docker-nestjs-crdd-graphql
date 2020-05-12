import { Resolver,Query, Args, Mutation } from '@nestjs/graphql'
import { Users } from './user.entity'
import { inputUser } from './user.input'

@Resolver(()=> Users)
export class UserResolver {

    @Query(() => [Users])
    allUsers(){
        return Users.find()
    }

    @Query(()=> Users)
    oneUser(
        @Args('id') id: number
    ) {
        return Users.findOne(id)
    } 

    @Mutation(() => Users)
    async createUser(
        @Args('data') data: inputUser
    ) {
        const newUser = Users.create(data)
        console.log(newUser)
        return await newUser.save();
    }

    @Mutation(() => String)
    async updateUser(
        @Args('id') id: number,
        @Args('fields') fields: inputUser  
    ) {
        
        await Users.update(id, {...fields})
        return "Se ha actualizado correctamente";
    }

    @Mutation(() => String)
    async deleteUser(@Args('id') id: number) {
        await Users.delete(id);
        return "Se ha eliminado satisfactoriamente"
    }

}
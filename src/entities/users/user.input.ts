import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class inputUser {

    @Field()
    username: string

    @Field()
    lastname: string

    @Field()
    name: string

    @Field()
    password: string

    @Field()
    email: string
}
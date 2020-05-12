import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from './user.entity'
import { UserResolver } from './user.resolver'

@Module({
    imports: [
        TypeOrmModule.forFeature([ Users ])
    ],
    providers: [
        UserResolver
    ]
})

export class UserModule {}
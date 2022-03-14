import { Module } from '@nestjs/common';
import { Connection, getConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { async } from 'rxjs';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(
          await getConnectionOptions(
            process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
          ),
        ),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) {
      console.log('DB Connected Successfully!');
    }
  }
}

import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migration/*{.ts,.js}']
};

const dataSource = new DataSource(config);

export default dataSource;
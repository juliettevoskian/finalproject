import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ordersDB', 'root', '74896$Gn', {
    dialect: 'mysql',
    host: 'localhost',
    root: '3306',
})

export default sequelize
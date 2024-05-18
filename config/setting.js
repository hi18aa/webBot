module.exports = {
    sysName: 'recordbot',
    httpPort: 3114,
    // httpCors: [],
    tgToken: '7104608391:AAHh6KrT19T43uWtsv5X4KZy2PiDkOJHxK4',//靈
    tgToken2: '7128752647:AAG3_VrmIWyrEKZC9hOj2_do_j-eOwRDcVQ',//火靈
    mysqlConfig: {
        host: 'localhost',
        port: 3306,
        user: 'recordbot',
        password: 'recordbot',
        database: 'recordbot',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }

}
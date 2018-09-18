exports.development = {
    pw: process.env.development_password
};

exports.test = {
    pw: process.env.test_password
};

exports.production = {
    un: process.env.production_username,
    pw: process.env.production_password,
    database: process.env.production_database
};
module.exports = {
    //url: 'postgres://slmffrei:PtwVYFpDI_-idYldXvCCn5c4ptgO6fHm@tuffi.db.elephantsql.com:5432/slmffrei',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    username: 'postgres',
    password: '1234',
    database: 'sqlnode',
    define:{
        timestamps: true,
        underscored: true,
    },
};

// timestamps para criar as colunas created_at, updated_at
// underscored: true para criar as tabelas no padrão tb_teste
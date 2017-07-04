exports.up = function (knex, Promise) {

    return knex.schema.createTable('declarations', (table) => {

        table.increments('id').primary();
        table.string('uuid').notNullable();
        table.string('motherDetails').notNullable();
        table.string('fatherDetails').notNullable();
        table.string('childDetails').notNullable();
        table.string('status').notNullable();
        table.timestamps();
    })
        .createTable('locations', (table) => {

            table.increments('id').primary();
            table.string('placeOfDelivery').nullable();
            table.string('attendantAtBirth').nullable();
            table.string('hospitalName').nullable();
            table.string('addressLine1').notNullable();
            table.string('addressLine2').nullable();
            table.string('addressLine3').nullable();
            table.string('city').nullable();
            table.string('county').notNullable();
            table.string('state').notNullable();
            table.string('postalCode').nullable();
            table.integer('declaration_id').notNullable();
        })
        .createTable('documents', (table) => {

            table.increments('id').primary();
            table.string('uuid').notNullable();
            table.string('contentType').notNullable();
            table.binary('content').notNullable();
            table.integer('declaration_id').notNullable();
            table.timestamps();
        });
};

exports.down = function (knex, Promise) {

    return knex.schema.dropTable('declarations')
        .dropTable('locations')
        .dropTable('documents');
};

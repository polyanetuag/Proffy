import Knex from 'knex';

export async function up(knex: Knex) {              
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        table.integer('user_id')            // Relacionamentos dentro do knex
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')            
            .onDelete('CASCADE');           // Deleta todos os dados relacionados com o item excluido
    });
}

export async function down(knex: Knex) {            
    return knex.schema.dropTable('classes');
}
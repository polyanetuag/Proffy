import express from 'express'
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();                    //Módulo de roteamento do express

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {
    const {
        name, 
        avatar, 
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const trx = await db.transaction();         //Caso ocorra algum erro, irá desfazer todas as alterações

    try {
        const insertedUsersIds = await trx('users').insert({                      //Cadastrando o usuário
            name,
            avatar,
            whatsapp,
            bio,
        });
    
        const user_id = insertedUsersIds[0];
    
        const insertedClassesIds = await trx('classes').insert({                 //Cadastrando o id das aulas
            subject,
            cost,
            user_id,
        })
    
        const class_id = insertedClassesIds[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {        //Cadastrandi os horários
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to),
            };
        })
    
        await trx('class_schedule').insert(classSchedule);
    
        await trx.commit();                         //Somente aqui que irá atualizar as informações
    
        return response.status(201).send();

    } catch (err) {
        await trx.rollback();                       // Desfaz as alterações

        return response.status(400).json({
            error: 'Unexpected error while creating new class'
        })
    }
});

export default routes;
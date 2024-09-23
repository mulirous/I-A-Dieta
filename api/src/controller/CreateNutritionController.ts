import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from "../service/CreateNutritionService";

export interface  DataTypes {
    name:string,
    weight:string,
    height:string,
    age: string,
    gender: string,
    objective: string,
    level: string
};

class CreateNutritionController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        console.log("Rota chamada - Dentro do Controller\n");

        const { name, weight, height, age, gender, objective, level } = request.body as DataTypes;

        const create = new CreateNutritionService(); // Instancia a classe 

        const nutrition = await create.create({
            name,
            weight, 
            height, 
            age, 
            gender, 
            objective, 
            level
        }); // recebe o retorno da chamada do método

        reply.send(nutrition);
    }
}

export { CreateNutritionController };
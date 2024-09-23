import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionController } from "./controller/CreateNutritionController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/test", (request: FastifyRequest, reply: FastifyReply) => {
        console.log("Dentro da Rota de teste\n")
        reply.send({ message: "Rota chamada"})
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        console.log("Post feito\n");
        return new CreateNutritionController().handle(request, reply);
    })
};
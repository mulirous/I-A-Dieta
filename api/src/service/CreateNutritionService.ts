import { DataTypes } from "../controller/CreateNutritionController";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Importação das depêndencias para usar a IA

class CreateNutritionService {
    async create({ name, weight, height, age, gender, objective, level } : DataTypes) {
        try {
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const response = await model.generateContent(`Crie uma dieta completa para uma pessoa com nome: ${name} do sexo ${gender} com peso atual: ${weight}kg, altura: ${height}, idade: ${age} anos e com foco e objetivo em ${objective}, atualmente nível de atividade: ${level} e adicione a quantidade de calorias de cada alimento e ignore qualquer outro parametro que não seja os passados, retorne em json com as respectivas propriedades, propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura, propriedade peso, propriedade objetivo com o objetivo atual, propriedade refeições com uma array contendo dentro cada objeto sendo uma refeição da dieta e dentro de cada refeição a propriedade horário com horário da refeição, propriedade nome com nome e a propriedade alimentos com array contendo os alimentos dessa refeição e pode incluir uma propreidade como suplementos contendo array com sugestão de suplemento que é indicado para o sexo dessa pessoa e o objetivo dela e não retorne nenhuma observação alem das passadas no prompt, retorne em json e nenhuma propriedade pode ter acento.`);

            if(response.response.candidates) {
                const jsonText = response.response.candidates[0]?.content.parts[0].text as string;

                let jsonString = jsonText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim(); 

                let jsonReply = JSON.parse(jsonString);

                return {data: jsonReply};
            }
        }
        catch(error) {
            console.log(error);
            throw new Error("Falha na criação");
        }
    }
}

export { CreateNutritionService };
import { Difficulty, FitnessGoal } from "@prisma/client";

export const workoutGroups = [

    /* ------------------------------------------------ */
    /* LOSE WEIGHT */
    /* ------------------------------------------------ */

    {
        goal: FitnessGoal.LOSE_WEIGHT,
        difficulty: Difficulty.EASY,
        name: "Emagrecimento Iniciante",
        estimatedDurationMinutes: 35,

        workouts: [

            {
                name: "Treino A",
                description: "Treino leve para iniciar a queima de gordura com exercícios aeróbicos simples e ativação do core.",
                exercises: [
                    { name: "Polichinelo", durationSeconds: 40 },
                    { name: "Agachamento Livre", sets: 3, reps: 12 },
                    { name: "Mountain Climbers", durationSeconds: 30 },
                    { name: "Prancha", durationSeconds: 30 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino focado em cardio contínuo para melhorar resistência e estimular o gasto calórico.",
                exercises: [
                    { name: "Corrida", durationSeconds: 600 },
                    { name: "Abdominal Crunch", sets: 3, reps: 15 },
                    { name: "Prancha Lateral", durationSeconds: 30 },
                ],
            },

            {
                name: "Treino C",
                description: "Sessão de cardio moderado combinada com exercícios abdominais para ajudar na queima de gordura.",
                exercises: [
                    { name: "Bicicleta", durationSeconds: 900 },
                    { name: "Russian Twist", sets: 3, reps: 20 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino dinâmico de curta duração focado em elevar a frequência cardíaca.",
                exercises: [
                    { name: "Pular Corda", durationSeconds: 300 },
                    { name: "Agachamento com Salto", sets: 3, reps: 10 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.LOSE_WEIGHT,
        difficulty: Difficulty.MEDIUM,
        name: "Emagrecimento Intermediário",
        estimatedDurationMinutes: 45,

        workouts: [

            {
                name: "Treino A",
                description: "Treino cardiovascular intenso com exercícios funcionais para acelerar o metabolismo.",
                exercises: [
                    { name: "Burpee", sets: 3, reps: 12 },
                    { name: "Agachamento Livre", sets: 4, reps: 12 },
                    { name: "Mountain Climbers", durationSeconds: 40 },
                    { name: "Prancha", durationSeconds: 40 },
                ],
            },

            {
                name: "Treino B",
                description: "Sessão aeróbica com corrida e fortalecimento de pernas e abdômen.",
                exercises: [
                    { name: "Corrida", durationSeconds: 900 },
                    { name: "Afundo", sets: 3, reps: 12 },
                    { name: "Abdominal Infra", sets: 3, reps: 15 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino cardiovascular com exercícios de core para melhorar resistência física.",
                exercises: [
                    { name: "Pular Corda", durationSeconds: 600 },
                    { name: "Russian Twist", sets: 4, reps: 20 },
                    { name: "Prancha Lateral", durationSeconds: 40 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino funcional de alta intensidade para aumentar o gasto energético.",
                exercises: [
                    { name: "Thruster", sets: 3, reps: 10 },
                    { name: "High Knees", durationSeconds: 40 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.LOSE_WEIGHT,
        difficulty: Difficulty.HARD,
        name: "Emagrecimento Avançado",
        estimatedDurationMinutes: 60,

        workouts: [

            {
                name: "Treino A",
                description: "Treino HIIT avançado focado em alta queima calórica.",
                exercises: [
                    { name: "Burpee", sets: 4, reps: 15 },
                    { name: "Agachamento com Salto", sets: 4, reps: 12 },
                    { name: "Mountain Climbers", durationSeconds: 60 },
                ],
            },

            {
                name: "Treino B",
                description: "Corrida prolongada combinada com fortalecimento de membros inferiores.",
                exercises: [
                    { name: "Corrida", durationSeconds: 1500 },
                    { name: "Afundo", sets: 4, reps: 12 },
                    { name: "Prancha", durationSeconds: 60 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino de resistência cardiovascular com foco em core.",
                exercises: [
                    { name: "Pular Corda", durationSeconds: 900 },
                    { name: "Russian Twist", sets: 4, reps: 25 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino funcional avançado que trabalha explosão e resistência muscular.",
                exercises: [
                    { name: "Thruster", sets: 4, reps: 12 },
                    { name: "High Knees", durationSeconds: 60 },
                ],
            },

        ],
    },
    /* ------------------------------------------------ */
    /* BUILD MUSCLE */
    /* ------------------------------------------------ */

    {
        goal: FitnessGoal.BUILD_MUSCLE,
        difficulty: Difficulty.EASY,
        name: "Hipertrofia Iniciante",
        estimatedDurationMinutes: 45,

        workouts: [

            {
                name: "Treino A - Peito",
                description: "Treino básico para desenvolver o peitoral utilizando exercícios clássicos de musculação.",
                exercises: [
                    { name: "Supino Reto", sets: 3, reps: 12 },
                    { name: "Crucifixo", sets: 3, reps: 12 },
                    { name: "Flexão de Braço", sets: 3, reps: 10 },
                ],
            },

            {
                name: "Treino B - Costas",
                description: "Treino focado no fortalecimento das costas e bíceps com movimentos de puxada.",
                exercises: [
                    { name: "Puxada Frontal", sets: 3, reps: 12 },
                    { name: "Remada Baixa", sets: 3, reps: 12 },
                    { name: "Rosca Direta", sets: 3, reps: 12 },
                ],
            },

            {
                name: "Treino C - Pernas",
                description: "Treino completo para membros inferiores focado em força e resistência muscular.",
                exercises: [
                    { name: "Agachamento Livre", sets: 3, reps: 12 },
                    { name: "Leg Press", sets: 3, reps: 12 },
                    { name: "Elevação de Panturrilha", sets: 3, reps: 15 },
                ],
            },

            {
                name: "Treino D - Ombro",
                description: "Treino para fortalecer ombros e tríceps com exercícios isolados e compostos.",
                exercises: [
                    { name: "Desenvolvimento", sets: 3, reps: 12 },
                    { name: "Elevação Lateral", sets: 3, reps: 12 },
                    { name: "Tríceps Pulley", sets: 3, reps: 12 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.BUILD_MUSCLE,
        difficulty: Difficulty.MEDIUM,
        name: "Hipertrofia Intermediária",
        estimatedDurationMinutes: 60,

        workouts: [

            {
                name: "Treino A",
                description: "Treino intermediário para peitoral com maior volume de séries.",
                exercises: [
                    { name: "Supino Reto", sets: 4, reps: 10 },
                    { name: "Supino Inclinado", sets: 3, reps: 10 },
                    { name: "Crucifixo", sets: 3, reps: 12 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino de costas e bíceps com foco em ganho de massa muscular.",
                exercises: [
                    { name: "Barra Fixa", sets: 4, reps: 8 },
                    { name: "Remada Curvada", sets: 4, reps: 10 },
                    { name: "Rosca Martelo", sets: 3, reps: 10 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino de pernas para hipertrofia com exercícios compostos.",
                exercises: [
                    { name: "Agachamento Livre", sets: 4, reps: 10 },
                    { name: "Stiff", sets: 3, reps: 10 },
                    { name: "Cadeira Extensora", sets: 3, reps: 12 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino focado em ombros e tríceps com volume moderado.",
                exercises: [
                    { name: "Desenvolvimento", sets: 4, reps: 10 },
                    { name: "Elevação Lateral", sets: 3, reps: 12 },
                    { name: "Tríceps Testa", sets: 3, reps: 10 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.BUILD_MUSCLE,
        difficulty: Difficulty.HARD,
        name: "Hipertrofia Avançada",
        estimatedDurationMinutes: 70,

        workouts: [

            {
                name: "Treino A",
                description: "Treino avançado de peitoral com grande volume e intensidade.",
                exercises: [
                    { name: "Supino Reto", sets: 5, reps: 8 },
                    { name: "Supino Inclinado", sets: 4, reps: 8 },
                    { name: "Crucifixo Máquina", sets: 4, reps: 12 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino intenso para costas e bíceps com exercícios compostos.",
                exercises: [
                    { name: "Barra Fixa", sets: 5, reps: 8 },
                    { name: "Remada Curvada", sets: 4, reps: 8 },
                    { name: "Rosca Direta", sets: 4, reps: 10 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino pesado de pernas focado em força e hipertrofia.",
                exercises: [
                    { name: "Agachamento Livre", sets: 5, reps: 8 },
                    { name: "Leg Press", sets: 4, reps: 10 },
                    { name: "Stiff", sets: 4, reps: 10 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino avançado para ombros e tríceps com maior intensidade.",
                exercises: [
                    { name: "Desenvolvimento", sets: 4, reps: 8 },
                    { name: "Elevação Lateral", sets: 4, reps: 12 },
                    { name: "Tríceps Francês", sets: 4, reps: 10 },
                ],
            },

        ],
    },
    {
        goal: FitnessGoal.STAY_FIT,
        difficulty: Difficulty.EASY,
        name: "Condicionamento Iniciante",
        estimatedDurationMinutes: 35,

        workouts: [

            {
                name: "Treino A",
                description: "Treino leve para ativar o corpo e melhorar o condicionamento físico geral.",
                exercises: [
                    { name: "Polichinelo", durationSeconds: 40 },
                    { name: "Agachamento Livre", sets: 3, reps: 12 },
                    { name: "Prancha", durationSeconds: 30 },
                ],
            },

            {
                name: "Treino B",
                description: "Sessão de cardio moderado com exercícios abdominais para fortalecer o core.",
                exercises: [
                    { name: "Bicicleta", durationSeconds: 600 },
                    { name: "Abdominal Crunch", sets: 3, reps: 15 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino cardiovascular simples para melhorar resistência e manter a forma.",
                exercises: [
                    { name: "Corrida", durationSeconds: 600 },
                    { name: "Russian Twist", sets: 3, reps: 15 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino curto para ativação muscular e melhoria da estabilidade corporal.",
                exercises: [
                    { name: "Pular Corda", durationSeconds: 300 },
                    { name: "Prancha Lateral", durationSeconds: 30 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.STAY_FIT,
        difficulty: Difficulty.MEDIUM,
        name: "Condicionamento Intermediário",
        estimatedDurationMinutes: 45,

        workouts: [

            {
                name: "Treino A",
                description: "Treino funcional moderado para melhorar resistência e condicionamento físico.",
                exercises: [
                    { name: "Burpee", sets: 3, reps: 10 },
                    { name: "Agachamento Livre", sets: 3, reps: 12 },
                    { name: "Prancha", durationSeconds: 40 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino cardiovascular com fortalecimento de membros inferiores.",
                exercises: [
                    { name: "Corrida", durationSeconds: 900 },
                    { name: "Afundo", sets: 3, reps: 12 },
                ],
            },

            {
                name: "Treino C",
                description: "Sessão de cardio com exercícios de core para melhorar estabilidade e resistência.",
                exercises: [
                    { name: "Bicicleta", durationSeconds: 900 },
                    { name: "Russian Twist", sets: 3, reps: 20 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino funcional com exercícios explosivos para melhorar agilidade.",
                exercises: [
                    { name: "Thruster", sets: 3, reps: 10 },
                    { name: "High Knees", durationSeconds: 40 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.STAY_FIT,
        difficulty: Difficulty.HARD,
        name: "Condicionamento Avançado",
        estimatedDurationMinutes: 55,

        workouts: [

            {
                name: "Treino A",
                description: "Treino funcional intenso para melhorar resistência cardiovascular e muscular.",
                exercises: [
                    { name: "Burpee", sets: 4, reps: 12 },
                    { name: "Agachamento com Salto", sets: 4, reps: 10 },
                    { name: "Mountain Climbers", durationSeconds: 60 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino cardiovascular prolongado combinado com fortalecimento de pernas.",
                exercises: [
                    { name: "Corrida", durationSeconds: 1200 },
                    { name: "Afundo", sets: 4, reps: 12 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino intenso de resistência com foco em core e coordenação.",
                exercises: [
                    { name: "Pular Corda", durationSeconds: 600 },
                    { name: "Russian Twist", sets: 4, reps: 20 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino funcional avançado para melhorar potência e condicionamento físico.",
                exercises: [
                    { name: "Thruster", sets: 4, reps: 12 },
                    { name: "High Knees", durationSeconds: 60 },
                ],
            },

        ],
    },
    {
        goal: FitnessGoal.INCREASE_STRENGTH,
        difficulty: Difficulty.EASY,
        name: "Força Iniciante",
        estimatedDurationMinutes: 45,

        workouts: [

            {
                name: "Treino A",
                description: "Treino básico de força para desenvolver peitoral utilizando cargas moderadas.",
                exercises: [
                    { name: "Supino Reto", sets: 4, reps: 8 },
                    { name: "Crucifixo", sets: 3, reps: 10 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino focado em costas e bíceps para iniciar o ganho de força.",
                exercises: [
                    { name: "Remada Curvada", sets: 4, reps: 8 },
                    { name: "Rosca Direta", sets: 3, reps: 10 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino de membros inferiores com foco em força e estabilidade.",
                exercises: [
                    { name: "Agachamento Livre", sets: 4, reps: 8 },
                    { name: "Elevação de Panturrilha", sets: 3, reps: 12 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino para fortalecer ombros e tríceps com exercícios fundamentais.",
                exercises: [
                    { name: "Desenvolvimento", sets: 4, reps: 8 },
                    { name: "Tríceps Pulley", sets: 3, reps: 10 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.INCREASE_STRENGTH,
        difficulty: Difficulty.MEDIUM,
        name: "Força Intermediária",
        estimatedDurationMinutes: 60,

        workouts: [

            {
                name: "Treino A",
                description: "Treino intermediário de peitoral com foco em aumento de força.",
                exercises: [
                    { name: "Supino Reto", sets: 5, reps: 6 },
                    { name: "Supino Inclinado", sets: 4, reps: 6 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino de costas com exercícios compostos para ganho de força.",
                exercises: [
                    { name: "Barra Fixa", sets: 5, reps: 6 },
                    { name: "Remada Curvada", sets: 4, reps: 6 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino de pernas com foco em força e estabilidade muscular.",
                exercises: [
                    { name: "Agachamento Livre", sets: 5, reps: 6 },
                    { name: "Stiff", sets: 4, reps: 8 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino para ombros e tríceps com intensidade moderada.",
                exercises: [
                    { name: "Desenvolvimento", sets: 5, reps: 6 },
                    { name: "Tríceps Testa", sets: 4, reps: 8 },
                ],
            },

        ],
    },

    {
        goal: FitnessGoal.INCREASE_STRENGTH,
        difficulty: Difficulty.HARD,
        name: "Força Avançada",
        estimatedDurationMinutes: 70,

        workouts: [

            {
                name: "Treino A",
                description: "Treino avançado de peitoral com cargas altas e baixo número de repetições.",
                exercises: [
                    { name: "Supino Reto", sets: 6, reps: 4 },
                    { name: "Supino Inclinado", sets: 5, reps: 5 },
                ],
            },

            {
                name: "Treino B",
                description: "Treino intenso de costas para desenvolvimento máximo de força.",
                exercises: [
                    { name: "Barra Fixa", sets: 6, reps: 5 },
                    { name: "Remada Curvada", sets: 5, reps: 5 },
                ],
            },

            {
                name: "Treino C",
                description: "Treino pesado de membros inferiores focado em força máxima.",
                exercises: [
                    { name: "Agachamento Livre", sets: 6, reps: 4 },
                    { name: "Leg Press", sets: 5, reps: 6 },
                ],
            },

            {
                name: "Treino D",
                description: "Treino avançado para ombros e tríceps com alta intensidade.",
                exercises: [
                    { name: "Desenvolvimento", sets: 5, reps: 5 },
                    { name: "Tríceps Francês", sets: 4, reps: 8 },
                ],
            },

        ],
    },
];

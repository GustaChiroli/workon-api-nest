import { MuscleGroup } from "@prisma/client";

export const exercises = [

    // CHEST
    {
        name: "Supino Reto",
        muscleGroup: MuscleGroup.CHEST,
        description: "Deite no banco, segure a barra na largura dos ombros e abaixe até o peito. Empurre a barra para cima estendendo os braços."
    },
    {
        name: "Supino Inclinado",
        muscleGroup: MuscleGroup.CHEST,
        description: "No banco inclinado, segure a barra ou halteres. Abaixe em direção ao peito superior e empurre até estender os braços."
    },
    {
        name: "Supino Declinado",
        muscleGroup: MuscleGroup.CHEST,
        description: "Deite no banco declinado, abaixe a barra até o peito inferior e empurre para cima controlando o movimento."
    },
    {
        name: "Crucifixo",
        muscleGroup: MuscleGroup.CHEST,
        description: "Deite no banco com halteres, braços abertos. Feche os braços acima do peito mantendo leve flexão nos cotovelos."
    },
    {
        name: "Crucifixo Máquina",
        muscleGroup: MuscleGroup.CHEST,
        description: "Sente na máquina com os braços abertos e feche-os à frente do corpo contraindo o peitoral."
    },
    {
        name: "Flexão de Braço",
        muscleGroup: MuscleGroup.CHEST,
        description: "Apoie mãos e pés no chão. Abaixe o corpo flexionando os braços e empurre para voltar à posição inicial."
    },

    // BACK
    {
        name: "Puxada Frontal",
        muscleGroup: MuscleGroup.BACK,
        description: "Na polia alta, puxe a barra em direção ao peito enquanto mantém o tronco estável."
    },
    {
        name: "Barra Fixa",
        muscleGroup: MuscleGroup.BACK,
        description: "Segure a barra e puxe o corpo para cima até o queixo ultrapassar a barra, depois desça controlando."
    },
    {
        name: "Remada Curvada",
        muscleGroup: MuscleGroup.BACK,
        description: "Incline o tronco à frente e puxe a barra em direção ao abdômen, mantendo as costas retas."
    },
    {
        name: "Remada Baixa",
        muscleGroup: MuscleGroup.BACK,
        description: "Na máquina ou polia, puxe o cabo em direção ao abdômen mantendo o peito aberto."
    },
    {
        name: "Pulldown",
        muscleGroup: MuscleGroup.BACK,
        description: "Na polia alta, puxe a barra para baixo em direção ao peito contraindo as costas."
    },

    // LEGS
    {
        name: "Agachamento Livre",
        muscleGroup: MuscleGroup.LEGS,
        description: "Com a barra nos ombros, agache flexionando os joelhos até as coxas ficarem paralelas ao chão."
    },
    {
        name: "Leg Press",
        muscleGroup: MuscleGroup.LEGS,
        description: "Empurre a plataforma com os pés até estender as pernas e volte controlando o movimento."
    },
    {
        name: "Afundo",
        muscleGroup: MuscleGroup.LEGS,
        description: "Dê um passo à frente e flexione os joelhos até o joelho traseiro quase tocar o chão."
    },
    {
        name: "Cadeira Extensora",
        muscleGroup: MuscleGroup.LEGS,
        description: "Sentado na máquina, estenda as pernas levantando o peso e retorne lentamente."
    },
    {
        name: "Cadeira Flexora",
        muscleGroup: MuscleGroup.LEGS,
        description: "Flexione as pernas trazendo os calcanhares em direção ao glúteo contraindo o posterior."
    },
    {
        name: "Stiff",
        muscleGroup: MuscleGroup.LEGS,
        description: "Segure a barra ou halteres e incline o tronco para frente mantendo as pernas levemente flexionadas."
    },
    {
        name: "Elevação de Panturrilha",
        muscleGroup: MuscleGroup.LEGS,
        description: "Eleve os calcanhares ficando na ponta dos pés e depois desça lentamente."
    },

    // SHOULDERS
    {
        name: "Desenvolvimento",
        muscleGroup: MuscleGroup.SHOULDERS,
        description: "Empurre halteres ou barra acima da cabeça até estender os braços e retorne controlando."
    },
    {
        name: "Elevação Lateral",
        muscleGroup: MuscleGroup.SHOULDERS,
        description: "Levante os halteres lateralmente até a altura dos ombros mantendo os braços levemente flexionados."
    },
    {
        name: "Elevação Frontal",
        muscleGroup: MuscleGroup.SHOULDERS,
        description: "Levante o halter ou barra à frente do corpo até a altura dos ombros."
    },
    {
        name: "Crucifixo Invertido",
        muscleGroup: MuscleGroup.SHOULDERS,
        description: "Incline o tronco e abra os braços lateralmente trabalhando a parte posterior do ombro."
    },

    // BICEPS
    {
        name: "Rosca Direta",
        muscleGroup: MuscleGroup.BICEPS,
        description: "Segure a barra com pegada supinada e flexione os braços levando a barra em direção ao peito."
    },
    {
        name: "Rosca Alternada",
        muscleGroup: MuscleGroup.BICEPS,
        description: "Com halteres, flexione um braço de cada vez levando o peso em direção ao ombro."
    },
    {
        name: "Rosca Martelo",
        muscleGroup: MuscleGroup.BICEPS,
        description: "Segure halteres com pegada neutra e flexione os braços mantendo os punhos alinhados."
    },

    // TRICEPS
    {
        name: "Tríceps Pulley",
        muscleGroup: MuscleGroup.TRICEPS,
        description: "Na polia alta, empurre a barra para baixo estendendo os braços."
    },
    {
        name: "Tríceps Francês",
        muscleGroup: MuscleGroup.TRICEPS,
        description: "Com halter acima da cabeça, flexione os cotovelos e estenda novamente."
    },
    {
        name: "Tríceps Testa",
        muscleGroup: MuscleGroup.TRICEPS,
        description: "Deitado no banco, abaixe a barra em direção à testa e estenda os braços."
    },

    // CORE
    {
        name: "Abdominal Crunch",
        muscleGroup: MuscleGroup.CORE,
        description: "Deitado no chão, eleve o tronco contraindo o abdômen."
    },
    {
        name: "Abdominal Infra",
        muscleGroup: MuscleGroup.CORE,
        description: "Deitado, levante as pernas em direção ao tronco contraindo o abdômen inferior."
    },
    {
        name: "Prancha",
        muscleGroup: MuscleGroup.CORE,
        description: "Apoie antebraços e pés no chão mantendo o corpo alinhado e contraindo o abdômen."
    },
    {
        name: "Prancha Lateral",
        muscleGroup: MuscleGroup.CORE,
        description: "Apoie um antebraço no chão e mantenha o corpo alinhado lateralmente."
    },
    {
        name: "Russian Twist",
        muscleGroup: MuscleGroup.CORE,
        description: "Sentado com o tronco inclinado, gire o tronco para os lados contraindo o abdômen."
    },

    // CARDIO
    {
        name: "Corrida",
        muscleGroup: MuscleGroup.CARDIO,
        isCardio: true,
        description: "Corra mantendo ritmo constante e postura ereta."
    },
    {
        name: "Bicicleta",
        muscleGroup: MuscleGroup.CARDIO,
        isCardio: true,
        description: "Pedale mantendo cadência constante e respiração controlada."
    },
    {
        name: "Pular Corda",
        muscleGroup: MuscleGroup.CARDIO,
        isCardio: true,
        description: "Salte levemente enquanto gira a corda mantendo ritmo contínuo."
    },
    {
        name: "Burpee",
        muscleGroup: MuscleGroup.CARDIO,
        isCardio: true,
        description: "Agache, faça uma flexão, volte para o agachamento e salte para cima."
    },
    {
        name: "Polichinelo",
        muscleGroup: MuscleGroup.CARDIO,
        isCardio: true,
        description: "Salte abrindo pernas e braços e volte à posição inicial repetidamente."
    },
    {
        name: "Mountain Climbers",
        muscleGroup: MuscleGroup.CARDIO,
        isCardio: true,
        description: "Na posição de prancha, alterne os joelhos em direção ao peito rapidamente."
    },
    {
        name: "High Knees",
        muscleGroup: MuscleGroup.CARDIO,
        isCardio: true,
        description: "Corra parado elevando os joelhos o mais alto possível."
    },

    // FULL BODY
    {
        name: "Agachamento com Salto",
        muscleGroup: MuscleGroup.FULL_BODY,
        description: "Agache e ao subir realize um salto explosivo."
    },
    {
        name: "Thruster",
        muscleGroup: MuscleGroup.FULL_BODY,
        description: "Agache com halteres ou barra e ao subir empurre o peso acima da cabeça."
    },
    {
        name: "Kettlebell Swing",
        muscleGroup: MuscleGroup.FULL_BODY,
        description: "Balance o kettlebell entre as pernas e impulsione-o até a altura do peito usando o quadril."
    },

];
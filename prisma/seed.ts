import { PrismaClient } from "@prisma/client";
import { exercises } from "./seed/exercises.seed";
import { workoutGroups } from "./seed/workouts.seed";
import * as dotenv from "dotenv";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
});
async function main() {

    await prisma.userWorkoutExerciseSet.deleteMany();
    await prisma.userWorkoutExercise.deleteMany();
    await prisma.userWorkout.deleteMany();

    await prisma.workoutExercise.deleteMany();
    await prisma.workout.deleteMany();
    await prisma.workoutGroup.deleteMany();


    console.log("Seeding exercises...");

    for (const ex of exercises) {

        await prisma.exercise.create({
            data: {
                name: ex.name,
                description: ex.description,
                muscleGroup: ex.muscleGroup,
                isCardio: ex.isCardio ?? false,

            },
        });

    }

    console.log("Seeding workouts...");

    for (const group of workoutGroups) {

        const workoutGroup = await prisma.workoutGroup.create({
            data: {
                name: group.name,
                goal: group.goal,
                difficulty: group.difficulty,
                estimatedDurationMinutes: group.estimatedDurationMinutes,
                exerciseCount: 0,
            },
        });

        for (let i = 0; i < group.workouts.length; i++) {

            const workout = await prisma.workout.create({
                data: {
                    name: group.workouts[i].name,
                    description: group.workouts[i].description,
                    groupId: workoutGroup.id,
                    estimatedDurationMinutes: group.workouts[i].estimatedDurationMinutes,
                    order: i,
                },
            });

            for (let j = 0; j < group.workouts[i].exercises.length; j++) {

                const ex = group.workouts[i].exercises[j];

                const exercise = await prisma.exercise.findFirst({
                    where: { name: ex.name },
                });

                if (!exercise) continue;

                await prisma.workoutExercise.create({
                    data: {
                        workoutId: workout.id,
                        exerciseId: exercise.id,
                        order: j,
                        sets: ex.sets ?? null,
                        reps: ex.reps ?? null,
                        durationSeconds: "durationSeconds" in ex ? ex.durationSeconds : null,
                        restSeconds: 30,
                    },
                });

            }

        }

    }

    console.log("Seed finalizado 🚀");

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
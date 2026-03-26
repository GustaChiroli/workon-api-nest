import { Difficulty, FitnessGoal } from "@prisma/client";

export class CreateWorkoutGroupDto {
    name: string;
    goal: FitnessGoal;
    difficulty: Difficulty;
    workouts: {
        name: string;
        exercises: {
            exerciseId: string;
            sets?: number;
            reps?: number;
            durationSeconds?: number;
            restSeconds?: number;
        }[];
    }[];
}
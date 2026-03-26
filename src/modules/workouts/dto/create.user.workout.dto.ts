export class CreateUserWorkoutExerciseDto {
    exerciseId: string;
    sets: CreateUserWorkoutExerciseSetDto[];
}

export class CreateUserWorkoutExerciseSetDto {
    setNumber: number;
    reps?: number;
    weight?: number;
    durationSeconds?: number;
}

export class CreateUserWorkoutDto {
    workoutId: string;
    exercises: CreateUserWorkoutExerciseDto[];
}
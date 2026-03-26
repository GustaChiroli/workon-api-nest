-- AlterTable
ALTER TABLE "UserWorkout" ADD COLUMN     "weight" DECIMAL(6,2);

-- CreateTable
CREATE TABLE "UserWorkoutExerciseSet" (
    "id" TEXT NOT NULL,
    "userWorkoutExerciseId" TEXT NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "reps" INTEGER,
    "weight" DECIMAL(6,2),
    "durationSeconds" INTEGER,

    CONSTRAINT "UserWorkoutExerciseSet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserWorkoutExerciseSet" ADD CONSTRAINT "UserWorkoutExerciseSet_userWorkoutExerciseId_fkey" FOREIGN KEY ("userWorkoutExerciseId") REFERENCES "UserWorkoutExercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

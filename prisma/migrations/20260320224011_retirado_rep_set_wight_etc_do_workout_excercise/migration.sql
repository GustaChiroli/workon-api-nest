/*
  Warnings:

  - You are about to drop the column `durationSeconds` on the `UserWorkoutExercise` table. All the data in the column will be lost.
  - You are about to drop the column `reps` on the `UserWorkoutExercise` table. All the data in the column will be lost.
  - You are about to drop the column `restSeconds` on the `UserWorkoutExercise` table. All the data in the column will be lost.
  - You are about to drop the column `sets` on the `UserWorkoutExercise` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `UserWorkoutExercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserWorkoutExercise" DROP COLUMN "durationSeconds",
DROP COLUMN "reps",
DROP COLUMN "restSeconds",
DROP COLUMN "sets",
DROP COLUMN "weight";

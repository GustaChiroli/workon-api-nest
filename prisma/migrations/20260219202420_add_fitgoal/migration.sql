-- CreateEnum
CREATE TYPE "FitnessGoal" AS ENUM ('BUILD_MUSCLE', 'LOSE_WEIGHT', 'STAY_FIT', 'INCREASE_STRENGTH');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fitnessGoal" "FitnessGoal";

-- AlterTable
ALTER TABLE "WorkoutGroup" ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "WorkoutGroup" ADD CONSTRAINT "WorkoutGroup_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

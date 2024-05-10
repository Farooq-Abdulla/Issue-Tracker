/*
  Warnings:

  - You are about to drop the column `assigned_to_user` on the `Issue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "assigned_to_user",
ADD COLUMN     "assigned_to_userId" TEXT;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_assigned_to_userId_fkey" FOREIGN KEY ("assigned_to_userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

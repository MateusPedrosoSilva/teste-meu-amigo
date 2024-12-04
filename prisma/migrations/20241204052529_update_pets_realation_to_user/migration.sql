/*
  Warnings:

  - Made the column `keeperId` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_keeperId_fkey";

-- AlterTable
ALTER TABLE "Pet" ALTER COLUMN "keeperId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_keeperId_fkey" FOREIGN KEY ("keeperId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

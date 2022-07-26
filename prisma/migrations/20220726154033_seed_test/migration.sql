/*
  Warnings:

  - You are about to drop the column `eventTypeId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `EventType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_eventTypeId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "eventTypeId";

-- AlterTable
ALTER TABLE "EventSchedule" ADD COLUMN     "date" TEXT,
ADD COLUMN     "details" TEXT,
ADD COLUMN     "time" TEXT;

-- DropTable
DROP TABLE "EventType";

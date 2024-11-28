-- CreateTable
CREATE TABLE "Campaing" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizerId" INTEGER NOT NULL,

    CONSTRAINT "Campaing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Campaing" ADD CONSTRAINT "Campaing_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `Jobs` (
    `id` VARCHAR(191) NOT NULL,
    `jobTitle` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `jobLocation` VARCHAR(191) NOT NULL,
    `jobEntryLevel` VARCHAR(191) NOT NULL,
    `jobDescription` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

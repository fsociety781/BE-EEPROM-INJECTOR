-- CreateTable
CREATE TABLE `feeders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barcode` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `token` VARCHAR(50) NOT NULL,
    `uuid` VARCHAR(50) NOT NULL,
    `jwt` VARCHAR(200) NOT NULL,
    `type` VARCHAR(6) NOT NULL,
    `version` VARCHAR(10) NOT NULL,
    `status` ENUM('inject', 'injected') NOT NULL DEFAULT 'inject',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inject_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barcode` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `token` VARCHAR(50) NOT NULL,
    `uuid` VARCHAR(50) NOT NULL,
    `status` ENUM('inject', 'injected') NOT NULL DEFAULT 'injected',
    `DateTime` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

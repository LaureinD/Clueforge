/*
  Warnings:

  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expires_at` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Session` table. All the data in the column will be lost.
  - Added the required column `access_expire` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `access_token` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refresh_expire` to the `Session` table without a default value. This is not possible if the table is not empty.
  - The required column `refresh_token` was added to the `Session` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "refresh_token" TEXT NOT NULL PRIMARY KEY,
    "access_token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "access_expire" DATETIME NOT NULL,
    "refresh_expire" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revoked_at" DATETIME,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("created_at", "revoked_at", "userId") SELECT "created_at", "revoked_at", "userId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_access_token_key" ON "Session"("access_token");
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
CREATE INDEX "Session_access_expire_idx" ON "Session"("access_expire");
CREATE INDEX "Session_refresh_expire_idx" ON "Session"("refresh_expire");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

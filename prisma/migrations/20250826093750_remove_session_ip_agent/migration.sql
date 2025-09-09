/*
  Warnings:

  - You are about to drop the column `ip` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `Session` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" DATETIME NOT NULL,
    "revoked_at" DATETIME,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("created_at", "expires_at", "id", "revoked_at", "userId") SELECT "created_at", "expires_at", "id", "revoked_at", "userId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
CREATE INDEX "Session_expires_at_idx" ON "Session"("expires_at");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

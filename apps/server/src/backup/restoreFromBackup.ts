import fs from "fs";
import path from "path";

const DB_PATH = path.resolve("blog.db");
const BACKUP_DIR = path.resolve("backups");

export function restoreFromBackup(file: string) {
  const backupPath = path.join(BACKUP_DIR, file);

  if (!fs.existsSync(backupPath)) {
    throw new Error("Backup not found");
  }

  if (fs.existsSync(DB_PATH)) {
    fs.copyFileSync(DB_PATH, DB_PATH + ".before-restore");
    console.log("Created temporary backup:", DB_PATH + ".before-restore");
  }

  fs.copyFileSync(backupPath, DB_PATH);

  console.log("Database restored from:", backupPath);
}

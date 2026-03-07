import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const DB_PATH = path.resolve("blog.db");
const BACKUP_DIR = path.resolve("backups");

// export function createBackup() {
//   if (!fs.existsSync(BACKUP_DIR)) {
//     fs.mkdirSync(BACKUP_DIR, { recursive: true });
//   }

//   const date = new Date().toISOString().slice(0, 10);

//   const backupPath = path.join(
//     BACKUP_DIR,
//     `blog-${date}.db`
//   );

//   fs.copyFileSync(DB_PATH, backupPath);

//   console.log("Backup created:", backupPath);
// }

export async function createBackup() {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

  const backupPath = path.join(
    BACKUP_DIR,
    `blog-${timestamp}.db`
  );

  // fs.copyFileSync(DB_PATH, backupPath, fs.constants.COPYFILE_EXCL);

  // console.log("Backup created:", backupPath);

  const db = new Database(DB_PATH);

  await db.backup(backupPath);

  cleanupOldBackups();

  db.close();

  console.log("Backup created:", backupPath);
}

function cleanupOldBackups() {
  const files = fs
    .readdirSync(BACKUP_DIR)
    .filter(f => f.endsWith(".db"))
    .sort()
    .reverse();

  const MAX_BACKUPS = 10;

  files.slice(MAX_BACKUPS).forEach(file => {
    fs.unlinkSync(path.join(BACKUP_DIR, file));
  });
}

// import fs from "fs";
// import path from "path";
// import Database from "better-sqlite3";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const DB_PATH = path.resolve(__dirname, "../../data/blog.db");
// const BACKUP_DIR = path.resolve(__dirname, "../../backups");

// function cleanupOldBackups() {
//   const files = fs
//     .readdirSync(BACKUP_DIR)
//     .filter(f => f.endsWith(".db"))
//     .sort()
//     .reverse();

//   const MAX_BACKUPS = 30;

//   files.slice(MAX_BACKUPS).forEach(file => {
//     fs.unlinkSync(path.join(BACKUP_DIR, file));
//   });
// }

// export async function createBackup() {
//   if (!fs.existsSync(BACKUP_DIR)) {
//     fs.mkdirSync(BACKUP_DIR, { recursive: true });
//   }

//   const date = new Date().toISOString().replace(/[:.]/g, "-");

//   const backupPath = path.join(
//     BACKUP_DIR,
//     `blog-${date}.db`
//   );

//   const db = new Database(DB_PATH);

//   await db.backup(backupPath);

//   db.close();

//   cleanupOldBackups();

//   console.log("Backup created:", backupPath);
// }

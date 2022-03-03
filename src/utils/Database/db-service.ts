import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {PageItem} from '../../types';

const tableName = 'pagesData';
enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'PageData.db', location: 'Documents'});
};

export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id integer PRIMARY KEY,
        img TEXT,
        content TEXT
    );`;

  await db.executeSql(query);
};

export const getPagesItems = async (
  db: SQLiteDatabase,
): Promise<PageItem[]> => {
  try {
    const pageItems: PageItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id, img, content FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        pageItems.push(result.rows.item(index));
      }
    });
    return pageItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get pageItems');
  }
};

export const savePageItems = async (
  db: SQLiteDatabase,
  pageItems: PageItem[],
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName} (rowid, img, content) values` +
    pageItems.map(i => `(${i.id}, '${i.img}', '${i.content}')`).join(',');
  return db.executeSql(insertQuery);
};

export const deletePageItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
};

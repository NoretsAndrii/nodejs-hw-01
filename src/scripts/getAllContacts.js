import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { isValidJSON } from '../utils/isValidJSON.js';

export const getAllContacts = async () => {
  try {
    const dataJSON = await fs.readFile(PATH_DB, 'utf8');
    if (!isValidJSON(dataJSON)) {
      throw new Error('Файл содержит невалидный JSON');
    }
    const data = Array.isArray(JSON.parse(dataJSON))
      ? JSON.parse(dataJSON)
      : [];
    return data;
  } catch (error) {
    console.log(error);
  }
};

// console.log(await getAllContacts());

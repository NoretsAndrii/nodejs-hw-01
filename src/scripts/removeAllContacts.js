import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, '[]', 'utf8');
    console.log('Дані успішно видалені.');
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();

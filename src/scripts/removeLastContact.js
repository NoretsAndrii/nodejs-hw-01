import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await getAllContacts();
    if (data.length === 0) {
      console.log('Масив с контактами порожній');
      return;
    }
    data.pop();
    fs.writeFile(PATH_DB, JSON.stringify(data), 'utf8');
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();

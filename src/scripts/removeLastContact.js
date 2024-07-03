import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await getAllContacts();
    data.pop();
    console.log(data);
    fs.writeFile(PATH_DB, JSON.stringify(data), 'utf8');
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();

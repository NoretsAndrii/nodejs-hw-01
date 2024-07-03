import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { isValidJSON } from '../utils/isValidJSON.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  try {
    const conractsDataJSON = await fs.readFile(PATH_DB, 'utf8');

    if (!isValidJSON(conractsDataJSON)) {
      throw new Error('Файл содержит невалидный JSON');
    }

    const contactsData = Array.isArray(JSON.parse(conractsDataJSON))
      ? JSON.parse(conractsDataJSON)
      : [];
    const newContactsData = [...contactsData, newContact];

    await fs.writeFile(PATH_DB, JSON.stringify(newContactsData), 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

addOneContact();

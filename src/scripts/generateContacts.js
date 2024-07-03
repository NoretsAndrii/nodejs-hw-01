import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { isValidJSON } from '../utils/isValidJSON.js';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 1; i <= number; i += 1) {
    newContacts.push(createFakeContact());
  }
  try {
    const conractsDataJSON = await fs.readFile(PATH_DB, 'utf8');

    if (!isValidJSON(conractsDataJSON)) {
      throw new Error('Файл содержит невалидный JSON');
    }

    const contactsData = Array.isArray(JSON.parse(conractsDataJSON))
      ? JSON.parse(conractsDataJSON)
      : [];
    const newContactsData = [...contactsData, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(newContactsData), 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

generateContacts(5);

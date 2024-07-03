import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 1; i <= number; i += 1) {
    newContacts.push(createFakeContact());
  }
  try {
    const conractsDataJSON = await fs.readFile(PATH_DB, 'utf8');
    const conractsData = conractsDataJSON.length
      ? JSON.parse(conractsDataJSON)
      : [];
    const newContactsData = [...conractsData, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(newContactsData), 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

generateContacts(5);

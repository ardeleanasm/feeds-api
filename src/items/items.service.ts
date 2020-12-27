/**
 * Data Model Interfaces
 */
import { Item } from './item.interface';
import { Items } from './items.interface';


/**
 * In-Memory Store
 */
const items: Items = {
  numberOfEntries: 3,
  entries: [
    { id: 1, title: 'Title1', url: 'url1' },
    { id: 2, title: 'Title2', url: 'url2' },
    { id: 3, title: 'Title3', url: 'url3' }
  ]
};


/**
 * Service Methods
 */
export const findAll = async (): Promise<Items> => {
  return items;
}

export const find = async (id: number): Promise<Item> => {
  const record = items.entries.find(element => element.id === id);


  // const record:Item = items[id];
  if (record) {
    return record;
  }
  throw new Error("No record found");
}

export const create = async (newItem: Item): Promise<void> => {
  items.entries.push(newItem);
  items.numberOfEntries += 1;

};

export const update = async (updatedItem: Item): Promise<void> => {
  const objIndex = items.entries.findIndex(element => element.id == updatedItem.id);
  if (objIndex != -1) {
    items.entries[objIndex] = updatedItem;
    return;
  }

  throw new Error("No record found to update");
};

export const remove = async (id: number): Promise<void> => {
  
  const objIndex = items.entries.findIndex(element => element.id == id);
  
  
  if (objIndex != -1) {
    items.entries.splice(objIndex,1);
    
    return;
  }

  throw new Error("No record found to delete");
};
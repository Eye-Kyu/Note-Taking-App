/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rgebgeagbzu394r",
    "created": "2024-06-18 13:09:18.323Z",
    "updated": "2024-06-18 13:09:18.323Z",
    "name": "Title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3pzl4ezx",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rgebgeagbzu394r");

  return dao.deleteCollection(collection);
})

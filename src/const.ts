import { Template, BLANK_PDF } from '@pdfme/common';

export const FIXED_COOR_GRID_Y = 65;
const FIXED_START_COOR = 10;

export const lineStr = "----------------------------------------------------------------------------------------------------------------------------------------------------";

export const newSchema :SchemaObject[] = [
    {
      header: {
        type: 'text',
        position: { x: 9.5, y: 15 },
        width: 150,
        height: 10,
        fontSize: 48,
        fontName: 'sans_serif',
      },
      time: {
        type: 'text',
        position: { x: 185 - FIXED_START_COOR, y: 22 },
        width: 80,
        height: 10,
      },
      docNumber: {
        type: 'text',
        position: { x: 190 - FIXED_START_COOR, y: 27.5 },
        width: 40,
        height: 10,
      },
      line : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 33 },
        width : 400,
        height : 30,
        content : lineStr,
      },
      line2 : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 53 },
        width : 400,
        height : 30,
      },
      line3 : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 168 },
        width : 400,
        height : 30,
      },
      invoiceTo : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 40 },
        width : 50,
        height : 30,
      },
      full_addr_shipping : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 45 },
        width : 80,
        height : 30,
      },
      full_addr_vender : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 176},
        width : 100,
        height : 30,
      },
      sender_email : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 182 },
        width : 50,
        height : 30,
      },
      sender_phone_num : { 
        type : "text",
        position: { x: FIXED_START_COOR, y: 188 },
        width : 50,
        height : 30,
      },
      description : {
        type : "text",
        position: { x: 145, y: FIXED_COOR_GRID_Y },
        width : 50,
        height : 30,
        fontSize: 17,
      },
      name : {
        type : "text",
        position: { x: FIXED_START_COOR, y: FIXED_COOR_GRID_Y },
        width : 50,
        height : 30,
        fontSize: 17,
      },
      quantity : {
        type : "text",
        position: { x: FIXED_START_COOR + 60, y: FIXED_COOR_GRID_Y },
        width : 50,
        height : 30,
        fontSize: 17,
      },
      price : { 
        type : "text",
        position: { x: FIXED_START_COOR + 98, y: FIXED_COOR_GRID_Y },
        width : 50,
        height : 30,
        fontSize: 17,
      },
      total : { 
        type : "text",
        position: {  x: 175 - FIXED_START_COOR, y: 175 },
        width : 50,
        height : 30,
        fontSize: 17,
      }
    },
  ];

  export const template: Template = {
    basePdf: BLANK_PDF,
    schemas: newSchema,
  };

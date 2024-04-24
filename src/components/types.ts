type LineItem = {
    amount: number;
    description: string;
    id: string;
    item: {
      id: string;
      name: string;
    };
    line_number: number;
    linked_transaction: null | unknown; 
    measurements: null | unknown; 
    quantity: number;
    received: number;
    tax_code: {
      id: string;
      name: string;
    };
    taxable: boolean;
    unit_price: number;
    uom: {
      id: string;
      name: string;
    };
    vendor_part_number: null | string;
    total_price : number
  };

type ShippingAddr = {
  id: string;
  person: string;
  company: string;
  line1: string;
  line2: string | null;
  line3: string | null;
  city: string;
  state: string;
  postal_code: string | null;
  country: string;
  email: string | null;
  phone: string | null;
}

type VendorAddress = {
  id: string;
  person?: string | null;
  company?: string | null;
  line1: string;
  line2: string;
  line3: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  email: string;
  phone: string;
};

  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExeData = { 
    line_items: LineItem[]
    doc_number : string 
    shipping_addr : ShippingAddr
    vendor_addr : VendorAddress
    txn_datetime : string
    total_price : string
    full_addr_vender : string
    full_addr_shipping : string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Inputs {
  [key: string]: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SchemaObject {
  [key: string]: {
    type: string;
    position: { x: number; y: number };
    width: number;
    height: number;
    content?: string;
    fontSize?: number;
    fontName?:string;
  };
}
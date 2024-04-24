import { useEffect , useState } from 'react';
import { generate } from '@pdfme/generator';
import { newSchema , lineStr , template , FIXED_COOR_GRID_Y } from '@src/const';
import { parseISO , format } from 'date-fns';

function Hero() {
  const [ pdfGenExData , setPdfGenExData ] = useState<ExeData>({
    line_items : [],
    doc_number : "",
    txn_datetime : "",
    vendor_addr : {
      id: "",
      line1: "",
      line2: "",
      line3: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      email: "", 
      phone: "",
    },
    shipping_addr: {
      id: "",
      person: "",
      company: "",
      line1: "",
      line2: "",
      line3: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      email: "", 
      phone: "",
    },
    total_price :'0',
    full_addr_vender : "",
    full_addr_shipping: "",
  });

  const getSchemeInput = () => { 
    const time = parseISO(pdfGenExData.txn_datetime);

    const inputs : Inputs[] = [{ 
      header : 'INVOICE', 
      time : format(time,"yyyy-MM-dd"), 
      line : lineStr,
      line2 : lineStr,
      docNumber : pdfGenExData?.doc_number ?? "",
      invoiceTo : "Invoice to:",
      full_addr_vender : pdfGenExData.full_addr_vender,
      full_addr_shipping : pdfGenExData.full_addr_shipping,
      description : "description",
      quantity : "quantity",
      price : "price",
      name : "name",
      line3 : lineStr,
      total : `Total : $${String(pdfGenExData.total_price)}`,
      sender_email : pdfGenExData.vendor_addr.email,
      sender_phone_num : pdfGenExData.vendor_addr.phone,
    }];

    for (const el of pdfGenExData.line_items) { 

      newSchema[0][String(el.id)+`desc-`+String(el.item.name)] = {
        type : "text",
        position: { x: 145 , y: FIXED_COOR_GRID_Y + el.line_number * 15 },
        width : 55,
        height : 30,
      };

      newSchema[0][String(el.id)+`name-`+String(el.item.name)] = {
        type : "text",
        position: { x: 10 , y: FIXED_COOR_GRID_Y + el.line_number * 15 },
        width : 55,
        height : 30,
      };

      newSchema[0][el.id+`quan-`+el.quantity] = {
        type : "text",
        position: { x: 75 , y: FIXED_COOR_GRID_Y + el.line_number * 15 },
        width : 55,
        height : 30,
      };

      newSchema[0][el.id+`price-`+el.unit_price] = {
        type : "text",
        position: { x: el.unit_price <= 10 ? 110 : 108, y: FIXED_COOR_GRID_Y + (el.line_number * 15) },
        width : 55,
        height : 30,
      };

      inputs[0][String(el.id)+`desc-`+String(el.item.name)] = el.description ?? "";
      inputs[0][String(el.id)+`name-`+String(el.item.name)] = el.item.name ?? "";
      inputs[0][String(el.id)+`quan-`+String(el.quantity)] = String(el.quantity);
      inputs[0][el.id+`price-`+el.unit_price] = `$${(el.unit_price)}`;
    }

    return inputs
  }

const getFullAddress = <T extends { 
    line1?: string | null;
    line2?: string | null;
    city?: string | null;
    state?: string | null;
    postal_code?: string | null;
    country?: string | null;
  }>(target: T): string => { 
    const ret = [ 
      target?.line1,
      target?.line2,
      target?.city,
      target?.state,
      target?.postal_code,
      target?.country
    ]

    // filter all falsy values )) it's a trick.
    return ret.filter(Boolean).join(" ");
  }

  
  const loadJsonExample = async () => {
    const res = await fetch("PO1.json");
    const json = await res.json();

    const totalItem = json.line_items.map((v : LineItem) => ({
      ...v,
      total_price: v.unit_price * v.quantity
    }));

    const totalPrice = totalItem.reduce((acc: number, cur: LineItem) => acc + cur.total_price , 0);
    setPdfGenExData({
      ...json,
      line_items: totalItem , 
      total_price: totalPrice , 
      full_addr_vender: getFullAddress(json.vendor_addr), 
      full_addr_shipping: getFullAddress(json.shipping_addr)
    }); 
  }

  const onClickGenPdf = async () => { 
    const inputs = getSchemeInput();

    // coordinates hard coded 
    // TODO : I don't think this is the best way. We might as well find a better way to generate a pdf.
    // I guess we can try to change it to another pdf generated library, such as 'React pdf' or 'jsPdf' ??. 
    // https://pdfme.com/docs/getting-started
    const pdf = await generate({ template , inputs });
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  }

  useEffect(() => { 
    loadJsonExample();
  }, [])

  return (
    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' 
    onClick={onClickGenPdf}>Give me a Pdf</button>
  )
}

export default Hero
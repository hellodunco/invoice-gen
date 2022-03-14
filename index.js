const invoice_num = Math.floor(Math.random() * 900) + 1000;


const invoice = {
  shipping: {
    name: "John Mwangi",
    address: "1234 Kimathi Street",
    city: "Kilimani",
    county: "Nairobi",
    country: "Kenya",
    postal_code: 10103
  },
  items: [
    {
      item: "TC 100",
      description: "Toner Cartridge",
      quantity: 2,
      amount: 6000
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_num
};


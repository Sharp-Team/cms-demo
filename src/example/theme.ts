const productDetailThemeJson = `
{
  "name":{
     "type":"string",
     "fontSize":40,
     "fontWeight":"bold",
     "margin":"20px 0px 15px"
  },
  "description":{
     "title":{
        "type":"string",
        "fontSize":40,
        "fontWeight":"bold",
        "margin":"20px 0px 15px"
     },
     "content":{
        "type":"html"
     }
  },
  "price":{
     "type":"number"
  },
  "action":{
     "type":"button",
     "backgroundColor":"#d1006c",
     "color":"white",
     "borderRadius":4,
     "width":200,
     "height":40,
     "textTransform":"none",
     "margin":"5px 5px"
  }
}
`;

const productDetailTheme = JSON.parse(productDetailThemeJson);

export { productDetailTheme };

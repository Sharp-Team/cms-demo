const productDetailThemeJson = `
{
  "01":{
     "type":"string",
     "fontSize":40,
     "color": "red",
     "fontWeight":"bold",
     "margin":"20px 0px 15px"
  },
   "02":{
      "type":"string",
      "fontSize":40,
      "fontWeight":"bold",
      "margin":"20px 0px 15px"
   },
   "03":{
      "type":"html"
   },
  "04":{
     "type":"number"
  },
  "05":{
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

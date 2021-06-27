# Demo

## Theme

```json
{
  "name": {
    "type": "string",
    "fontSize": 40,
    "fontWeight": "bold",
    "margin": "20px 0px 15px"
  },
  "description": {
    "title": {
      "type": "string",
      "fontSize": 40,
      "fontWeight": "bold",
      "margin": "20px 0px 15px"
    },
    "content": {
      "type": "html"
    }
  },
  "price": {
    "type": "number"
  },
  "action": {
    "type": "button",
    "backgroundColor": "#d1006c",
    "color": "white",
    "borderRadius": 4,
    "width": 200,
    "height": 40,
    "textTransform": "none",
    "margin": "5px 5px"
  }
}
```

## Product

```json
{
  "name": "This is product name",
  "description": {
    "title": "This is product description",
    "content": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><img src='https://www.cnet.com/a/img/yo0j9mvUs0WmG8QHtoZIRuV4IYc=/1200x675/2021/03/29/1c2386e1-53b8-4a19-803d-08abd7ffe77e/floom.jpg' alt='' style='width: 300px;'></p><p><br></p><p><div><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div></p><p><h2>Services</h2><table style='width: 100%;'><tbody><tr><td style='width: 30.8661%;'>Where does it come from</td><td style='width: 68.9764%;'>Contrary to popular belief, Lorem Ipsum is not simply random text</td></tr><tr><td style='width: 30.8661%;'>Where can I get some</td><td style='width: 68.9764%;'>There are many variations of passages of Lorem Ipsum available</td></tr><tr><td style='width: 30.8661%;'>Others</td><td style='width: 68.9764%;'>Others<br></td></tr></tbody></table><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></p><p><br></p>"
  },
  "services": [],
  "price": 0,
  "actions": [
    {
      "name": "Action 1",
      "link": "https://google.com",
      "enable": true
    },
    {
      "name": "Action 2",
      "link": "https://google.com",
      "enable": false
    },
    {
      "name": "Action 3",
      "link": "https://google.com",
      "enable": true
    },
    {
      "name": "Action 4",
      "link": "https://google.com",
      "enable": true
    },
    {
      "name": "Downloads",
      "link": "https://google.com",
      "enable": true
    }
  ]
}
```

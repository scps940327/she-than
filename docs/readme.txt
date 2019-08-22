1) Header 為依照 ./data.json 檔生成的架構，所以如果未來 Header 部分有做修改(如社群連結等等)，請維護 ./data.json
   ** ./data.json 是以 XMLHttpRequest 的方式載入，所以如果在本地開啟是無法讀取的，放到線上空間有網址之後才能夠讀取(如同在 GitHub Page)上一樣

2) Header 社群連結的 icon 控制是寫在 type: 的部份，並使用 fontAwesome 的 class 來做顯示
    {
      "isTop": "true",
      "link": [
        {
          "type": "fab fa-facebook-square", // fontAwesome icon class
          "link": "",
          "target": "_blank"
        },
        {
          "type": "fab fa-youtube-square", // fontAwesome icon class
          "link": "",
          "target": "_blank"
        },
        {
          "type": "fas fa-envelope-square", // fontAwesome icon class
          "link": "",
          "target": "_blank"
        },
        {
          "type": "fab fa-line", // fontAwesome icon class
          "link": "",
          "target": "_blank"
        }
      ]
    }
 
   詳細的 icon class 的部份請參考: https://fontawesome.com/icons?from=io

3) ./page.js 寫的是內頁左側目錄部分的操作
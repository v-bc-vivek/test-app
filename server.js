var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))
var mongo = require('mongojs')
var db = mongo('modelMake',['modelMakeList'])
var data = [  
   {  
      "Key":"Ford",
      "Value":"Ford",
      "Associated":[  
         {  
            "Key":"Edge",
            "Value":"Edge",
            "Count":0,
            "img":"http://static.usnews.rankingsandreviews.com/images/Auto/custom/13366/2017_Ford_Edge_1.jpg",
            "Associated":null
         },
         {  
            "Key":"Escape",
            "Value":"Escape",
            "Count":0,
            "img":"http://o.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/http://o.aolcdn.com/commerce/autodata/images/USC70FOS131A021001.jpg",
            "Associated":null
         }
      ]
   },
   {  
      "Key":"Acura",
      "Value":"Acura",
      "Associated":[  
         {  
            "Key":"ILX",
            "Value":"ILX",
            "Count":0,
            "img":"http://st.motortrend.com/uploads/sites/10/2016/05/2017-acura-ilx-technology-plus-a-spec-sedan-angular-front.png",
            "Associated":null
         },
         {  
            "Key":"MDX",
            "Value":"MDX",
            "img":"http://media.caranddriver.com/images/16q1/665058/2017-acura-mdx-photos-and-info-news-car-and-driver-photo-667193-s-original.jpg",
            "Count":0,
            "Associated":null
         }
      ]
   }
]
function insertIntialData(){
	db.modelMakeList.drop();
	db.modelMakeList.insert({data},function (err,docs) {
		
	})

}
insertIntialData();

app.get('/makedataList',function(req,response){
	console.log("request received")
	db.modelMakeList.find(function (err,docs) {
		
		response.json(docs);
	})
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

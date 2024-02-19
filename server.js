const express = require('express');

const cors = require('cors');




const app = express();



app.use(cors());
//tạo cookie gắn cookie
app.use(express.json());

app.get('/api/v2/greeting', (req, res) => {

    res.json({ "id":9186,"uid":"71461828-1c4d-41bc-bb80-fca6458dbf45","city":"Deckowfort","street_name":"Jones Ways","street_address":"3404 Joaquina Tunnel","secondary_address":"Apt. 469","building_number":"474","mail_box":"PO Box 77","community":"Eagle Square","zip_code":"31205-9563","zip":"93454","postcode":"72579","time_zone":"Europe/Belgrade","street_suffix":"Overpass","city_suffix":"burgh","city_prefix":"North","state":"Utah","state_abbr":"NY","country":"Rwanda","country_code":"UM","latitude":84.63117513704222,"longitude":-96.52567833532781,"full_address":"Suite 698 404 Witting Brooks, Basilland, NE 30530" });
});
app.post('/api/v2/greeting', (req, res) => {
    const data= req.body;
    console.log("this is post api")
    res.json({"name":"lucas" });
});
app.put('/api/v2/greeting', (req, res) => {
    const data= req.body;
    console.log(body)
    res.json({"name":"lucas" });
});


app.listen(3001,()=>{
    console.log('Server is running');
})

//AUTHENTICATIO là so sánh dữ liệu mà mình nhập với dữ liệu có trên database
//AUTHORIZATION
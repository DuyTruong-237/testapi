const express = require('express');

const cors = require('cors');




const app = express();



app.use(cors());
//tạo cookie gắn cookie
app.use(express.json());

app.get('/api/v2/greeting', (req, res) => {
    res.json({ message: 'Hello, world!' });
});


app.listen(3001,()=>{
    console.log('Server is running');
})

//AUTHENTICATIO là so sánh dữ liệu mà mình nhập với dữ liệu có trên database
//AUTHORIZATION
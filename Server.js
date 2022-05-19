// Path i Çağırdık
var path = require("path");
// Express i Çağırdık
var express = require("express");
// app imizi oluşturduk
var app = express();
//App i çağırarak bir gönderi oluşturduk 
app.get('/', function (req, res) {
    // Gönderilecek dosyayı yazdık
    res.sendFile(path.join(__dirname, '/index.html'));
});
// app in dinleyeceği port numarasını yazdık
app.listen(8080);

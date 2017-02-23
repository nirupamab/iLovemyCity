
exports.home=function(req,res){
    res.render('home',{title:'iLoveMyCity',
                        headline:'We belive that every city have something to say'
                    });
}
exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;
    if(cityName=='berlin')
    {
        title="Berlin";
        heading="Berlin where love is in the air";
    }
    else if(cityName=='paris')
    {
        title="Paris";
        heading="Good talkers are only found here";
    }
    else
    {
        title="London";
        heading="Old beatiful buildings are found here";
    }
}

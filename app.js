$(function(){
    var model = {
        init: function() {
            this.data = data;
        }
    };

    var octopus = {
        
        

        getSum: function() {
            
            var BestSum={
                day:"",
                min:"",
                max:"",
                condition:""
            };
        
            var res=[];
            
        
            model.data.forEach(function(day){
                var c=octopus.existDay(res,day.day);
                console.log(c);
                if(c>-1){
                    console.log("1");
                    BestSum.day=day.day;
                    if (res[c].min>day.temperature){
                        BestSum.min=day.temperature;
                    }
                    else{
                        BestSum.min=res[c].min;
                    }
                    
                    if (res[c].max<day.temperature){
                        BestSum.max=day.temperature;
                    }
                    else{
                        BestSum.max=res[c].max;
                    }
                    
                  
                    BestSum.condition=day.condition;
                    res[c]=jQuery.extend(true, {}, BestSum);
                }
                else{
                    console.log("2");
                    BestSum.day=day.day;
                    BestSum.min=day.temperature;
                    BestSum.max=day.temperature;
                    BestSum.condition=day.condition;
                    res.push(jQuery.extend(true, {}, BestSum));
                }
            });
            
            return res;
        },

        existDay: function(res,day) {
            var index=0;
            var flag=-1;
            res.forEach(function(obj){
                console.log("c: "+obj.day+" "+day);
                if(obj.day==day){
                    console.log("aaaa: "+index);
                    
                    flag=index;
                    
                }
                index++;
            });
            
            
                return flag;
            
        },

        init: function() {
            model.init();
            view.init();
        }
    };

    var view = {
        init: function() {
            
            this.res = $('#summary');
            view.render(octopus.getSum());
        },
        render: function(Sum){
            var htmlStr = '';
            Sum.forEach(function(day){
                htmlStr+=  "<li>"+
                        "<div class=\"icon\">"+
                        "<img src=\"img/icons/"+day.condition+".png\">"+      
                        "</div>"+
                        "<div class=\"stats\">"+  
                        "<h2>"+day.day+"</h2>"+
                        "<strong>min</strong> "+day.min+"ºC"+
                        "<strong>max</strong> "+day.max+"ºC"+   
                        "</div>"+ 
                        "</li>" ;
            });
            this.res.html( htmlStr );
        }
    };

    octopus.init();
});


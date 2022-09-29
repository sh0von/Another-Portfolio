---
logo: '/static/projects/icon-masonite.png'
title: 'WolframAlpha Messenger Bot'
description: 'A bot that helps facebook user to get results from WA dierectly on Messenger. Happy Solving'
text: ''
location: 'Chittagong, BD'
role: ['Coder']
startDate: '2022'
endDate: '2022'
spaces: ['BOT','MESSENGER']
platforms: ['Web', 'Mobile', 'Tablet']
---


### Code

```js
// spotify.js


var Client = require('node-wolfram');

  var Wolfram = new Client('98U7W6-9R4AHKGW2T');  
  //console.log("wolfram name")
  //console.log(Wolfram)
  function rateProf(text) {

    var callback = function(e,result){
        if (!result) {
            console.log("return");
            return;
        }
        console.log("in"); 
    //Wolfram.query(text1, function(err, result) {
    //if(err)
     //   console.log(err);
    //else
    //{ 
        var flag = 0
        console.log("inside"); 
        if(result)
        {
            console.log("Result emp:")
            if(result.queryresult)
            {
                console.log("QueryResult emp:")
                if(result.queryresult.pod)
                {
                    console.log("Pod emp:")
                    for(var a=1; a<(result.queryresult.pod.length>3?3:result.queryresult.pod.length); a++) //
                    {
                        var pod = result.queryresult.pod[a];
                        if(!pod)
                        {
                            console.log("return");
                            //return;
                        }
                        else
                        {
                            console.log(pod.$.title,": ");
                            for(var b=0; b<(pod.subpod.length>3?3:pod.subpod.length); b++) //please fix the buggy JavaScript code
                            {
                                var subpod = pod.subpod[b];
                                if(subpod)
                                {
                                    console.log("Subpod")
                                    for(var c=0; c<subpod.plaintext.length; c++)
                                    {
                                        var text = subpod.plaintext[c];
                                        console.log('\t', text);
                                        sendTextMessage(sender,text)
                                        flag = 1

                                    }
                                }
                            }
                            //return;
                        }
                    }
                }
            }
        }
        if(flag == 0)
        sendTextMessage(sender,"Sorry!")
        //sendTextMessage(sender,"http://www.wolframalpha.com/input/?i="+text)
    }

                    //console.log("


    Wolfram.query(text,callback);
};
```
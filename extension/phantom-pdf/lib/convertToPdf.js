﻿var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

output = system.args[2];
page.viewportSize = { width: 600, height: 600 };
page.paperSize = {
     format: "", 
     orientation: 'portrait', 
     margin: system.args[3] || '1cm',
     footer: {
          height: "1cm",
          contents: phantom.callback(function(pageNum, numPages) {
              return "<h1 style='text-align:right'>Footer" + pageNum + " / " + numPages + "</h1>";
          })
     }
};


//page.content = '<html><body><p>Hello world</p></body></html>';
page.open(system.args[1], function() {
    page.render(output);
    phantom.exit();
});
   

//page.content = content;
//page.setContent(page.content, "http://localhost:3000/");
//var fn = function(done) {
//    window.setTimeout(function() {
        
//        //rendering faild, try later
//        if (!page.render(output)) {
//            console.log("rendering failed, try later");
//            return fn(done);
//        }
        
//        console.log("done");

//        done();
//    }, 50);
//};

//fn(function() {
//    phantom.exit();
//});



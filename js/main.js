// 1. Напишите функцию разбора query-строки в набор параметров.
/*function parseQuery(query) {
    if (!query) return false;
    var paramsArray=query.split("&") || query;
    var paramsObject={};
    paramsArray.forEach(function(element){
        paramsObject[element.split("=")[0]]=element.split("=")[1] || true;
    });
    return paramsObject;
}

console.log(parseQuery("abc"));
console.log(parseQuery("a=1"));
console.log(parseQuery("a=1&b=2"));
console.log(parseQuery("a=1&b[]=1&b[]=2"));
*/

(function(){
    //задача №1
    console.log("1. Напишите функцию разбора query-строки в набор параметров.");
    var query="a=1&b=2&c=3&d&e[]=4&e[]=5&f[a]=6&f[b]=7";
    function parseQuery (query){
        if (!query) return false;
        var result={};
        var testreg=new RegExp("([^=&]+)=*([^&]*)", "g");
        query.replace(testreg,function(full,key,val,offset,string){
            result[key]=(result[key] ? result[key]+",":"")+val;
            console.log(offset+string);
        });
        return result || false;
    }
    var result=parseQuery(query);
    console.log(result);

    //задача №2
    //будем использовать объект result, возвращаемый из предыдущей задачи
    var someUrl="http://somesite.domain/index.html",
        newUrl;

    console.log("2. Допустим, параметры http-запроса хранятся как свойства объекта. Напишите функцию сериализации параметров в query-строку с добавлением к произвольному url.");
    function serializeObjectToQuery (queryObject) {
        var result=[];
        if (typeof queryObject!=='object') return false;
        for (var key in queryObject) {
            result.push(key+(queryObject[key]==="" ? "" : "="+queryObject[key]));
//            console.log(key);
        }
        return result.join('&');
    }
    newUrl=serializeObjectToQuery (result);
    console.log(newUrl);
})();
/*
(function(){
    var object1 = {
        elements: [{
            tag     : "input",
            id      : "inputID1",
            name    : "inputName1",
            type    : "text",
            css     : "border: 1px solid #ffff00; font-size: 18px;"
        },{
            tag     : "input",
            id      : "inputID2",
            name    : "inputName2",
            type    : "text",
            css     : "font-size: 18px; background: #ff0000;",
            value   : "SomeValue"

        },{
            tag     : "select",
            id      : "selectID1",
            name    : "select1",
            multiple: true,
            css     : "font-size: 18px; background: #ff0000;",
            elements: [{
                tag     : "option",
                value   : "value1",
                selected: true,
                text    : "Option text 1"
            },{
                tag     : "option",
                value   : "value2",
                text    : "Option text 2"
            },{
                tag     : "option",
                value   : "value3",
                text    : "Option text 3"
            }]
        },{
            tag: "input",
            type: "submit",
            value: "Submit form"
        }]
    };


    console.log(object1);
})();

*/


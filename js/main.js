window.onload = function(){

    //Request button handler
    document.getElementById('btn').addEventListener('click', request.request, false);
};

var d = document;
var w = window;
var request = {};

//Cross Ajax object
function createAjax(){
    if(typeof(XMLHttpRequest) == 'undefined')
        return new ActiveXObject('Microsoft.XMLHTTP');
    else return new XMLHttpRequest();
}

//Send POST request
request.request = function(){

    var location = w.location.href.split('/');

    //form the data object
    var data = {
        id : location[3].replace(/[^0-9]/gim,'')
    };

    //form the _POST
    var post = 'data='+JSON.stringify(data);

    var h = createAjax();
    h.open('POST', '/query.php', true);
    h.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    h.send(post);
    h.onreadystatechange = function(){

        if(h.readyState == 4){

            //Parse Json object
            request.parse(JSON.parse(h.responseText.trim()));
        }
    };
};

//Parse response
request.parse = function(obj){

    var tbl = d.getElementById('response-tbl');
        tbl.className = 'tbl block';

    for(var i = 0; i < obj.length; i++){

        //Initiate elem vars
        var tr            = d.createElement('TR'),
            id            = d.createElement('TD'),
            area          = d.createElement('TD'),
            rating        = d.createElement('TD'),
            inn           = d.createElement('TD'),
            kpp           = d.createElement('TD'),
            name          = d.createElement('TD'),
            name_full     = d.createElement('TD'),
            address       = d.createElement('TD'),
            address_legal = d.createElement('TD'),
            anno_short    = d.createElement('TD'),
            anno          = d.createElement('TD'),
            phone         = d.createElement('TD'),
            fax           = d.createElement('TD'),
            site          = d.createElement('TD'),
            location      = d.createElement('TD');

        id.innerHTML            = obj[i].id;
        area.innerHTML          = obj[i].area;
        rating.innerHTML        = obj[i].rating;
        inn.innerHTML           = obj[i].inn;
        kpp.innerHTML           = obj[i].kpp;
        name.innerHTML          = obj[i].name;
        name_full.innerHTML     = obj[i].name_full;
        address.innerHTML       = obj[i].address;
        address_legal.innerHTML = obj[i].address_legal;
        anno_short.innerHTML    = obj[i].anno_short;
        anno.innerHTML          = obj[i].anno;
        phone.innerHTML         = obj[i].phone;
        fax.innerHTML           = obj[i].fax;
        site.innerHTML          = obj[i].site;
        location.innerHTML      = obj[i].location;

        tbl.appendChild(tr);
            tr.appendChild(id);
            tr.appendChild(area);
            tr.appendChild(rating);
            tr.appendChild(inn);
            tr.appendChild(kpp);
            tr.appendChild(name);
            tr.appendChild(name_full);
            tr.appendChild(address);
            tr.appendChild(address_legal);
            tr.appendChild(anno_short);
            tr.appendChild(anno);
            tr.appendChild(phone);
            tr.appendChild(fax);
            tr.appendChild(site);
            tr.appendChild(location);
    }

};

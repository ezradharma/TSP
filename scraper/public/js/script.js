// let txt = "";

// function read() {
//     $('.Store_Info').click(function() {
//         txt = $(this).text();
//     });
// }

function hello() {
    return document.getElementsByTagName('p').innerHTML;
}

module.exports.hello = hello;
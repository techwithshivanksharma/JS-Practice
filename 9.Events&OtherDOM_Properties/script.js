//console.log() and console.dir()
console.log(document.getElementsByTagName('span')[0]);
console.dir(document.getElementsByTagName('span')[0]);

//nodeName and tagName
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);
console.log(document.body.firstChild.tagName); // It will show undefined because first element is text node not an element node.
console.log(document.body.firstElementChild.tagName);// only works for element tags

//innerHTML and outerHTML
console.log(document.getElementById('sp1').innerHTML);
console.log(document.getElementById('sp1').outerHTML);

//data and nodeValue for non element nodes
console.log(document.body.firstChild.nodeValue); //'Hello World!'


//textContent
console.log(document.getElementById('sp1').textContent);
document.getElementById('p1').textContent = 'Paragraph1';

// hidden with DOM
document.getElementById('element').hidden = true;

![the newsprint icon](ico1.png)

[![](https://data.jsdelivr.com/v1/package/gh/jaketrock/newSprint/badge)](https://www.jsdelivr.com/package/gh/jaketrock/newSprint)

# newSprint
 a nice tool for quick reading

# Live demo: [here](https://cleanconnect.us/programs/newSprint/demo.html)


# for bloggers/news site owners/whatever
Newsprint(4.3k) is a tool that reduces eye strain by using large text, in one place so your eyes don't have to travel to read it. I've found it often allows me to be more attentive and retain more information than normal plaintext reading. I've created this as a dead-simple extension, however, some programming expertise is recommended in its implementation, as it requires you to specify how its text will be inputted.

If you're a blog owner, and want to just paste something and have it work, the following button should work for you:
```
   <img onMouseOver="this.style.boxShadow='0 0 5px 0 #f00'" onMouseOut="this.style.boxShadow=''" onclick="(function(d){function x(){nsprint((new Readability(document.cloneNode(true))).parse().textContent)}if(!window.nsprint){var p='https://cdn.jsdelivr.net/gh/jaketrock/';var t='text/javascript';var h=d.head;var s=d.createElement('script'),c=d.createElement('script');c.src=p+'rb-c-stage/Readable_closure.js';s.src=p+'newSprint/js/ns_opt.js';s.type=t;c.type=t;s.onload=function(){d.head.appendChild(c)};c.onload=function(){x()};h.appendChild(s)}else if(!window.nsht)x()})(document);" src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint/ico2.png">
```
However if you choose to have a custom implementation you can use the following:
```
<button onclick="(function(a){var b=a.createElement('script');b.src='https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/js/ns_opt.js';b.type='text/javascript';b.onload=function(){nsprint(a.getElementsByClassName('sprtxt'),a.getElementById('sprFocus'))};a.head.appendChild(b)})(document);"><img src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/ico1.png" height="50%" width="50%"></button>
```
    To customize this script to work, edit in the parenthesis after the part that says "nsprint".

* Part 1 is the input selector, any tag with this class will be fed into the reader

* (optional) Part 2 is the output, where the reader is rendered

* (optional) Part 3 is the custom css if you don't like ours
```
nsprint(d.getElementsByClassName('sprtxt'),d.getElementById('sprFocus'),"http://example.com/custom.css")
```


Here's a quick example for plain html, if you've downloaded this repo, you can try it out with demo.html 

Method 1: getting data from selected html tags
    
    <script src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/js/ns_opt.js"></script><!--critical component #0, you probably already assumed this, but you're going to need to import this script-->
    <button onclick="nsprint(document.getElementsByClassName('sprtxt'))" style="flex-direction:row;display:flex;"><!--critical component #1, this specifies what text will be dumped into the reader, in this case, any element with the class sprtxt-->
        <p>Read with </p><img src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/ico1.png" height="50%" width="50%">
    </button>
    <div class="sprFocus"></div><!--critical component #2, this provides a place for the script to inject the reader-->
    <p class="sprtxt">lorem ipsum</p>
    <p class="sprtxt">lorem ipsum</p>
    <p class="sprtxt">lorem ipsum</p>
    <p class="sprtxt">lorem ipsum</p>
    <a href="https://google.com" class="sprtxt">lorem ipsum</a><!--yes, we do support links!-->
    <p class="sprtxt">lorem ipsum</p>
    <p class="sprtxt">lorem ipsum</p>
    <p class="sprtxt">lorem ipsum</p>
    
Method 2: raw text input:

    <script src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/js/ns_opt.js"></script><!--critical component #0, you probably already assumed this, but you're going to need to import this script-->
    <script>
    var text="Vel fringilla est ullamcorper eget nulla facilisi. Massa enim nec dui nunc mattis. Viverra orci sagittis eu volutpat. Bibendum arcu vitae elementum curabitur. Congue quisque egestas diam in arcu cursus euismod. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Vitae congue eu consequat ac. Arcu felis bibendum ut tristique et. In cursus turpis massa tincidunt dui ut ornare. Amet nulla facilisi morbi tempus. Nibh praesent tristique magna sit amet purus gravida quis blandit. Consequat interdum varius sit amet mattis vulputate enim. Quis blandit turpis cursus in hac habitasse. Porttitor lacus luctus accumsan tortor posuere ac ut.";
    </script>
    <button onclick="nsprint(text)" style="flex-direction:row;display:flex;"><!--critical component #1, this specifies what text will be dumped into the reader, in this case, the text contained in variable "txt"-->
        <p>Read with </p><img src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/ico1.png" height="50%" width="50%">
    </button>
    
    
# for devs
This project has a remarkably simple workflow. css is in the css folder, js in the js folder, and the tests for each are in the tests folder. To compile the scripts to their optimized counterparts, use cmp.sh(first you have to use `npm i` to install the dependencies used to compile the scripts).

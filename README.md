![the newsprint icon](ico1.png)
# newSprint
 a nice tool for quick reading

# for bloggers/news site owners/whatever
Newsprint(4.3k) is a tool that reduces eye strain by using large text, in one place so your eyes don't have to travel to read it. I've found it often allows me to be more attentive and retain more information than normal plaintext reading. I've created this as a dead-simple extension, however, some programming expertise is recommended in its implementation, as it requires you to specify how its text will be inputted.

If you're a blog owner, and want to just paste something and have it work, the following button should work for you:
```
    <button onclick="(function(a){var b=a.createElement('script'),c=a.createElement('script');c.src='https://cdn.jsdelivr.net/gh/mozilla/readability/Readability.js';b.src='https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/js/ns_opt.js';b.type='text/javascript';c.type='text/javascript';b.onload=a.head.appendChild(c);c.onload=function(){nsprint((new Readability(document.cloneNode(!0))).parse().textContent)};a.head.appendChild(b)})(document);"><img src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/ico1.png" height="50%" width="50%"></button>
```
However if you choose to have a custom implementation you can use the following:
```
        <button onclick="(function(a){var b=a.createElement('script');b.src='https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/js/ns_opt.js';b.type='text/javascript';b.onload=function(){nsprint(a.getElementsByClassName('sprtxt'),a.getElementById('sprFocus'))};a.head.appendChild(b)})(document);"><img src="https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/ico1.png" height="50%" width="50%"></button>
```
    To customize this script to work, edit in the parenthesis after the part that says "nsprint".

    Part 1 is the input selector, any tag with this class will be fed into the reader

    (optional) Part 2 is the output, where the reader is rendered

    (optional) Part 3 is the custom css if you don't like ours
```

    nsprint(d.getElementsByClassName('sprtxt'),d.getElementById('sprFocus'),"http://example.com/custom.css")
```


Here's a quick example for plain html, if you've downloaded this repo, you can try it out with demo.html 

    
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
    

# for devs
This project has a remarkably simple workflow. One simply opens demo.html in a browser of choice, and then edits ns_dev to their liking.
Then in a bash(or terminal as some call it) window, runs cmp.sh to compile the code with google closure into ns_opt.js, which is the 
script referenced in demo, you'd simply refresh demo, and click the button to see if it runs correctly
(sorry I didn't put in any unit testing :S ).

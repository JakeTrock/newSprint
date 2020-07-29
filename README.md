![the newsprint icon](ico1.png)
# newSprint
 a nice tool for quick reading

# for bloggers/news site owners/whatever
    Newsprint is a tool that reduces eye strain by using large text, in one place so your eyes don't have to travel to read it. I've found it often allows me to be more attentive and retain more information than normal plaintext reading. I've created this as a dead-simple extension, however, some programming expertise is recommended in its implementation, as it requires you to specify how its text will be inputted.
    Here's a quick example, if you've downloaded this repo, you can try it out with demo.html 
    '''
    <script src="ns_opt.js"></script><!--critical component #0, you probably already assumed this, but you're going to need to import this script-->
    <button onclick="nsprint(document.getElementsByClassName('sprtxt'))" style="flex-direction:row;display:flex;"><!--critical component #1, this specifies what text will be dumped into the reader, in this case, any element with the class sprtxt-->
        <p>Read with </p><img src="ico1.png" height="50%" width="50%">
        <p id="lcipl"></p>
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
    '''

# for devs
    This project has a remarkably simple workflow. One simply opens demo.html in a browser of choice, and then edits ns_dev to their liking.
    Then in a bash(or terminal as some call it) window, runs cmp.sh to compile the code with google closure into ns_opt.js, which is the 
    script referenced in demo, you'd simply refresh demo, and click the button to see if it runs correctly
    (sorry I didn't put in any unit testing :S ).

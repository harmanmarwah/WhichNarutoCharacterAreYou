{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function doGet() \{\
  return HtmlService.createHtmlOutputFromFile('index.html')\
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);\
\}\
\
// Use this code for Google Docs, Forms, or new Sheets.\
function onOpen() \{\
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.\
      .createMenu('Dialog')\
      .addItem('Open', 'openDialog')\
      .addToUi();\
\}\
\
function openDialog() \{\
  var html = HtmlService.createHtmlOutputFromFile('index.html')\
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);\
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.\
      .showModalDialog(html, 'Dialog title');\
\}\
\
\
function postit(params) \{\
  var dataS = SpreadsheetApp.openById("1e5F84YqUEtvci1crXWiFXLQJm0oR15PcL-V6Ljnlgp0");\
  var sheet = dataS.getSheetByName("Sheet1"); \
  var lastRow = sheet.getLastRow() + 1;  \
  // The row below the last row of data \
  \
  sheet.getRange(lastRow, 1).setValue(new Date()) // adds the time\
  var useremail = Session.getActiveUser().getEmail(); \
  sheet.getRange(lastRow, 2).setValue(useremail) // adds the EMAIL\
  // Writes in the form entries\
  for(p=0;p<params.length;p++) \{\
   sheet.getRange(lastRow, p+3).setValue(params[p])\
  \}\
  // PASTE THE BIG BLOCK OF CODE IN STEP 7 BELOW THIS ....\
  console.log(params);\
    var answer1 = params[0];   //  \
    var answer2 = params[1];   // \
    var answer3 = params[2];   //  \
    var answer4 = params[3];   // \
    // If you have more than 4 answers, you will need more lines like the ones below\
    // To use these lines use, remove the \'93//\'94 from the beginning of the line. \
    // \'93//\'94 means ignore everything after it. Used for COMMENTS in your code\
    var answer5 = params[4];   // \
    var answer6 = params[5];   // \
    var answer7 = params[6];   // \
    var answer8 = params[7];    \
    \
    \
    // This is the bit to customise, it write the message depending on the survey.\
    \
    //    LIST OF POSSIBILITIES\
    //                   0                1               2               3               4                5\
    var people = ["Naruto Uzumaki","Sasuke Uchiha","Sakura Haruno","Shikamaru Nara","Ino Yamanaka","Choji Akimichi"]\
    var people_images = ["https://newvitruvian.com/images/kunai-vector-naruto-minato-1.png","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/31093469-494f-4138-94bf-b70948578b43/d67s61u-e64865a0-9909-4c23-a6a1-55017b944a81.png/v1/fill/w_738,h_1083,strp/sasuke_uchiha_chidori_render_by_hiyori456_d67s61u-pre.png","https://i.pinimg.com/originals/6b/37/91/6b3791ce5ab259bcd98aeee211e4a201.png","https://i.pinimg.com/originals/52/ff/57/52ff57040dd2cc38a78cd2d9aa6ad530.png","https://rei.animecharactersdatabase.com/uploads/chars/12602-1409330041.png","https://vignette.wikia.nocookie.net/eroninja/images/c/cd/Choji_render_2_by_king_sniper_dj-d6y9inu.png/revision/latest?cb=20180124150547"]\
    // You need as many zeros as things in list\
    var score = [0,0,0,0,0,0]   // 4 zeros, because 4 people in my list, you may need to add more\
    \
    // You will score point for the answer that matches the person\
    // score[..]++ means add one\
    \
    if(answer1 == "Water") \{\
      score[2]++ // means add one to the score of people[2] in the list = Ringo\
      score[4]++\
    \}\
    if(answer1 == "Wind") \{\
      score[0]++\
    \}\
    if(answer1 == "Fire") \{\
      score[1]++\
      score[5]++   // means add 2\
    \}\
    if(answer1 == "Water") \{\
      score[3]++ // means add 3\
    \}\
    \
    \
    if(answer2 == "Ok... wait, teacher what are you doing, don't leave me") \{\
      score[2]++\
    \}\
    if(answer2 == "I don't have time to play Around") \{\
      score[1]++\
    \}\
    if(answer2 == "I never Give up, Give it to me") \{\
      score[0]++\
    \}\
    if(answer2 == "Too much of a Drag") \{\
      score[3]++\
    \}\
    if(answer2 == "No Thanks") \{\
      score[4]++\
    \}\
    if(answer2 == "Let me first eat") \{\
      score[5]++\
    \}\
   \
    if(answer3 == "Sad") \{\
      score[1]++\
    \}\
    if(answer3 == "Lazy") \{\
      score[3]++\
    \}\
    if(answer3 == "Shy") \{\
      score[2]++\
    \}\
    if(answer3 == "Lonely") \{\
      score[0]++\
    \}\
     if(answer3 == "Happy") \{\
      score[5]++\
    \}\
     if(answer3 == "Short Tempered") \{\
      score[4]++\
    \}\
  \
    if(answer4 == "Dumpling") \{\
      score[1]++\
    \}\
    if(answer4 == "Barbeque") \{\
      score[3]++\
    \}\
    if(answer4 == "Ice Cream") \{\
      score[2]++\
    \}\
    if(answer4 == "Ramen") \{\
      score[0]++\
    \}\
   if(answer4 == "Chocolate") \{\
      score[4]++\
    \}\
   if(answer4 == "Chips") \{\
      score[5]++\
    \}\
  \
  if(answer5 == "Go wander in the forest alone") \{\
      score[1]++\
    \}\
    if(answer5 == "Play chess") \{\
      score[3]++\
    \}\
    if(answer5 == "Sleep all day") \{\
      score[0]++\
    \}\
    if(answer5 == "Hang out with friends") \{\
      score[2]++\
    \}\
    if(answer5 == "Do work because you have to make that money") \{\
      score[4]++\
    \}\
    if(answer5 == "Just eat. I have to stuff my tummy") \{\
      score[5]++\
    \}\
   \
    if(answer6 == "Snake") \{\
      score[1]++\
    \}\
    if(answer6 == "Dog") \{\
      score[3]++\
      score[4]++\
    \}\
    if(answer6 == "Fox") \{\
      score[0]++\
    \}\
    if(answer6 == "Butterfly") \{\
      score[2]++\
      score[5]++\
    \}\
  \
   if(answer7 == "Walk away, its their fight") \{\
      score[1]++\
    \}\
    if(answer7 == "Step in before someone gets hurt") \{\
      score[3]++\
    \}\
    if(answer7 == "Join in, its fun") \{\
      score[0]++\
    \}\
    if(answer7 == "Call for help") \{\
      score[2]++\
    \}\
    if(answer7 == "Yell at everyone who is fighting") \{\
      score[4]++\
    \}\
    if(answer7 == "Grab everyone who is fighting") \{\
      score[5]++\
    \}\
      \
   if(answer8 == "Chidori") \{\
      score[1]++\
    \}\
    if(answer8 == "Shadow Possession Jutsu") \{\
      score[3]++\
    \}\
    if(answer8 == "Rasengan") \{\
      score[0]++\
    \}\
    if(answer8 == "Healing Powers") \{\
      score[2]++\
    \}\
  if(answer8 == "Mind Transfer. Jutsu") \{\
      score[4]++\
    \}\
  if(answer8 == "Partial Expansion Jutsu") \{\
      score[5]++\
    \}\
    var message = "Thanks for filling in my form! <br/><br/>"\
    \
   // Summarise the answers and work out who had the most\
    biggest = -1 // will score the best score\
    var best_id // will be the ID of the best one \
    for(i=0;i<6;i++) \{   // 4, because there are 4 things in my list - you will need to change this number\
      message = message + people[i] + " likeness score is " + score[i] + "<br/>"\
      if (score[i]>biggest) \{\
        best_id = i;\
        biggest = score[i]\
      \}\
    \}\
\
    //  This bit writes the result in the 14th column of your sheet\
    sheet.getRange(lastRow, 14).setValue(people[best_id])\
\
     // Let's announce the winner\
    message = message + "<br/>It looks like you are <br/>  " + people[best_id] + "<br /><img class='people_images' src='" + people_images[best_id] + "'>"\
\
  \
    // This is the bit that sends EMAILs (optional)\
    //  this sets the message to HTML (don't change)\
    var advancedArgs = \{htmlBody:message\};   \
    //  The sends the EMAIL to the student's EMAIL, you will have to allow it the first time you run. Remove the \'93//\'94 from in front if you want it to post an EMAIL\
    //MailApp.sendEmail(useremail, "Survey results ", message , advancedArgs);\
\
    // Sent the results message back to the webpage ....\
    return message;\
\
\
 \
 \}\
\
\
}
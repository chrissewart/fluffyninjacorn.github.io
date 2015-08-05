
var questions={
  start:{
    picture:"u_question.jpg",
    question:"Take the test to find out what type of unicorn you are most like!",
    a1:"Start",
    a1state:"rapper"
  },
  rapper:{
    picture:"q_rapper.jpg",
    question:"Who is your favourite rapper?",
    a1:"Eminem",
    a1state:"chocolate",
    a2:"Tiny Tempah",
    a2state:"yocorn"
  },
  chocolate:{
    picture:"q_chocolate.jpg",
    question:"is chocolate the best thing in the world ever?",
    a1:"Yes",
  a1state:"food",
  a2:"Only if it is from Honeydukes",
  a2state:"Pottercorn"
  },
food:{
  picture:"q_food.jpg",
  question:"What would you rather eat?",
  a1:"lollipops",
  a1state:"moustache",
  a2:"nutella",
  a2state:"Nutellacorn"
},
moustache:{
  picture:"q_moustache.jpg",
  question:"I moustache you a question,bows or moustaches?",
  a1:"moustache",
  a1state:"tophat",
  a2:"bows",
  a2state:"Girlicorn"
},
tophat:{
  picture:"q_tophat.jpg",
  question:"Top hat or not, that is the question",
  a1:"not",
  a1state:"nocturnal",
  a2:"top hat",
  a2state:"Tophatcorn"
},
nocturnal:{
  picture:"q_sleep.jpg",
  question:"Are you nocturnal?",
  a1:"yes",
  a1state:"liquid",
  a2:"no",
  a2state:"Sleepicorn",
},
liquid:{
  picture:"q_drink.jpg",
  question:"Whhich do you prefer?",
  a1:"milk",
  a1state:"volume",
  a2:"blood",
  a2state:"vampirecorn",
},
volume:{
  picture:"q_sound.jpg",
  question:"Are you noisy or quiet?",
  a1:"quiet",
  a1state:"sport",
  a2:"noisy",
  a2state:"Babycorn"
},
sport:{
  picture:"q_sport.jpg",
  question:"Whiich sport do you prefer?",
  a1:"football",
  a1state:"colour",
  a2:"martial arts",
  a2state:"Ninjacorn"
},
colour:{
  picture:"q_colour.jpg",
  question:"What is your favourite colour?",
  a1:"all of them",
  a1state:"daydream",
  a2:"the colour of my football team",
  a2state:"Footicorn"
},
daydream:{
  picture:"q_daydream.jpg",
  question:"Do you daydream?",
  a1:"no",
  a1state:"sweet",
  a2:"yes",
  a2state:"Dreamicorn"
},
sweet:{
  picture:"q_sweet.jpg",
  question:"Which do you prefer?",
  a1:"smarties",
  a1state:"more",
  a2:"dairy milk",
  a2state:"Classicorn"
},
more:{
  picture:"q_more.jpg",
  question:"What do you have more of?",
  a1:"creativity",
  a1state:"rather",
  a2:"imagination",
  a2state:"Crazycorn"
},
rather:{
  picture:"q_rather.jpg",
  question:"Which would you rather do?",
  a1:"maths/english",
  a1state:"brain",
  a2:"art",
  a2state:"Painticorn",
},
brain:{
  picture:"q_brain.jpg",
  question:"Are you brainy or brain dead?",
  a1:"brain dead",
  a1state:"consume",
  a2:"brainy",
  a2state:"Clevercorn"
},
consume:{
  picture:"q_consume.jpg",
  question:"What would you rather consume?",
  a1:"smoothie",
  a1state:"Thirstycorn",
  a2:"brains",
  a2state:"Zombiecorn",
},
  // End states
  yocorn:{
    picture:"u_yocorn.jpg",
    question:"You are Yocorn!",
    a1:"try again",
    a1state:"start"
  },
  Pottercorn:{
    picture:"u_Pottercorn.jpg",
    question:"You are Pottercorn!",
    a1:"try again",
    a1state:"start"
  },
  Nutellacorn:{
    picture:"u_Nutellacorn.jpg",
    question:"You are Nutellacorn!",
    a1:"try again",
    a1state:"start"
  },
  Girlicorn:{
    picture:"u_Girlicorn.jpg",
    question:"You are Girlycorn!",
    a1:"try again",
    a1state:"start"
  },
  Tophatcorn:{
    picture:"u_Tophatcorn.jpg",
    question:"You are Tophatcorn!",
    a1:"try again",
    a1state:"start"
  },
  Sleepicorn:{
    picture:"u_Sleepicorn.jpg",
    question:"You are Sleepicorn!",
    a1:"try again",
    a1state:"start"
  },
  vampirecorn:{
    picture:"u_vampirecorn.jpg",
    question:"You are vampirecorn!",
    a1:"try again",
    a1state:"start"
  },
  Babycorn:{
    picture:"u_Babycorn.jpg",
    question:"You are Babycorn!",
    a1:"try again",
    a1state:"start"
  },
  Ninjacorn:{
    picture:"u_Ninjacorn.jpg",
    question:"You are Ninjacorn!",
    a1:"try again",
    a1state:"start"
  },
  Footicorn:{
    picture:"u_Footicorn.jpg",
    question:"You are Footicorn!",
    a1:"try again",
    a1state:"start"
  },
  Dreamicorn:{
    picture:"u_Dreamicorn.jpg",
    question:"You are Dreamicorn!",
    a1:"try again",
    a1state:"start"
  },
Classicorn:{
  picture:"u_Classicorn.jpg",
  question:"You are Classicorn!",
  a1:"try again",
  a1state:"start"
},
Crazycorn:{
  picture:"u_Crazycorn.jpg",
  question:"You are Crazycorn!",
  a1:"try again",
  a1state:"start"
},
Painticorn:{
  picture:"u_Painticorn.jpg",
  question:"You are Painticorn!",
  a1:"try again",
  a1state:"start"
},
Clevercorn:{
  picture:"u_Clevercorn.jpg",
  question:"You are Clevercorn!",
  a1:"try again",
  a1state:"start"
},
Thirstycorn:{
  picture:"u_Thirstycorn.jpg",
  question:"You are Thirstycorn!",
  a1:"try again",
  a1state:"start"
},
Zombiecorn:{
  picture:"u_Zombiecorn.jpg",
  question:"You are Zombiecorn!",
  a1:"try again",
  a1state:"start"
}};





$('#a1').click(function(){
  next("a1");
});
$('#a2').click(function(){
  next("a2");
});

var state=questions.start;

function next(button){

  var nextStateName=state[button+"state"]; // a1state or a2state
  var nextState=questions[nextStateName];

  if(!nextState){
    alert('Doh! Forgotten to add a state for '+ state.question + ' button ' + button);
  }

  state=nextState;


  $('#question').text(nextState.question);
  $('#picture').attr("src", 'img/' + nextState.picture);
  $('#a1').text(nextState.a1);
  $('#a2').text(nextState.a2);

  if(nextState.a2){
    //a2 is hidden to begin with iliketrains
    $('#a2').show();
  } else {
    // Final unicorn screen only has one button
    $('#a2').hide();
  }
}

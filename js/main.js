'user strict'

{
  function setWord(){
    problem = problems.splice(Math.floor(Math.random() * problems.length),1)[0];
    word.textContent = problem;
    loc = 0;
  }
  const problems = [
    "one",
    "two",
    "three",
    "four",
    "five"
  ];
  let problem;
  let loc = 0 ;
  let startTime;
  let playing = false;

  const word = document.getElementById('word');

  document.addEventListener('click',()=>{
    if( playing === true){
      return;
    };
    playing = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown',e =>{
    if(e.key !== problem[loc]){
      return;
    };
      loc++;
      word.textContent = '_'.repeat(loc) + problem.substring(loc);
      if(loc === problem.length){
        if(problems.length === 0){
          const elapsedTime = ((Date.now() - startTime)/ 1000).toFixed(2);
          const result =document.getElementById('result');
          time.textContent = `Finished! ${elapsedTime} seconds`;
          return;
        }
        setWord();
      }
  });
}
let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0, 
          losses: 0,
          ties: 0
      };

      updateScore();
      /*
      if(!score){
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */

      //function for displaying the result
      function playGame(playerMove){
        comMove = func();

        
        let result = '';
        if(playerMove === 'rock'){
          if(comMove === 'rock'){
            result = 'Tie.';
          }else if (comMove === 'paper'){
            result = 'You Lose.';
          }else if (comMove === 'scissors'){
            result = 'You Win.';
          }

        }else if(playerMove === 'paper'){
          if(comMove === 'rock'){
            result = 'You Win.';
          }else if(comMove === 'paper'){
            result = 'Tie.';
          }else if(comMove === 'scissors'){
            result = 'You Lose.';
          }

        }else if(playerMove === 'scissors'){
          if(comMove === 'rock'){
            result = 'You Lose.';
          }else if(comMove === 'paper'){
            result = 'You Win.'; 
          }else if(comMove === 'scissors'){
            result = 'Tie.'
          }
        }

          if(result === 'You Win.'){
            score.wins += 1;
          }else if(result === 'You Lose.'){
            score.losses += 1;
          }else if(result === 'Tie.'){
            score.ties += 1;
          }
  
          localStorage.setItem('score',JSON.stringify(score));

          updateScore();

          document.querySelector('.res')
          .innerHTML = result;

          document.querySelector('.move')
          .innerHTML = `You 
          <img src="${playerMove}-emoji.png" class="emo">
          <img src="${comMove}-emoji.png" class="emo">
          Computer`;
      }
        
          function updateScore(){
            document.querySelector('.scoreboard')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
          }
    
      //function for picking computer move
      function func(){
      const ranNum = Math.random();
      if(ranNum >= 0 && ranNum < 1/3){
        comMove = 'rock';
      } else if (ranNum >= 1/3 && ranNum < 2/3){
        comMove = 'paper';
      }else if(ranNum >= 2/3 && ranNum < 1){
        comMove = 'scissors';
      }
      return comMove;
    }

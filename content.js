const settings = { method: "Get" };
var result = null;

setTimeout(modifyNewDiv, 100);

function addBadgeToDiv(div){
  div.setAttribute("done",true);
  getBadge(div);
}

function modifyNewDiv(){
  divs = document.getElementsByClassName('chat-line__username-container');
  for (let i = 0; i < divs.length; i++) {
    if(!divs[i].getAttribute("done")){
      addBadgeToDiv(divs[i]);
    }
  }
  setTimeout(modifyNewDiv, 100);
}

async function getBadge(div){

  var username = div.textContent;

  let divBadge = document.createElement('div');
  divBadge.setAttribute("class","InjectLayout-sc-1i43xsx-0 hDgGYp");
  let divButton = document.createElement('button');
  let imgBadge = document.createElement('img');
  imgBadge.setAttribute("class","chat-badge");
  imgBadge.width = 18;

  let customUrl = "https://www.crocolink.fr/username/?color=" + username;
  fetch(customUrl, settings)
  .then(res => res.json())
  .then((json) => {
    if(json!=null){
      result = json.color;
      if(result == "Jaune"){
        imgBadge.setAttribute("src","https://i.ibb.co/QXHfJgy/team-Jaune.webp");
        div.setAttribute("done",true);
      }else if(result == "Rouge"){
        imgBadge.setAttribute("src","https://i.ibb.co/TqsvSwZ/team-Rouge.webp");
        div.setAttribute("done",true);
      }else{
        imgBadge.setAttribute("src","https://i.ibb.co/SNKgZMk/ticroco.webp");
        div.setAttribute("done",true);
      } 
      //imgBadge.setAttribute("srcset","https://i.ibb.co/TqsvSwZ/team-Rouge.webp 1x, https://i.ibb.co/TqsvSwZ/team-Rouge.webp 2x, https://i.ibb.co/TqsvSwZ/team-Rouge.webp 4x")
      divButton.appendChild(imgBadge);
      divBadge.appendChild(divButton);
      if(div.children[0] != null){
        div.children[0] .appendChild(divBadge);
      }else{
        let span = document.createElement('span');
        span.appendChild(divBadge);
        div.appendChild(span);
      }
    }
  });
}



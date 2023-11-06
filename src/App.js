import React, { useEffect } from "react";
import { chatConfig, chatWindow } from "kore-web-sdk";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css";

const App = () => {
  useEffect(() => {
    let botOptions = chatConfig.botOptions;

    botOptions.JWTUrl = "https://demo.kore.net/users/sts";
    botOptions.userIdentity = "u-" + randomString(32); // Provide users email id here"lovaraju.divili@aifalabs.com";
    botOptions.botInfo = {
      name: "JAIDA",
      //name: "JAIDA",
      _id: "st-19acbca9-90ab-596e-b872-1ec8510c795e",
    }; // bot name is case sensitive
    botOptions.clientId = "cs-a1d6272a-9b54-5a44-b9c8-c484266ea28e";
    botOptions.clientSecret = "+0Kc5Tv/GwxYQXq4kwbbcARCZMA/UYfXgogLbr8diTY=";

    var chatWindowInstance = new chatWindow(chatConfig);

    chatWindowInstance.on("viewInit", (chatElement) => {
      console.log("viewInit====>", chatElement);
      const chatBodyEl = chatElement.chatEle.find(".kore-chat-body");
      const chatHeaderEl = chatElement.chatEle.find(".kore-chat-header");
      const chatFooterEl = chatElement.chatEle.find(".kore-chat-footer");
      // chatBodyEl.css("display", "none");
      chatHeaderEl.css("display", "none");
      // chatFooterEl.css("display", "none");
      console.log("body", chatBodyEl);
      //top container
      // Create the main container
      const container = document.createElement("div");
      container.className = "container-1";
      container.style.fontSize = "25px";
      container.style.fontWeight = "700";

      //removing the header title
      let HeaderTitle=document.getElementById("botHeaderTitle")
      HeaderTitle.remove();

      const closeIcon = document.createElement("img");
closeIcon.className = "close-btn";
closeIcon.src="data:image/svg+xml,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%0A%3Cpath%20d=%22M7.05025%2016.9498L16.9497%207.05027%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3Cpath%20d=%22M7.05025%207.05029L16.9497%2016.9498%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3C/svg%3E"
closeIcon.style.cursor = "pointer";

// const imgElement = document.createElement('img');
// imgElement.src = 'data:image/svg+xml,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%0A%3Cpath%20d=%22M7.05025%2016.9498L16.9497%207.05027%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3Cpath%20d=%22M7.05025%207.05029L16.9497%2016.9498%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3C/svg%3E';
// closeIcon.appendChild(imgElement);
 
//headerTitle changes
let jaidaHeader = document.createElement('div');
jaidaHeader.className="botHeaderTitle"
jaidaHeader.innerHTML ="JAIDA";
     
let InsidejaidaHeader = document.createElement('div');
InsidejaidaHeader.className="botHeaderTitleSecond";
InsidejaidaHeader.innerHTML="J&J AI Digital Assistant"

chatHeaderEl.append(jaidaHeader);
chatHeaderEl.append(InsidejaidaHeader);

// const closeButton = document.querySelector('.kore-chat-header .chat-box-controls button.close-btn');
// closeButton.style.background = '';



      // Define a function to toggle the visibility of the template container
      function toggleVisibility() {
        templateContainer.style.display = "none";
        container.style.display = "none";
        chatBodyEl.css("display", "block");
        chatHeaderEl.css("display", "flex");
        chatFooterEl.css("display", "block");
      }

      // Attach the click event to the close icon to toggle visibility
      closeIcon.addEventListener("click", toggleVisibility);

      // Append the close icon to the container
      container.appendChild(closeIcon);
      //template container
      const templateContainer = document.createElement("div");
      templateContainer.className = "template-container";
      //jaida-logo-container
      const jaidaLogoContainer = document.createElement("div");
      jaidaLogoContainer.className = "jaida-logo-container";

      //image element within jaidaLogoContainer
      const jaidaLogo = document.createElement("img");
      jaidaLogo.src =
        "https://demo.kore.ai/jnj2022/UI/libs/images/jaida-logo.png";
      jaidaLogo.alt = "jaida_logo";

      // Append the jaidaLogo to jaidaLogoContainer
      jaidaLogoContainer.appendChild(jaidaLogo);
      jaidaLogoContainer.appendChild(closeIcon)
// Append the jaida logo container to the template container
     templateContainer.appendChild(jaidaLogoContainer);

// Append the template container to the main container
    container.appendChild(templateContainer);

      //welcome-msg-container
      const welcomeMsgContainer = document.createElement("div");

      //content within welcomeMsgContainer
      const welcomeMsgText = document.createElement("div");
      //change 1
      welcomeMsgContainer.className="welcome-msg-container"            
      welcomeMsgText.textContent = "Hi, I am here to help";
      const welcomeMsgSpan = document.createElement("span");
      welcomeMsgSpan.textContent = "Let's get started!";

      // Append the text and span to welcomeMsgText
      welcomeMsgText.appendChild(document.createElement("br"));
      welcomeMsgText.appendChild(welcomeMsgSpan);

      // Append welcomeMsgText to welcomeMsgContainer
      welcomeMsgContainer.appendChild(welcomeMsgText);

      // Create the buttons-footer-container
      const buttonsFooterContainer = document.createElement("div");
      buttonsFooterContainer.className = "buttons-footer-container";

      //create a outer div for select button
      const selectDiv= document.createElement("div");
      selectDiv.className = "selectBG";

      buttonsFooterContainer.appendChild(selectDiv)
      // Create the select element within buttonsFooterContainer
      const selectElement = document.createElement("select");
      // selectElement.id = "pick-chat-lang";
       selectElement.className="lang-dropdown";
      // Create option elements and append them to the select element
      const optionEnglish = document.createElement("option");
      optionEnglish.value = "en";
      optionEnglish.textContent = "English";
      const optionGerman = document.createElement("option");
      optionGerman.value = "de";
      optionGerman.textContent = "German";

      
      selectElement.appendChild(optionEnglish);
      selectElement.appendChild(optionGerman);
      selectDiv.appendChild(selectElement);
      // Create the button element within buttonsFooterContainer
      const startChatButton = document.createElement("button");
      startChatButton.className = "kr-startbutton";
      startChatButton.textContent = "Start Chat";
     // Assuming you have jQuery properly included

const koreHead = chatElement.chatEle.find(".kore-chat-header");
// const koreHeadDiv = chatElement.chatEle.find(" .header-title");
// koreHead.style.text="Jaida Universal Bot"
// koreHead.append("Jaida Universal Bot");

// const SendBtn = document.getElementsByClassName(".sendButton");
// console.log(SendBtn)
const koreBody = chatElement.chatEle.find(".kore-chat-body");
const koreFooter = chatElement.chatEle.find(".kore-chat-footer");
// const contain=chatElement.chatEle.find(".container")
const chatContain = document.getElementsByClassName("chat-container");
let currentUser = chatElement.chatEle.find(".fromCurrentUser");
  

// Get all elements with the class "chatInputBox"
const footContainer = document.getElementsByClassName("footerContainer")[0]; // Assuming there's only one element with this class
const chatIbElements = document.getElementsByClassName("chatInputBox")[0]; // Assuming there's only one element with this class
console.log(chatIbElements)

chatWindowInstance.on('onKeyDown', (chatdown) => {
  // console.log(chatdown);
  console.log(chatdown.event.originalEvent.key)
  // chatContain.off('keydown', '.chatInputBox');

  if (chatdown.event.originalEvent.key === 'Enter') {
    

    // Insert a newline character at the cursor's current position
    try {
      
    console.log("Enter key pressed");
    console.log(currentUser.prevObject);
    currentUser.stopPropagation() ;
    
    } catch (error) {
      console.log("error",error)
    }
  }
});









startChatButton.addEventListener('click', (e) => {
  templateContainer.style.display = "none";
  koreHead.css("display", "block");
  koreBody.css("display", "block");
  koreFooter.css("display", "block");
});

      const startChatImgButton = document.createElement("img");
      startChatImgButton.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzg3NTIgMy44NDM2NUwxMy40NzY0IDcuOTMxNTFMMTMuNDg5NCA3Ljk0NjU0TDEzLjQ5ODcgNy45NTcyOEwxMy40OTg5IDcuOTU3ODhMMTMuNDk4IDcuOTY5OTlMMTMuNDg3OCA3Ljk4MTE1TDkuMzgyNDUgMTIuMDg2NUM5LjM3NTcxIDEyLjA5MzIgOS4zNjYyOSAxMi4wOTMyIDkuMzU5NTUgMTIuMDg2NUM5LjM1NzM4IDEyLjA4NDMgOS4zNTY2NCAxMi4wODI4IDkuMzU2MjUgMTIuMDgyQzkuMzU1NzQgMTIuMDgwOCA5LjM1NTI2IDEyLjA3OSA5LjM1NTE2IDEyLjA3NjhDOS4zNTUgMTIuMDczMiA5LjM1NTc4IDEyLjA3IDkuMzU3MzMgMTIuMDY3M0w5LjM2OTY3IDEyLjA1MzVMMTIuNTkwNiA4LjgzMTUyTDEzLjQ0MzggNy45NzgwMkgxMi4yMzdIMi41MTdDMi41MTMwNiA3Ljk3ODAyIDIuNTEwODUgNy45NzczMyAyLjUwOTQ2IDcuOTc2NzRDMi41MDc3NSA3Ljk3NjAzIDIuNTA1OTYgNy45NzQ4NyAyLjUwNDMzIDcuOTczMjVDMi41MDI3MSA3Ljk3MTYzIDIuNTAxNjcgNy45Njk5NyAyLjUwMTA4IDcuOTY4NTdDMi41MDA2MyA3Ljk2NzUgMi41IDcuOTY1NjQgMi41IDcuOTYyMDJDMi41IDcuOTU5MDcgMi41MDA0OCA3Ljk1NzQ3IDIuNTAwOTEgNy45NTY0MUMyLjUwMTQ0IDcuOTU1MDYgMi41MDI0MSA3Ljk1MzM3IDIuNTA0MDIgNy45NTE2MkMyLjUwNjMyIDcuOTQ5MTIgMi41MDg4MyA3Ljk0NzU0IDIuNTExNTggNy45NDY2OUwyLjUyNjg2IDcuOTQ2MDJIMTIuMjM2SDEzLjQ0MjZMMTIuNTg5NyA3LjA5MjU4TDkuMzU5NjYgMy44NjA1OEw5LjM1OTU1IDMuODYwNDdDOS4zNTczOCAzLjg1ODMgOS4zNTY2NCAzLjg1Njg1IDkuMzU2MjUgMy44NTU5NUM5LjM1NTc0IDMuODU0NzggOS4zNTUyNiAzLjg1MzA0IDkuMzU1MTYgMy44NTA3N0M5LjM1NTAyIDMuODQ3NTkgOS4zNTU2MSAzLjg0NDc2IDkuMzU2ODMgMy44NDIyNUw5LjM2MjQ3IDMuODM2MDlDOS4zNjMzNyAzLjgzNTQ3IDkuMzY0MTEgMy44MzUxIDkuMzY0NyAzLjgzNDg1QzkuMzY2MSAzLjgzNDI0IDkuMzY3OTcgMy44MzM3NCA5LjM3MDI2IDMuODMzNjRDOS4zNzM3IDMuODMzNDggOS4zNzY1IDMuODM0MTggOS4zNzg4NSAzLjgzNTQ2TDkuMzg3NTIgMy44NDM2NVoiIGZpbGw9IiMyNjM0NEEiIHN0cm9rZT0id2hpdGUiLz4KPC9zdmc+Cg==";
      startChatButton.append(startChatImgButton);


      // Create the footer-text element within buttonsFooterContainer
      const footerText = document.createElement("div");
      footerText.className = "footer-text";
      footerText.textContent =
        "This chat may be analyzed for training, quality, and compliance purposes. To learn more about your privacy rights, you may consult the J&J Global Privacy Notice in the Summit training system.";

      // Append the select element, button, and footerText to buttonsFooterContainer
      // buttonsFooterContainer.appendChild(selectElement);
      buttonsFooterContainer.appendChild(startChatButton);
      buttonsFooterContainer.appendChild(footerText);

      // Append jaidaLogoContainer, welcomeMsgContainer, and buttonsFooterContainer to templateContainer
      templateContainer.appendChild(jaidaLogoContainer);
      templateContainer.appendChild(welcomeMsgContainer);
      templateContainer.appendChild(buttonsFooterContainer);

      // Append templateContainer to the top-level container
      container.appendChild(templateContainer);

      // Append the top-level container to chatElement.chatEle
      chatElement.chatEle.append(container);

      // const yRail = document.getElementsByClassName(".ps--scrolling-y");
      // yRail.css({
      //   yRail.style.background = "blue"

      // })


      let sendMsg = chatElement.chatEle.find(".chatSendMsg");
    
      // let sentMsg=document.getElementById('chatSend');
      
      sendMsg.text(""); // Clear the text inside the element

      let divInside = document.createElement("div");
      divInside.className="sendBtnCnt"
      sendMsg.append(divInside);
      
      
      let sendBtn = document.createElement("button");
      sendBtn.type="button"
      sendBtn.className = "sendButton";
      divInside.append(sendBtn);
      

      let IconInside = document.createElement("img");
      IconInside.src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.48183%204.00046C5.32994%204.00616%205.18887%204.08049%205.09836%204.2027C5.00796%204.32481%204.97794%204.48151%205.017%204.62838L6.68291%2010.8729L14.0392%2011.999L6.68405%2013.124L5.01714%2019.3703C4.98355%2019.4952%204.99973%2019.6284%205.06223%2019.7415C5.12484%2019.8548%205.22874%2019.9395%205.35239%2019.9777C5.47593%2020.0159%205.60952%2020.0047%205.72503%2019.9465L20.7245%2012.4461C20.8355%2012.3903%2020.9217%2012.2953%2020.9664%2012.1794C21.0112%2012.0635%2021.0112%2011.9352%2020.9664%2011.8193C20.9217%2011.7034%2020.8355%2011.6084%2020.7245%2011.5525L5.72503%204.05221C5.6497%204.01471%205.566%203.99696%205.48196%204.00042L5.48183%204.00046Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A"
      sendBtn.append(IconInside);

      let BlockBtn=chatElement.chatEle.find(".customBranding-theme")
      BlockBtn.css({
        display:"block"
      })

      // const sendButton = chatElement.chatEle.find(".sendButton");
//       const chatInputBox = document.querySelector(".chatInputBox");

// chatInputBox.addEventListener("keydown", (e) => {
//   e.preventDefault();
// });

// chatInputBox.addEventListener("keyup", (e) => {
//   e.preventDefault();
// });

// chatInputBox.addEventListener("keypress", (e) => {
//   e.preventDefault();
// });

{/* <div role="textbox" class="chatInputBox" contenteditable="true" placeholder="Message..."></div> */}
// let Chatbox=chatElement.chatEle.find(".chatInputBox")
// Chatbox.remove();

// let footerContainer=chatElement.chatEle.find(".footerContainer")
// let ChatboxBtn = document.createElement("input");
// // ChatboxBtn.role = "textbox";
// ChatboxBtn.className = "chatInputBox";
// ChatboxBtn.contentEditable = true;
// ChatboxBtn.placeholder = "Message..."
// footerContainer.append(ChatboxBtn)
// BlockBtn.after(ChatboxBtn)



// sendButton.addEventListener("keydown", (event) => {
//   console.log(sendButton)

//   if (event.key === "Enter") {
//     event.preventDefault(); 
//   }
// });
    //  console.log(sendBtn)
    //   sendBtn.removeEventListener("keypress", (event) => {
    //     if (event.key === "Enter") {
    //       event.preventDefault(); 
    //     }
    //   });

    //   sendBtn.removeEventListener("keyup", (event) => {
    //     if (event.key === "Enter") {
    //       event.preventDefault(); 
    //     }
    //   });
    //   sendBtn.removeEventListener("keydown", (event) => {
    //     if (event.key === "Enter") {
    //       event.preventDefault(); 
    //     }
    //   });
      // let ExpandBtn=chatElement.chatEle.find(".expand-btn");
      // let ExpandImg=document.createElement("img")
      // ExpandImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAADj4+Ovr69AQEDw8PA8PDzl5eVWVlbExMTy8vLo6Ojc3NzV1dUEBARISEh9fX0TExOampoZGRlcXFzPz89zc3NnZ2e0tLTAwMCpqan5+fl5eXmRkZEtLS2jo6OJiYlGRkYoKCiNjY0ddXiFAAAEz0lEQVR4nO3dCVLbQBCFYY9ZDHjHJCyOCUnuf8dETAE2ljxLv+6eIu8/gNCX7qqYRGONRowxxhhjjDHGGGOMMcYYY4wxxhhjjDHG/qu209n4RunSk9l4q3Pp7G5uL0PX4sccfemL3fPrpTerGfrSBe3CR8sp9NKrvUvfKe1IspvncNAj7tLT9eGlv+EuXdBF+NwZ6tLjo0tfoy5d0DEQRjwGehD7gCBiH9Ce2A+EEPuB1sQhIIA4BLQlDgPFxGGgJfEUUEg8BbQjngaKiKeBVsQUUEBMAW2IaWA1MQ20IOYAK4k5QH1iHrCKmAfUJuYCK4i5QF1iPrCYmA/UJJYAC4klQD1iGbCIWAbUIpYCC4ilQB1iOTCbWA5UIW4qbiOPWAMMYYwGfq+6jRxiHTBswMBZ3W1kECuBIfzECitHmCZWA8MCK6y+jwSxHhgC9B+hq5c0QZQAsWv6KLmTYaIIGFZI4YPoVoaIMmC4b0jYTxQCsULZlvYTpUDslk6kd3NMFAPDE1Io+duinygHgj+3vYCJAOAzFFj1m8Xn9ogAIPK/K1+7BdzTOxEBXIKBo9EScFdnOGBQ+J/vc8BtncGAEzwQRoQA4b//xi4Bt/YwBVxEZ4JdiCkiUgO2QlRa0RhiUaUpTrDLf4rKQH+i6orGfBdVfYJdnlM0AXoSDVY05rWoRhPs8pmiIdCHaLaiMftFNZ1gl/UUzYHWROMVjVkuqsMEu+ym6AS0I7qsaMxmUd0m2GUxRVegBdFxRWPai+o8wS7dKTYA1CW6r2hMb1GbmGCX1hSbAWoRG1nRmMaiNjTBLvwUGwPiiU2taAy7qM1NsAs5xSaBSGKDKxpDLWqjE+z69dWBsudQ37r1VpwI8hAC8Fw/PBCwXSIM2CoRCGyTCAW2SAQD2yPCga0RFYBtEVWALRGVgO0Q1YCtEBWBbRBVgS0QlYH+RHWgN9EA6Es0AXoSjYB+RDOgF9EQ6EM0BXoQjYH2RHOgNdEBaEt0AVoSnYB2RDegFdERaEN0BVoQnYH6RHegNrEBoC6xCaAmEQIEnutvEzjBnetvE9g9RtIqUf4VNeHtKQvIuX44cAu4q/fHSBBThL9Q4x5wUx/PySCIYOAccEv7DwIBFhX82A1ghIdPOgGmiBWigQgi9MUl8qe5jp9VEy8qdE2l30jX+zCedIotfavgwNOGQmJL3yo49DilbFGhwmsVoHCKL0ih6KuPTj0QKyFiP5uu0z+wBihaVOxLwnbpH1gFFEzxHAqs/+Cdfma7loj+zvInLWDtot6BgZWfTPOeuq+Z4hoOHI2utIA1xIXKCwOLifnnJooX9UIDWEwsORhSOEW1Vz4WEcvOLpUQF0oT7Coglh7tKVhURWABsfzsUvYUld9KmkmsOV6XR9Rc0VgWse70WdaiqgOziLXH6zKmaPLi3CSx/gRoiqi/orEEUXJAMrGoRsAEUXYC9OQUDd/tfIIoPaQ8TLRa0dggUX6Gd3BRTYGDRMQh5YEpmr9+vJeIOUffR7Rd0VgPEXXMvGdRHYA9RNw5+s9T1PmFN93haz2ekX/Mh+8IW26Bly5qvrdO4NegXf/+uLTrqZnZ7moTFucr9AtD/jX/c7UO6+WL9WvjGWOMMcYYY4wxxhhjjDHGGGNftb/seUeftm5sVQAAAABJRU5ErkJggg=="
      // ExpandBtn.append(ExpandImg);header-title

     
    //REmoving all the dom header icons present 
    let Rbtn=chatElement.chatEle.find(".reload-btn")
    Rbtn.remove();
    // let Dbtn=chatElement.chatEle.find(".close-btn")
    // Dbtn.remove();
    let Ebtn=chatElement.chatEle.find(".expand-btn")
    Ebtn.remove();
    let Mbtn=chatElement.chatEle.find(".minimize-btn")
    Mbtn.remove();
   
//     //Adding new icon for minimizing and expanding window
    let botControls=chatElement.chatEle.find(".chat-box-controls") 

    //Creating a globe icon
    let GlobeBtn = document.createElement("img");
    GlobeBtn.type = "button";
    GlobeBtn.className = "reload-btn";
    botControls.append(GlobeBtn);
    GlobeBtn.src = "data:image/svg+xml,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%0A%3Cpath%20d=%22M12%2019C15.866%2019%2019%2015.866%2019%2012C19%208.13401%2015.866%205%2012%205C8.13401%205%205%208.13401%205%2012C5%2015.866%208.13401%2019%2012%2019Z%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%0A%3Cpath%20d=%22M5%2012H19%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%0A%3Cpath%20d=%22M14.6923%2012C14.5601%2014.5598%2013.6172%2017.0113%2012%2019C10.3828%2017.0113%209.43994%2014.5598%209.30769%2012C9.43994%209.44016%2010.3828%206.9887%2012%205C13.6172%206.9887%2014.5601%209.44016%2014.6923%2012V12Z%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%0A%3C/svg%3E%0A";
    GlobeBtn.style.cursor = "pointer";


    //Creating an expand icon
    let ExpandBtn = document.createElement("img");
    ExpandBtn.type = "button";
    ExpandBtn.className = "expand-btn";
    botControls.append(ExpandBtn);
    ExpandBtn.src = "data:image/svg+xml,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%0A%3Cpath%20d=%22M11%206H6V11%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3Cpath%20d=%22M6%206L10.5%2010.5%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3Cpath%20d=%22M13%2018L18%2018L18%2013%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3Cpath%20d=%22M18%2018L13.5%2013.5%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3C/svg%3E%0A";
    ExpandBtn.style.cursor = "pointer";


    //creating an minimize button
    let MinimizeBtn = document.createElement("img");
    MinimizeBtn.type = "button";
    MinimizeBtn.className = "minimize-btn";
    botControls.append(MinimizeBtn);
    MinimizeBtn.src = "data:image/svg+xml,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%0A%3Crect%20x=%223%22%20y=%2216%22%20width=%2218%22%20height=%222.5%22%20rx=%221.25%22%20fill=%22white%22/%3E%0A%3C/svg%3E%0A";
    MinimizeBtn.style.cursor = "pointer";


    let CloseBtnImg = document.createElement("img");
    CloseBtnImg.type = "button";
    CloseBtnImg.className = "close-btn";
    botControls.append(CloseBtnImg);
    CloseBtnImg.src = "data:image/svg+xml,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%0A%3Cpath%20d=%22M7.05025%2016.9498L16.9497%207.05027%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3Cpath%20d=%22M7.05025%207.05029L16.9497%2016.9498%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22/%3E%0A%3C/svg%3E";
    CloseBtnImg.style.cursor = "pointer";



        
    });




    function randomString(length) {
      var chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = "";
      for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    // debugger;
    chatWindowInstance.show(chatConfig);
  }, []);

  return (
    <div className="container" style={{ fontSize: "25px", fontWeight: "700" }}>
      Kore AI WebSDK
      {/* <div className="template-container">
        <div className="jaida-logo-container">
          <div className="image-container">
          <img
            src="https://demo.kore.ai/jnj2022/UI/libs/images/jaida-logo.png"
            alt="jaida_logo"
          />
          </div>
          <div>
          <CloseIcon/>
          </div>

        </div>

        <div className="welcome-msg-container">
          <div>
            Hi, I am here to help
            <br />
            <span>Let's get started!</span>
          </div>
        </div>
        <div className="buttons-footer-container">
          <div>
            <select id="pick-chat-lang" className="lang-dropdown">
              <option value="en">English</option>
              <option value="de">German</option>
            </select>
          </div>
          <div>
            <button className="kr-startbutton">
              <div>Start Chat</div>
              <div>
                <ArrowForwardIcon />
              </div>
            </button>
          </div>
          <div class="footer-text">
            This chat may be analyzed for training, quality, and compliance
            purposes. To learn more about your privacy rights, you may consult
            the J&J Global Privacy Notice in the Summit training system.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;
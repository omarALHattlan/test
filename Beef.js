const SideBarOn = () =>{
    document.getElementById('SideBar').style.width = '30%';
    document.getElementById('LastMenuButton').style.left = '10px';
    document.getElementById('ShadowDiv').style.display = 'block';
    document.getElementById('FirstMenuButton').style.display = 'none';
    document.getElementById('Dot').style.width = '40px';
    document.getElementById('Dot').style.height = '40px';
    document.getElementById('Dot').style.top = '9px';
    document.getElementById('Dot').style.left = '18px';
    document.getElementById('SideBarBtns').style.left = '-25px';
    document.getElementById('SideBarHr').style.display = 'block';
    document.getElementById('SideBarBtns').style.transitionDelay = '0.2s';
}
const SideBarOff = () =>{
    document.getElementById('SideBar').style.width = '0%';
    document.getElementById('LastMenuButton').style.left = '-100px';
    document.getElementById('FirstMenuButton').style.display = 'block';
    document.getElementById('ShadowDiv').style.display = 'none';
    document.getElementById('Dot').style.width = '0px';
    document.getElementById('Dot').style.height = '0px';
    document.getElementById('Dot').style.top = '28px';
    document.getElementById('Dot').style.left = '-100px';
    document.getElementById('SideBarBtns').style.left = '-500px';
    document.getElementById('SideBarHr').style.display = 'none';
    document.getElementById('SideBarBtns').style.transitionDelay = '0s';
}
const ShadowClick = () =>{
    SideBarOff();
}
const AccountDropDownOn = () =>{
    document.getElementById('AccountDropDown').style.width = '250px';
    document.getElementById('AccountDropDown').style.height = '250px';
    document.getElementById('AccountDropDown').style.top = '42px';
    document.getElementById('AccountDropDown').style.right = '24px';
    document.getElementById('AccountLogoOn').style.display = 'none';
    document.getElementById('AccountLogoOff').style.display = 'block';
    document.getElementById('SignOut').style.top = '260px';
    document.getElementById('SignOut').style.right = '42px';
    document.getElementById('SignOut').style.width = '60px';
    document.getElementById('SignOut').style.height = '20px';
    document.getElementById('SignOut').style.display = 'block';
}
const AccountDropDownOff = () =>{
    document.getElementById('AccountDropDown').style.width = '0px';
    document.getElementById('AccountDropDown').style.height = '0px';
    document.getElementById('AccountDropDown').style.top = '25px';
    document.getElementById('AccountDropDown').style.right = '34px';
    document.getElementById('AccountLogoOn').style.display = 'block';
    document.getElementById('AccountLogoOff').style.display = 'none';
    document.getElementById('SignOut').style.top = '25px';
    document.getElementById('SignOut').style.right = '34px';
    document.getElementById('SignOut').style.width = '0px';
    document.getElementById('SignOut').style.height = '0px';
    document.getElementById('SignOut').style.display = 'none';
}
/* document.getElementById('') = ''; */
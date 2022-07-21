//SIDEBAR 
const menuItems = document.querySelectorAll('.menu-items');

//remove active class

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}



//add active class

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display ='none';
        } else {
            document.querySelector('.notifications-popup').style.display ='block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


//MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearchBox = document.querySelector('#message-search');

//search message chat
const searchMessage = () => {
    const val= messageSearchBox.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let odogwu = chat.querySelectorAll('h5');
        let name = odogwu.textContent.toLowerCase();
        console.log(name);
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
        

    })
}

messageSearchBox.addEventListener('keyup', searchMessage);



//highlight message modal when message icon is clicked 
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 3000);
})


//THEME TOGGLE
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('dark-mode');
});



//OOP
//DATA ALGORITHMS
//API ENDPOINTS


//REACTJS

//NODEJS

//PYTHON
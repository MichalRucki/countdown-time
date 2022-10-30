const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')

const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImage = document.querySelector('#event-image')

const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const saveButton = document.querySelector('.save')
const eventSpan = document.querySelector('.event')

let usersTime;

const setTime = () => {
    const currentDate = new Date()
    const result = usersTime - currentDate;

    const days = Math.floor(result / 1000 / 60 / 60 / 24)
    const hours = Math.floor(result / 1000 / 60 / 60) % 24
    const minutes = Math.floor(result / 1000 / 60) % 60
    const seconds = Math.floor(result / 1000) % 60

    daysCount.textContent = days
    hoursCount.textContent = hours
    minutesCount.textContent = minutes
    secondsCount.textContent = seconds


}
 

const appUpdate = () => {
    eventSpan.textContent = eventName.value;
    usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);

    imageSection.style.backgroudImage = `url('${eventImage.value}')`;

    setTime();
}


settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('active')
})
saveButton.addEventListener('click', appUpdate)

appUpdate()
setInterval(setTime, 1000)